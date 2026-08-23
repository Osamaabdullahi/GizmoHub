"use client";
import React, { useMemo } from "react";

const BLOG_POSTS = [
  {
    id: 1,
    title: "Top 5 Gaming Keyboards of 2026",
    date: "June 22, 2026",
    image: "/images/controllerOne.jpg",
    description:
      "Discover the best gaming keyboards for 2026 and find the perfect one for your setup.",
    author: "TechGeek Team",
  },
  {
    id: 2,
    title: "Ultimate Guide to Buying Smart Home Devices",
    date: "June 20, 2026",
    image: "/images/controllerTwo.jpg",
    description:
      "Learn everything you need to know about smart home devices and how to integrate them into your home.",
    author: "SmartTech Experts",
  },
  {
    id: 3,
    title: "The Future of Wearable Technology",
    date: "June 18, 2026",
    image: "/images/controllerThree.jpg",
    description: "Explore the latest advancements in wearable technology and their impact on daily life.",
    author: "Wearables Watch",
  },
];

const shuffle = (array) => {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const Blog = () => {
  // Shuffle once per page load, not on every re-render (e.g. a theme
  // toggle elsewhere on the page shouldn't reshuffle the post order).
  const posts = useMemo(() => shuffle(BLOG_POSTS), []);

  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-900 dark:text-white">
          Tech Blog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-sm overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-md"
            >
              <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{post.date}</p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{post.description}</p>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  {post.author}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
