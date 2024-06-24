"use client";
import React from "react";

const Blog = () => {
  const isDarkMode = true;
  const blogPosts = [
    {
      id: 1,
      title: "Top 5 Gaming Keyboards of 2024",
      date: "June 22, 2024",
      image: "/images/controller.jpg",
      description:
        "Discover the best gaming keyboards for 2024 and find the perfect one for your gaming setup.",
      author: "TechGeek Team",
      authorImage: "/images/controller.jpg",
    },
    {
      id: 2,
      title: "Ultimate Guide to Buying Smart Home Devices",
      date: "June 20, 2024",
      image: "/images/controller.jpg",
      description:
        "Learn everything you need to know about smart home devices and how to integrate them into your home.",
      author: "SmartTech Experts",
      authorImage: "/images/controller.jpg",
    },
    {
      id: 3,
      title: "The Future of Wearable Technology",
      date: "June 18, 2024",
      image: "/images/controller.jpg",
      description:
        "Explore the latest advancements in wearable technology and their impact on daily life.",
      author: "Wearables Watch",
      authorImage: "/images/controller.jpg",
    },
  ];

  // Function to shuffle array elements
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Shuffle the blog posts array
  const shuffledBlogPosts = shuffleArray([...blogPosts]);

  return (
    <div className={`py-16 ${isDarkMode ? "bg-gray-900" : "bg-gray-100"}`}>
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl font-extrabold text-center mb-12 ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Tech Blog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shuffledBlogPosts.map((post) => (
            <div
              key={post.id}
              className={`bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 ${
                isDarkMode ? "dark:bg-gray-800" : ""
              }`}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {post.title}
                </h3>
                <p
                  className={`text-gray-600 text-sm mb-4 ${
                    isDarkMode ? "text-gray-400" : ""
                  }`}
                >
                  {post.date}
                </p>
                <p
                  className={`text-gray-700 mb-4 ${
                    isDarkMode ? "text-gray-300" : ""
                  }`}
                >
                  {post.description}
                </p>
                <div className="flex items-center">
                  <img
                    src={post.authorImage}
                    alt={post.author}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div
                    className={`text-sm ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    <p className="font-semibold">{post.author}</p>
                    <p className="text-gray-500">Author</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
