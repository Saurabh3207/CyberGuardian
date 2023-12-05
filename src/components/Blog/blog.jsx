import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { blogList } from "../../config/data";
import Chip from "../common/Chip";
import EmptyList from "../common/EmptyList";
import "./styles.css";
import { Link } from "react-router-dom";

const Blog = () => {
	const { id } = useParams();
	const [blog, setBlog] = useState(null);

	useEffect(() => {
		let blog = blogList.find((blog) => blog.id === parseInt(id));
		if (blog) {
			setBlog(blog);
		}
	}, []);

	return (
		<>
			<Link
				className="blog-goBack"
				to="/blogs"
				style={{
					display: "flex",
					alignItems: "center",
          gap: "0.5rem",
          padding: "1rem",
          textDecoration: "none",
          borderRadius: "0.5rem",
          color: "#fff",
        }}
			>
				<span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 24 24"
					>
						<path
							fill="currentColor"
							d="m7.825 13l4.9 4.9q.3.3.288.7t-.313.7q-.3.275-.7.288t-.7-.288l-6.6-6.6q-.15-.15-.213-.325T4.426 12q0-.2.063-.375T4.7 11.3l6.6-6.6q.275-.275.688-.275t.712.275q.3.3.3.713t-.3.712L7.825 11H19q.425 0 .713.288T20 12q0 .425-.288.713T19 13H7.825Z"
						/>
					</svg>
				</span>{" "}
				<span>Go Back</span>
			</Link>
			{blog ? (
				<div className="blog-wrap">
					<header>
						<p className="blog-date">Published {blog.createdAt}</p>
						<h1>{blog.title}</h1>
						<div className="blog-subCategory">
							{blog.subCategory.map((category, i) => (
								<div key={i}>
									<Chip label={category} />
								</div>
							))}
						</div>
					</header>
					<img src={blog.cover} alt="cover" />
					<p
						className="blog-desc"
						dangerouslySetInnerHTML={{ __html: blog.description }}
					></p>
				</div>
			) : (
				<EmptyList />
			)}
		</>
	);
};

export default Blog;
