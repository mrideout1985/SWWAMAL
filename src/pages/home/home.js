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
			.then((data) => setHomeData(data[0]))
			.catch(console.error);
	}, []);

	return (
		<div className={styles.container}>
			<img
				src={urlFor(homeData?.image.asset.url).width(800).height(500)}
				alt="d"
			/>
		</div>
	);
};

export { Home };
