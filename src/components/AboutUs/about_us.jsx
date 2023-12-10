/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import profilePic from "../assets/images/developers/img1.png";
import profilePic4 from "../assets/images/developers/img4.png.jpg";
import profilePic2 from "../assets/images/developers/img2.png";
import profilePic3 from "../assets/images/developers/saurabh.png";
import "./aboutus.css";
import { IconBrandLinkedin } from "@tabler/icons-react";
import { Link } from "react-router-dom";

function AboutUs() {
	let message = `we're here to make your online experience safe and secure \n Join us in shaping a cyber-secure future.`;
	return (
		<div>
			<Link
				className="blog-goBack bg-primary text-primary-content"
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
			<section className="section-white">
				<div className="container">
					<div className="row">
						<div className="col-md-12 text-center">
							<h2 className="section-title text-primary-content">
								The Team Behind CyberGuardian
							</h2>
							<p className="section-subtitle text-primary-content">
								{message}
							</p>
						</div>

						<div className="col-xs-6 col-sm-6 col-md-3">
							<div className="team-item">
								<div className="flex justify-center">
									<img
										src={profilePic}
										className="w-40 h-40 rounded-full outline outline-gray-400 outline-offset-4 outline-3"
										alt=""
									/>
								</div>
								<h3>Jaydeep Jadhav</h3>
								<div className="team-info">
									<p className="text-primary-content">
										Student
									</p>
								</div>
								<p className="text-primary-content">
									Jaydeep Jadhav student at MIT-WPU TYBTECH
									Cybersecurity And Forensic.
								</p>
								<ul className="team-icon">
									<li>
										<a href="#" className="bg-primary">
											<IconBrandLinkedin className="w-6 h-6 text-primary" />
										</a>
									</li>

									<li>
										<a href="#" className="bg-primary">
											<i className="fa fa-pinterest"></i>
										</a>
									</li>

									<li>
										<a href="#" className="bg-primary">
											<i className="fa fa-facebook"></i>
										</a>
									</li>
								</ul>
							</div>
						</div>

						<div className="col-xs-6 col-sm-6 col-md-3">
							<div className="team-item">
								<div className="flex justify-center">
									<img
										src={profilePic2}
										className="w-40 h-40 rounded-full outline outline-gray-400 outline-offset-4 outline-3"
										alt=""
									/>
								</div>
								<h3>Avishkar Pokale</h3>
								<div className="team-info">
									<p className="text-primary-content">
										Student
									</p>
								</div>
								<p className="text-primary-content">
									Avishkar Pokale student at MIT-WPU TYBTECH
									Cybersecurity And Forensic..
								</p>
								<ul className="team-icon">
									<li>
										<a href="#" className="bg-primary">
											<i className="fa fa-bg-primary"></i>
										</a>
									</li>

									<li>
										<a href="#" className="bg-primary">
											<i className="fa fa-pinterest"></i>
										</a>
									</li>

									<li>
										<a href="#" className="bg-primary">
											<i className="fa fa-facebook"></i>
										</a>
									</li>
								</ul>
							</div>
						</div>

						<div className="col-xs-6 col-sm-6 col-md-3">
							<div className="team-item">
								<div className="flex justify-center">
									<img
										src={profilePic3}
										className="w-40 h-40 rounded-full outline outline-gray-400 outline-offset-4 outline-3"
										alt=""
									/>
								</div>
								<h3>Saurabh Jadhav</h3>
								<div className="team-info">
									<p className="text-primary-content">
										Student
									</p>
								</div>
								<p className="text-primary-content">
									Saurabh Jadhav student at MIT-WPU BTECH
									Cybersecurity And Forensic..
								</p>
								<ul className="team-icon">
									<li>
										<a href="#" className="bg-primary">
											<i className="fa fa-bg-primary"></i>
										</a>
									</li>

									<li>
										<a href="#" className="bg-primary">
											<i className="fa fa-pinterest"></i>
										</a>
									</li>

									<li>
										<a href="#" className="bg-primary">
											<i className="fa fa-facebook"></i>
										</a>
									</li>
								</ul>
							</div>
						</div>

						<div className="col-xs-6 col-sm-6 col-md-3">
							<div className="team-item">
								<div className="flex justify-center">
									<img
										src={profilePic4}
										className="w-40 h-40 rounded-full outline outline-gray-400 outline-offset-4 outline-3"
										alt=""
									/>
								</div>
								<h3>Vedang Khare</h3>
								<div className="team-info">
									<p className="text-primary-content">
										Student
									</p>
								</div>
								<p className="text-primary-content">
									Vedang Khare student at MIT-WPU TYBTECH
									Cybersecurity And Forensic.
								</p>
								<ul className="team-icon">
									<li>
										<a href="#" className="bg-primary">
											<i className="fa fa-bg-primary"></i>
										</a>
									</li>

									<li>
										<a href="#" className="bg-primary">
											<i className="fa fa-pinterest"></i>
										</a>
									</li>

									<li>
										<a href="#" className="bg-primary">
											<i className="fa fa-facebook"></i>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default AboutUs;
