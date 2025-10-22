import { StaticImage } from "gatsby-plugin-image";
import * as React from "react"


const BACK_COVER_TEXT = {
    title: "Stop Dreaming. Start Finishing.",
    sections: [
        "Are you tired of great ideas that never make it past Day 3? Does the thought of tackling a major goal—like launching a side business or mastering a new skill—feel too overwhelming?",
        "The problem isn't your ambition; it's your approach.",
        "The 30 Days Plan is your strategic intervention against procrastination and burnout. This book proves that you don't need endless willpower or 'perfect' days to succeed. All you need is focused consistency applied over thirty short, manageable days."
    ],
    learn: [
        "Define your Unbreakable 'Why': Anchor your effort to a deep, personal motivation that will pull you forward when the novelty wears off.",
        "Leverage Accountability: Turn loose aspirations into honest commitments using external support to conquer drift and lowered standards.",
        "Master the Compound Effect: Break huge goals into three strategic daily actions (Must-Do, Ready-Up, Level-Up) that accumulate into massive, lasting results."
    ],
    cta: "Everything you need to finish what you start is right here. This book provides the mindset, the strategy, and the essential tools to build unflappable habits and achieve any goal."
};

const BookSection = () => (
    <section className="py-20 bg-indigo-600 text-white" aria-labelledby="book-section-heading" itemScope itemType="https://schema.org/Book">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:flex lg:items-center lg:space-x-12">

                <div className="flex justify-center lg:block lg:w-1/3 mb-10 lg:mb-0">
                    <a href="https://www.amazon.com/dp/B0FWKQRFY9" target='_blank' rel="noopener noreferrer" itemProp="url">
                        <StaticImage
                            src={"../images/30-days-plan-book-cover.png"}
                            alt="30 Days Plan self-help book cover showing proven goal achievement system to stop procrastination and finish what you start in 30 days"
                            width={300}
                            height={450}
                            className="rounded-xl shadow-2xl border-4 border-white"
                            itemProp="image"
                        />
                    </a>
                </div>

                {/* Back Cover Text */}
                <div className="lg:w-2/3">
                    <h2 id="book-section-heading" className="text-4xl font-extrabold mb-4" itemProp="name">{BACK_COVER_TEXT.title}</h2>
                    <div className="space-y-4 text-gray-200 text-lg" itemProp="description">
                        {BACK_COVER_TEXT.sections.map((text, index) => (
                            <p key={index}>{text}</p>
                        ))}
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-yellow-300">Inside, you will learn to:</h3>
                    <ul className="list-disc list-inside space-y-2 text-lg ml-4 text-gray-100">
                        {BACK_COVER_TEXT.learn.map((item, index) => (
                            <li key={index} className="pl-2">
                                <span className="font-semibold">{item.split(':')[0]}:</span>
                                {item.split(':')[1]}
                            </li>
                        ))}
                    </ul>

                    <p className="text-xl font-semibold mt-8 text-yellow-100">
                        {BACK_COVER_TEXT.cta}
                    </p>
                    <div className="text-center"><a
                        href="https://www.amazon.com/dp/B0FWKQRFY9" target='_blank' rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center px-8 py-3 border border-transparent text-base text-xl font-bold rounded-xl shadow-lg text-indigo-700 bg-yellow-300 hover:bg-yellow-400 transition duration-300 transform hover:scale-[1.05]"
                    >
                        Get Your Copy Today
                        <StaticImage src={"../images/available-at-amazon-logo-stacked.png"} alt="Buy 30 Days Plan book on Amazon - Available now as paperback and Kindle edition" width={220} height={105} className="ml-4" />
                    </a>

                    </div>

                </div>
            </div>
        </div>
    </section>
);

export default BookSection;