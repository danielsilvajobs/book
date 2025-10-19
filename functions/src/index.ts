/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { setGlobalOptions } from "firebase-functions";
import { onRequest } from "firebase-functions/v2/https"
import * as logger from "firebase-functions/logger";
import * as nodemailer from "nodemailer";
//import * as fs from "fs";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// For cost control, you can set the maximum number of containers that can be
// running at the same time. This helps mitigate the impact of unexpected
// traffic spikes by instead downgrading performance. This limit is a
// per-function limit. You can override the limit for each function using the
// `maxInstances` option in the function's options, e.g.
// `onRequest({ maxInstances: 5 }, (req, res) => { ... })`.
// NOTE: setGlobalOptions does not apply to functions using the v1 API. V1
// functions should each use functions.runWith({ maxInstances: 10 }) instead.
// In the v1 API, each function can only serve one request per container, so
// this will be the maximum concurrent request count.
setGlobalOptions({ maxInstances: 3 });

const VALID_API_KEY = process.env.VALID_API_KEY || "xxxxxxxxxxxxxx";

export const sendEmail = onRequest({ cors: ["https://30daysplan.com"] }, async (req, res) => {
    const apiKey = req.headers["x-api-key"];
    if (apiKey !== VALID_API_KEY) {
        res.status(401).send("Invalid API Key");
        return;
    }

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "themarkthin@gmail.com",
            pass: "fubf oagg gdtd wowz",
        },
    });

    const mailOptions = {
        from: { name: "Mark Thin", address: "themarkthin@gmail.com" },
        to: `themarkthin@gmail.com, ${req.body.email}`,
        subject: "30 Days Plan - Contact Form",
        text: "Thank you for contact us, we will be in touch soon!",
        html: template.replace(/{{NAME}}/g, req.body.name)
            .replace(/{{EMAIL}}/g, req.body.email)
            .replace(/{{MESSAGE}}/g, req.body.message),
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send("Email sent successfully");
    } catch (error) {
        logger.error("Error sending email", error);
        res.status(500).send("Failed to send email");
    }
});


const template = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>30 Days Plan</title>
</head>

<body style="margin: 0; padding: 0; font-family: 'Inter', sans-serif; background-color: #f4f4f4;">
    <center>
        <!-- Outer Container Table (Ensures centering and maximum width) -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f4f4f4;">
            <tr>
                <td align="center" style="padding: 20px 0;">
                    <!-- Content Wrapper Table (Constrains the main email body) -->
                    <table border="0" cellpadding="0" cellspacing="0"
                        style="border-collapse: collapse; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">

                        <!-- Header Section -->
                        <tr>
                            <td align="center"
                                style="padding: 30px 20px 20px 20px; background-color: #fdffe2; border-top-left-radius: 8px; border-top-right-radius: 8px;">
                                <h1 style="margin: 0; font-size: 36px; color: #5a72a0;">
                                    30 Days Plan
                                </h1>
                                <p style="margin: 5px 0 0 0; font-size: 14px; color: #5a72a0;">
                                    Contact form submission
                                </p>
                            </td>
                        </tr>

                        <!-- Body Content Area -->
                        <tr>
                            <td style="padding: 35px 40px 30px 40px;">
                                <p style="font-size: 16px; line-height: 1.6; color: #5a72a0; margin-bottom: 25px;">
                                    Thank you for contact us, we will be in touch soon!
                                </p>

                                <!-- Data Card -->
                                <table border="0" cellpadding="0" cellspacing="0" width="100%"
                                    style="border-collapse: collapse; border: 1px solid #e0e0e0; border-radius: 6px;">
                                    <tr>
                                        <td style="padding: 15px; background-color: #f8f8f8;">
                                            <h3 style="margin: 0; font-size: 18px; color: #1a2130;">
                                                Details
                                            </h3>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 20px;">
                                            <!-- Name Field -->
                                            <p style="font-size: 14px; color: #5a72a0; margin: 0 0 5px 0;">
                                                <strong>Name:</strong>
                                            </p>
                                            <p
                                                style="font-size: 16px; color: #1a2130; margin: 0 0 15px 0; padding: 8px 10px; border: 1px solid #cccccc; border-radius: 4px; background-color: #fdffe2;">
                                                {{NAME}}</p>

                                            <!-- Email Field -->
                                            <p style="font-size: 14px; color: #5a72a0; margin: 0 0 5px 0;">
                                                <strong>Email:</strong>
                                            </p>
                                            <p
                                                style="font-size: 16px; color: #1a2130; margin: 0 0 15px 0; padding: 8px 10px; border: 1px solid #cccccc; border-radius: 4px; background-color: #fdffe2;">
                                                {{EMAIL}}</p>

                                            <!-- Message Field -->
                                            <p style="font-size: 14px; color: #5a72a0; margin: 0 0 5px 0;">
                                                <strong>Message:</strong>
                                            </p>
                                            <p
                                                style="font-size: 16px; color: #1a2130; margin: 0 0 0 0; padding: 10px; border: 1px solid #cccccc; border-radius: 4px; background-color: #fdffe2;">
                                                {{MESSAGE}}
                                            </p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>

                        <!-- Footer Section -->
                        <tr>
                            <td>
                                <a href="https://www.amazon.com/dp/B0FWKQRFY9" target="_blank" rel="noopener noreferrer">
                                    <img src="https://30daysplan.com/30-days-plan-book-cover.png" alt="30 Days Plan Logo"
                                        width="120" style="display: block; margin: 0 auto 10px auto;">
                                </a>
                            </td>


                        </tr>
                        <tr>
                            <td align="center" style="padding: 20px 40px 30px 40px;">
                                <p style="margin: 0; font-size: 12px; color: #999999;">
                                    If you want to add additional details feel free to reply to this email.
                                </p>
                            </td>
                        </tr>

                    </table>
                </td>
            </tr>
        </table>
    </center>
</body>

</html>`;