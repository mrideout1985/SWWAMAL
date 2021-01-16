import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import { Layout } from "./components/layout/layout";
import { Home } from "./pages/home/home";
import "./main.scss";
import { About } from "./pages/about,/about";
import { Agreements } from "./pages/agreements,/agreements";
import { Blog } from "./pages/blog,/blog";
import { Contact } from "./pages/contact/contact";
import { SinglePost } from "./pages/singlePost/singlePost";
import { Branch } from "./pages/about,/branch/branch";
import { LearningCentre } from "./pages/about,/learning centre/learningCentre";
import { Reps } from "./pages/about,/reps/reps";
import { Deliveries } from "./pages/agreements,/deliveries/deliveries";
import { Distribution } from "./pages/agreements,/distribution/distribution";
import { Other } from "./pages/agreements,/other/other";
import { PostalNationalAgreements } from "./pages/agreements,/pna/postalNationalAgreements";
import { Processing } from "./pages/agreements,/processing/processing";
import { Campaigns } from "./pages/campaings,/campaigns";
import { Nav } from "./components/navbar/nav";
import { Header } from "./components/header/header";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Layout>
					<Header />
					<Nav />
					<Route component={Home} path="/" exact />
					<Route component={Home} path="/home" />
					<Route component={About} path="/about/" />
					<Route component={Branch} path="/branch" />
					<Route component={Agreements} path="/agreements" />
					<Route component={Blog} path="/blog" />
					<Route component={Contact} path="/contact" />
					<Route component={LearningCentre} path="/learning" />
					<Route component={Reps} path="/reps" />
					<Route component={Deliveries} path="/deliveries" />
					<Route component={Distribution} path="/distribution" />
					<Route component={Other} path="/other" />
					<Route component={PostalNationalAgreements} path="/pna" />
					<Route component={Processing} path="/processing" />
					<Route component={Campaigns} path="/campaigns" />
					<Route component={SinglePost} path="/singlepost" />
				</Layout>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
