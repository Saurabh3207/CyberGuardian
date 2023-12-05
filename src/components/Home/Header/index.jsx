import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Header = () => (
	<header className="home-header">
		<Link
			className="blog-goBack"
			to="/"
			style={{
				display: "flex",
				alignItems: "center",
				gap: "0.5rem",
				padding: "1rem",
				textDecoration: "none",
				borderRadius: "0.5rem",
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
		<h2>CyberGuardian's</h2>
		<h1>
			<span>“</span> Blog <span>”</span>
		</h1>
		<p>
			awesome place to make oneself <br /> productive and entertained
			through daily updates.
		</p>
	</header>
);

export default Header;
