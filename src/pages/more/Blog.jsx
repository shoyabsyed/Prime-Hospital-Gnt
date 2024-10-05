import React from 'react';
import { blogPosts } from './data2'; // Importing the blog posts data
import SearchBar from './SearchInput';
import Sidebar from './Sidebar';

const BlogPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto p-8">
                <div className="grid grid-cols-1  md:grid-cols-3 gap-8">
                    
                    {/* Main Blog Content */}
                    <div className="md:col-span-2 ">
                        {blogPosts.map((post, index) => (
                            <div key={index} className='text-xl'>
                                {/* Category */}
                                <p className="text-gray-500 font-normal mb-2">{post.category}</p>
                                
                                {/* Blog Title */}
                                <h2 className="text-4xl font-semibold hover:text-teal-400 mb-4">
                                  {post.title}
                                  </h2>
                                
                                {/* Author and Date */}
                                <p className="text-gray-600 mb-2">
                                    By <span className="font-normal text-blue-500 mt-4 inline-block mb-10">{post.author}</span> • {post.date} • {post.comments}
                                </p>
                                
                                {/* Content */}
                                <p className="text-gray-700">
                                    {post.content}
                                </p>

                                {/* Divider between blog posts */}
                                {index < blogPosts.length - 1 && <hr className="my-4 border-gray-300" />}

                                {/* Read More Link */}
                                <a href={post.link} className="text-blue-500 mt-4 inline-block mb-16">Read More →</a>
                            </div>
                        ))}
                    </div>

                    {/* Sidebar Section */}
                    <div className="md:col-span-1">
                        {/* Search Input */}
                        <SearchBar className='px-8 '/>

                        {/* Recent Posts */}
                        <div className='mt-4 px-8'>
                            <h3 className="font-normal text-2xl mb-4">Recent Posts</h3>
                            <ul className="space-y-4 text-lg">
                                {blogPosts.slice(0, 4).map((post) => (
                                    <li key={post.id}>
                                        <a href={post.link} className=' text-gray-600 hover:text-blue-400'>
                                            {post.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <Sidebar/>

                        </div>
                        <div className='mt-4 px-8'>
                            <h3 className="font-normal text-2xl mb-4">Recent Posts</h3>
                            <ul className="space-y-4 text-lg">
                                {blogPosts.slice(0, 4).map((post) => (
                                    <li key={post.id}>
                                        <a href={post.link} className=' text-gray-600 hover:text-blue-400'>
                                            {post.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <Sidebar/>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
