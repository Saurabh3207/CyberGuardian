import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import heroImg1 from "../assets/images/hero.jpg";
import EmailPic from "../assets/images/Email-header-analysis.png";
import passwordPic from "../assets/images/Password.jpeg";
import cipherImg from "../assets/images/cipher.png";
import steImg from "../assets/images/stego.jpeg";
import { blogList } from "../../config/data";
import { useEffect, useState } from "react";

const Main = () => {
	const FeaturedBlogList = blogList.filter((blog) => blog.featured === true);
	const [featuredBlogList, setfeaturedBlogList] = useState(FeaturedBlogList);
	// useEffect(() => {
	// 	window.scrollTo(0, 0);
	// }, []);

	return (
		<div>
			<Header />
			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<img
						src={heroImg1}
						alt="Hero"
						className="max-w-sm rounded-lg shadow-2xl"
					/>
					<div>
						<h1 className="text-5xl font-bold">
							Welcome to CyberGuardian !
						</h1>
						<p className="py-6">
							Your digital shield in the cyber frontier! <br />
							We're here to make your online experience safe and
							secure. Explore confidently with our expert guidance
							and cutting-edge solutions. Your safety, our
							priority. Join us in shaping a cyber-secure future!
						</p>
						<button className="btn btn-primary">Read More </button>
					</div>
				</div>
			</div>
			{/* Tools Section */}
			<div className="bg-base-300 p-8">
				<h2 className="text-4xl font-bold mb-4">Explore Our Tools</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{/* Add your tool components or cards here */}
					<div className="bg-white p-4 rounded shadow-md">
						{/* Tool content goes here */}
						<h3 className="text-l font-bold mb-2">
							Password Stregnth Checker
						</h3>
						<img
							src={passwordPic}
							alt="Password Stregnth pic"
							className=" rounded-lg shadow-1xl"
						/>
						<p>Description of Tool 1.</p>
						<Link to="/PasswordMeter">
							<button className="btn btn-primary text-l">
								Click Me
							</button>
						</Link>
					</div>
					<div className="bg-white p-4 rounded shadow-md">
						{/* Tool content goes here */}
						<h3 className="text-l font-bold mb-2">
							Email Header Analyzer
						</h3>
						<img
							src={EmailPic}
							alt="Email Header Analyzer"
							className=" rounded-lg shadow-1xl"
						/>
						<p>Description of Tool 1.</p>
					</div>{" "}
					<div className="bg-white p-4 rounded shadow-md">
						{/* Tool content goes here */}
						<h3 className="text-l font-bold mb-2">
							{" "}
							Caesar Cipher Tool
							<br />
							<br />
						</h3>
						<img
							src={cipherImg}
							alt="cipher pic"
							className=" rounded-lg shadow-1xl"
						/>
						<p>hii</p>
					</div>{" "}
					<div className="bg-white p-4 rounded shadow-md">
						{/* Tool content goes here */}
						<h3 className="text-l font-bold mb-2">
							Image Steganography Tool
						</h3>
						<img
							src={steImg}
							alt="stegano"
							className=" rounded-lg shadow-1xl"
						/>
						<p>Description of Tool 1.</p>
						<button></button>
					</div>
					{/* Repeat for other tools */}
				</div>
			</div>

			{/* Featured Blogs */}

			<div className="bg-base-300 p-8">
				<h2 className="text-4xl font-bold mb-4">Featured Blogs</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{featuredBlogList.map((blog) => (
						<div className="bg-white p-4 rounded shadow-md flex flex-col content-evenly justify-evenly">
							<h3 className="text-l font-bold mb-2">
								{blog.title}
							</h3>
							<img
								src={blog.cover}
								alt={blog.title}
								className=" rounded-lg shadow-1xl"
							/>
							{/* Only write first 20 words of the description */}
							<p
								dangerouslySetInnerHTML={{
									__html: blog.description
										.split(" ")
										.slice(0, 20)
										.join(" "),
								}}
							></p>
							<Link to={`/blogs/${blog.id}`}>
								<button className="btn btn-primary text-l">
									Read More
								</button>
							</Link>
						</div>
					))}
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Main;
