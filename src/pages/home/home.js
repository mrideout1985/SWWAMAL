import React, { useState, useEffect } from "react";
import sanityClient from "../../client.js";
import SanityBlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import styles from "./home.module.scss";

const Home = () => {
	const [homeData, setHomeData] = useState(null);

	const builder = imageUrlBuilder(sanityClient);

	function urlFor(source) {
		return builder.image(source);
	}

	useEffect(() => {
		//looking for all types that are equal to post - and returning the title, slug, mainImage
		sanityClient
			.fetch(
				`*[_type == "home"]{
			header,
			info,		
			slug,
			image{
                asset->{
                    _id,
                    url
                },
                alt
			}
			
        }`
			)
			.then((data) => setHomeData(data))
			.catch(console.error);
	}, []);

	return (
		<div className={styles.container}>
			{homeData &&
				homeData.map((home, index) => (
					<article key={index}>
						<header>{home.header}</header>
						<div className={styles["homepage"]}>
							<img
								src={home.image.asset.url}
								alt="homepageoimage"
							/>
							<SanityBlockContent
								dataset="production"
								projectId="8bvty42v"
								blocks={home?.info}
							/>
						</div>
					</article>
				))}
		</div>
	);
};

export { Home };
