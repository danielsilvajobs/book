"use client";

import { Clock, Send, CheckCircle, XCircle } from 'lucide-react';
import React, { useState } from 'react';


const useFormSubmission = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<null | 'loading' | 'success' | 'error'>(null);

    // useEffect(() => {
    //     const initializedApp = initializeApp(firebaseConfig);
    //     setApp(initializedApp);

    //     const initializedAppCheck = initializeAppCheck(
    //         initializedApp,
    //         { provider: new ReCaptchaV3Provider('6LdReOwrAAAAADbTZsyU3PHyBO0LbFWm6AhiTtBu') } // ReCaptchaV3Provider or CustomProvider
    //     );

    //     setAppCheck(initializedAppCheck);

    //     console.log("Firebase App and App Check initialized.", initializedApp, initializedAppCheck);

    // }, []);

    const callApiWithAppCheck = async (url: string, options: RequestInit): Promise<Response> => {

        // let appCheckTokenResponse;

        // try {
        //     appCheckTokenResponse = await getToken(appCheck, /* forceRefresh= */ false);
        // } catch (err) {
        //     // Handle any errors if the token was not retrieved.
        //     console.error("Error getting App Check token:", err);
        //     return Promise.reject(err);
        // }

        // Include the App Check token with requests to your server.
        options.headers = {
            ...options.headers,
            //'X-Firebase-AppCheck': appCheckTokenResponse.token,
            'x-api-key': 'xxxxxxxxxxxxxx'
        };

        return fetch(url, options);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');

        if (name && email && message) {
            callApiWithAppCheck('https://us-central1-book-30-days.cloudfunctions.net/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message })
            }).then(response => {

                if (response.ok) {
                    setStatus('success');
                } else {
                    setStatus('error');
                }

                setName('');
                setEmail('');
                setMessage('');
            }).catch(() => {
                setStatus('error');
            });

        } else {
            setStatus('error');
        }

    };

    return {
        name, setName,
        email, setEmail,
        message, setMessage,
        status, setStatus,
        handleSubmit
    };
};


export const ContactForm = () => {
    const { name, setName, email, setEmail, message, setMessage, status, setStatus, handleSubmit } = useFormSubmission();

    const isSubmitting = status === 'loading';

    return (
        <div id="contact" className="max-w-xl mx-auto p-6 bg-white shadow-xl rounded-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Get in Touch</h2>
            <p className="text-gray-600 mb-6">Ask a question about the plan or give your feedback.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="mt-1 block w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="mt-1 block w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea
                        id="message"
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className="mt-1 block w-full rounded-lg border border-gray-300 p-3 text-black shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl shadow-sm text-white transition duration-300 ${isSubmitting ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                        }`}
                >
                    {isSubmitting ? (
                        <>
                            <Clock className="w-5 h-5 mr-2 animate-spin" />
                            Sending...
                        </>
                    ) : (
                        <>
                            <Send className="w-5 h-5 mr-2" />
                            Send Message
                        </>
                    )}
                </button>
            </form>

            {/* Status Message */}
            {status === 'success' && (
                <div className="mt-4 flex items-center p-3 rounded-lg bg-green-100 text-green-700 border border-green-300">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Message sent successfully! We'll be in touch soon.
                </div>
            )}
            {status === 'error' && (
                <div className="mt-4 flex items-center p-3 rounded-lg bg-red-100 text-red-700 border border-red-300">
                    <XCircle className="w-5 h-5 mr-2" />
                    Please fill out all fields correctly before submitting.
                </div>
            )}
        </div>
    );
};