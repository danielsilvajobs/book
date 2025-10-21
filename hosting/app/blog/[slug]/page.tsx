import fs from 'fs';
import path from 'path';

export function generateStaticParams() {

    const dbPath = path.join(process.cwd(), 'public', 'blog');
    const files = fs.readdirSync(dbPath);

    return files.map(file => {

        return {
            slug: file.replace('.json', ''),
        }
    })
}

const Metadata = ({ title, description, text }) => {
    // Extract common words for keywords

    const extractKeywords = (title: string, description: string) => {
        const commonWords = ['set', 'the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'is', 'are', 'was', 'were', 'be', 'been', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should', 'may', 'might', 'must', 'can', 'a', 'an'];

        const text = `${title} ${description}`.toLowerCase();
        const words = text.match(/\b\w+\b/g) || [];

        const keywords = words
            .filter(word => word.length > 3 && !commonWords.includes(word))
            .reduce((acc, word) => {
                acc[word] = (acc[word] || 0) + 1;
                return acc;
            }, {} as Record<string, number>);

        return Object.entries(keywords)
            .sort(([, a], [, b]) => b - a)
            .slice(0, 10)
            .map(([word]) => word)
            .join(', ');
    };

    const keywords = extractKeywords(title, description + ' ' + text);

    return (
        <>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="article" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
        </>
    );
};


export default async function Page({ params }: { params: Promise<{ slug: string }> }) {

    const { slug } = await params;

    const filePath = path.join(process.cwd(), 'public', 'blog', `${slug}.json`);
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(fileContents);

    const title = data.title;
    const description = data.description;
    const plan = data.plan; // { day: string, mustDo: string, readyUp: string, levelUp: string }[]

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
            <Metadata title={title} description={description} text={plan.map(p => p.mustDo + " " + p.readyUp + " " + p.levelUp).join(', ')} />
            <div className="max-w-4xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        {title}
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Plan Cards */}
                <div className="grid gap-6 md:gap-8">
                    {plan.map((dayPlan, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                            <div className="bg-gradient-to-r bg-indigo-700 px-6 py-4">
                                <h2 className="text-xl font-semibold text-white">
                                    Day {dayPlan.day}
                                </h2>
                            </div>

                            <div className="p-6 space-y-6">
                                {/* Must Do */}
                                <div className="border-l-4 border-red-500 pl-4">
                                    <h3 className="text-lg font-semibold text-red-700 mb-2 flex items-center">
                                        <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                                        Must Do
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">{dayPlan.mustDo}</p>
                                </div>

                                {/* Ready Up */}
                                <div className="border-l-4 border-yellow-500 pl-4">
                                    <h3 className="text-lg font-semibold text-yellow-700 mb-2 flex items-center">
                                        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                                        Ready Up
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">{dayPlan.readyUp}</p>
                                </div>

                                {/* Level Up */}
                                <div className="border-l-4 border-green-500 pl-4">
                                    <h3 className="text-lg font-semibold text-green-700 mb-2 flex items-center">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                        Level Up
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">{dayPlan.levelUp}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}