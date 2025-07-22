import Link from "next/link";
import React from "react";

function PostCard({ post }: { post: any }) {
  return (
    <div
      key={post.slug}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
    >
      <Link href={`/blog/${post.slug}`} className="group">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white group-hover:text-blue-600">
          {post.title}
        </h2>
      </Link>
      <p className="text-sm text-gray-500 mt-1">{post.date}</p>
      <p className="mt-3 text-gray-600 dark:text-gray-300 line-clamp-2">
        {post.description || "Click to read more..."}
      </p>
      <Link
        href={`/blog/${post.slug}`}
        className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:underline font-medium"
      >
        Read More →
      </Link>
    </div>
  );
}

export default PostCard;
