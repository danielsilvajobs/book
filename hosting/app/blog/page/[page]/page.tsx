import path from 'path'
import fs from 'fs'
import { Suspense } from 'react'
import Link from 'next/link'

interface BlogPost {
    id: string
    title: string
    description: string
    slug: string
}

export function generateStaticParams() {

    const dbPath = path.join(process.cwd(), 'public', 'blog');
    const files = fs.readdirSync(dbPath);

    return files.map((file, index) => {

        return {
            page: `${index + 1}`,
        }
    })
}

async function getBlogPosts(page: number = 1): Promise<{ posts: BlogPost[], totalPages: number }> {
    // Replace with your actual data fetching logic
    const postsPerPage = 10
    const skip = (page - 1) * postsPerPage

    const dbPath = path.join(process.cwd(), 'public', 'blog');
    const files = fs.readdirSync(dbPath);

    const fileNames = files.map(file => {
        return {
            slug: file.replace('.json', ''),
        }
    });

    console.log(`Total files found: ${fileNames.length}`);

    const blogPosts = fileNames.map(({ slug }) => {
        const filePath = path.join(dbPath, `${slug}.json`);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const post = JSON.parse(fileContent);
        return {
            id: slug,
            title: post.title,
            description: post.description,
            slug
        }
    });

    console.log(`Total blog posts: ${blogPosts.length}`);

    const posts = blogPosts.slice(skip, skip + postsPerPage)
    const totalPages = Math.ceil(blogPosts.length / postsPerPage)

    return { posts, totalPages }
}

function BlogPostCard({ post }: { post: BlogPost }) {
    return (
        <article className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">
                <Link href={`/blog/${post.slug}`} className="hover:text-blue-600">
                    {post.title}
                </Link>
            </h2>
            <p className="text-gray-600 mb-4">{post.description}</p>
            {/* <time className="text-sm text-gray-500">
                {new Date(post.publishedAt).toLocaleDateString()}
            </time> */}
        </article>
    )
}

function Pagination({ currentPage, totalPages }: { currentPage: number, totalPages: number }) {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

    return (
        <nav className="flex justify-center space-x-2 mt-8">
            {currentPage > 1 && (
                <Link
                    href={`/blog/page/${currentPage - 1}`}
                    className="px-3 py-2 border rounded hover:bg-gray-100"
                >
                    Previous
                </Link>
            )}

            {pages.map(page => (
                <Link
                    key={page}
                    href={`/blog/page/${page}`}
                    className={`px-3 py-2 border rounded ${page === currentPage
                        ? 'bg-blue-500 text-white'
                        : 'hover:bg-gray-100'
                        }`}
                >
                    {page}
                </Link>
            ))}

            {currentPage < totalPages && (
                <Link
                    href={`/blog/page/${currentPage + 1}`}
                    className="px-3 py-2 border rounded hover:bg-gray-100"
                >
                    Next
                </Link>
            )}
        </nav>
    )
}

async function BlogList({ page }: { page: number }) {
    const { posts, totalPages } = await getBlogPosts(page)

    return (
        <>
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
                {posts.map(post => (
                    <BlogPostCard key={post.id} post={post} />
                ))}
            </div>

            <Pagination currentPage={page} totalPages={totalPages} />
        </>
    )
}

export default async function BlogPage({ params }: { params: Promise<{ page: string }> }) {

    const { page } = await params;

    return (

        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Blog</h1>
            <Suspense fallback={<div>Loading posts...</div>}>
                <BlogList page={page ? parseInt(page, 10) : 1} />
            </Suspense>

        </div>
    )
}
