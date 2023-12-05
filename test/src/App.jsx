import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Blog from "../../src/components/Blog/blog";
import Home from "../../src/components/Home";

const App = () => {
	return (
		<div className="container">
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/blog/:id" component={Blog} />
				<Redirect to="/" />
			</Switch>
		</div>
	);
};

export default App;
