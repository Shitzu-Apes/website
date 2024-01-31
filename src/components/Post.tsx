import React from "react";

export default function PostCard({ post }: any) {
  return (
    // A card to wrap all elements
    <div>
      // post thumbnail image
      <img src="{post.frontMatter.thumbnail}" alt="postCardImage" />
      <div>
        // post content
        <h2>{post.frontMatter.title}</h2>
        // post description
        <p>{post.frontMatter.description}</p>
      </div>
      <div>
        // post date
        <h2> 📅{post.frontMatter.date}</h2>
        // post readTime
        <p>⏰{post.frontMatter.readTime} min read</p>
      </div>
    </div>
  );
}
