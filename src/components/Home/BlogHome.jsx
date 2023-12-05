import React, { useState } from "react";
import EmptyList from "../common/EmptyList";
import BlogList from "../BlogList";
import Header from "./Header";
import SearchBar from "./SearchBar";
import { blogList } from "../../config/data";
import "./homestyle.css";

const BlogHome = () => {
	const [blogs, setBlogs] = useState(blogList);
	const [searchKey, setSearchKey] = useState("");

	// Search submit
	const handleSearchBar = (e) => {
		e.preventDefault();
		handleSearchResults();
	};

	// Search for blog by category
	const handleSearchResults = () => {
		const allBlogs = blogList;
		const filteredBlogs = allBlogs.filter((blog) =>
			blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
		);
		setBlogs(filteredBlogs);
	};

	// Clear search and show all blogs
	const handleClearSearch = () => {
		setBlogs(blogList);
		setSearchKey("");
	};

	return (
		<div
			style={{
				padding: "2rem",
			}}
		>
			{/* Page Header */}
			<Header />

			{/* Search Bar */}
			<SearchBar
				value={searchKey}
				clearSearch={handleClearSearch}
				formSubmit={handleSearchBar}
				handleSearchKey={(e) => setSearchKey(e.target.value)}
			/>

			{/* Blog List & Empty View */}
			{!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
		</div>
	);
};

export default BlogHome;
