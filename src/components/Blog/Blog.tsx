"use client";
import React, { useEffect, useState } from "react";

// Define interface for blog post data
interface BlogPost {
  ID: number;
  title: string;
  image: string;
  slug: string;
  description: string;
}

const BlogPostComponent = ({ post }: { post: BlogPost }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
      <div
        className="rounded-xl"
        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
      >
        <div className="relative overflow-hidden bg-white rounded-lg shadow-lg">
          <a href={`/patients-education/${post.slug}`} title={post.title}>
            <img
              src={post.image}
              alt="blog"
              className="w-full h-64 object-cover"
            />
          </a>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-4 line-clamp-1">
            <a
              href={`/patients-education/${post.slug}`}
              title={post.title}
              className="text-gray-800 hover:text-gray-600"
            >
              {post.title}
            </a>
          </h3>
          <p
            className="text-gray-700 mb-4 line-clamp-3"
            dangerouslySetInnerHTML={{ __html: post.description }}
          ></p>
          <a
            href={`/patients-education/${post.slug}`}
            title="Read More"
            className="text-blue-500 hover:text-blue-700 font-semibold"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

// Skeleton component to display when the content is loading
const BlogPostSkeleton = () => (
  <div className="w-full md:w-1/2 lg:w-1/3 p-4">
    <div
      className="rounded-xl bg-gray-200 animate-pulse"
      style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
    >
      <div className="relative overflow-hidden bg-gray-300 h-64 rounded-lg"></div>
      <div className="p-6">
        <div className="h-6 bg-gray-300 rounded mb-4"></div>
        <div className="h-4 bg-gray-300 rounded mb-2"></div>
        <div className="h-4 bg-gray-300 rounded mb-2"></div>
        <div className="h-4 bg-gray-300 rounded"></div>
      </div>
    </div>
  </div>
);

const Blog = ({ title }: { title: string }) => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true); // Loading state
  const countSkeleton = title === "home" ? 3 : 6;
  useEffect(() => {
    const fetchBlogPosts = async () => {
      setLoading(true); // Set loading true when fetching
      try {
        const response = await fetch(
          `https://drarpitbck.demo-web.live/wp-json/custom/v1/diseases?per_page=${itemsPerPage}&page=${currentPage}`
        );
        const data = await response.json();
        setBlogPosts(data.diseases);
        setTotalPages(data.pagination.total_pages);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false); // Set loading false after data is fetched
      }
    };

    fetchBlogPosts();
  }, [currentPage]);

  // Handle page change
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Adjust data based on the `title` prop
  const data = title === "home" ? blogPosts.slice(0, 3) : blogPosts;

  return (
    <div
      className={`container mx-auto px-4 ${
        title === "home" ? "py-0 pt-10" : "py-16"
      }`}
    >
      <h5 className="text-xl md:text-2xl lg:text-3xl font-bold text-center pb-5 lg:pb-7 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-[#171f58]">
        Patients Education
      </h5>

      <div className="flex flex-wrap -mx-4">
        {loading
          ? // Show skeleton loader while loading
            Array.from({ length: countSkeleton }).map((_, index) => (
              <BlogPostSkeleton key={index} />
            ))
          : // Render blog posts if not loading
            data.map((post) => <BlogPostComponent key={post.ID} post={post} />)}
      </div>

      {title === "home" && !loading && (
        <div className="flex justify-center mt-8">
          <a
            href="/patients-education"
            className="flex items-center bg-gradient-to-r from-[#171f58] to-blue-500 text-white py-2 px-4 rounded-lg hover:bg-[#171f56] transition"
          >
            View More
          </a>
        </div>
      )}

      {title !== "home" && totalPages > 1 && !loading && (
        <div className="flex justify-between items-center mt-8 space-x-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`flex items-center py-2 px-4 rounded-lg transition ${
              currentPage === 1
                ? "bg-gray-400 cursor-not-allowed text-white"
                : "bg-gradient-to-r from-[#171f58] to-blue-500 text-white hover:bg-[#171f56]"
            }`}
          >
            Previous
          </button>
          <span className="text-lg">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`flex items-center py-2 px-4 rounded-lg transition ${
              currentPage === totalPages
                ? "bg-gray-400 cursor-not-allowed text-white"
                : "bg-gradient-to-r from-[#171f58] to-blue-500 text-white hover:bg-[#171f56]"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Blog;
