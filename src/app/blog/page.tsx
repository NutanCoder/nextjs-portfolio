import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import PostCard from "@/components/Post/PostCard";

export default function Blog() {
  const posts = fs.readdirSync("content").map((file) => {
    const slug = file.replace(".md", "");
    const raw = fs.readFileSync(`content/${file}`, "utf-8");
    const { data } = matter(raw);
    return { slug, ...data } as any;
  });

  return (
    <div className="bg-[#f4f8fc] dark:bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          📝 My Blog
        </h1>

        <div className="grid gap-6">
          {posts.map((post) => (
            <PostCard post={post} key={post.slug} />
          ))}
        </div>
      </div>
    </div>
  );
}
