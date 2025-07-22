import { getPost, getAllSlugs } from "@/lib/posts";
import { notFound } from "next/navigation";
import "highlight.js/styles/github-dark.css";
import CodeHighlighter from "@/components/CodeHighlighter";

type PageProps = Promise<{ slug: string }>;

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogPost({ params }: { params: PageProps }) {
  const paramsData = await params;
  const post = await getPost(paramsData.slug ?? "");
  if (!post) return notFound();

  return (
    <div className="bg-[#f4f8fc] dark:bg-gray-900  ">
      <article className="prose lg:prose-xl dark:prose-invert max-w-3xl mx-auto px-4 py-10">
        {/* <h1 className="text-black dark:text-white">{post.title}</h1> */}
        <p className="text-sm text-gray-500">{post.date}</p>
        <CodeHighlighter />
        <div
          className="markdown markdown-body"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    </div>
  );
}
