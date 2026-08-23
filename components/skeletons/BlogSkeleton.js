import React from "react";

const BlogSkeleton = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
      {/* Placeholder for image */}
      <div className="bg-gray-200 h-56 animate-pulse"></div>
      {/* Placeholder for content */}
      <div className="p-6">
        {/* Title placeholder */}
        <div className="bg-gray-200 h-4 w-3/4 mb-4 animate-pulse"></div>
        {/* Date placeholder */}
        <div className="bg-gray-200 h-4 w-1/2 mb-4 animate-pulse"></div>
        {/* Description placeholder */}
        <div className="bg-gray-200 h-4 w-2/3 mb-4 animate-pulse"></div>
        {/* Author section */}
        <div className="flex items-center">
          {/* Placeholder for author image */}
          <div className="rounded-full bg-gray-200 w-10 h-10 mr-3 animate-pulse"></div>
          {/* Author details */}
          <div>
            {/* Placeholder for author name */}
            <div className="bg-gray-200 h-4 w-20 mb-1 animate-pulse"></div>
            {/* Placeholder for author role */}
            <div className="bg-gray-200 h-3 w-16 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSkeleton;
