import React, { useState, useEffect } from "react";
import sanityClient from "../../client.js";
import SanityBlockContent from "@sanity/block-content-to-react";
import styles from "./about.module.scss";
import imageUrlBuilder from "@sanity/image-url";

const About = () => {
	const [aboutData, setAboutData] = useState(null);

	const builder = imageUrlBuilder(sanityClient);

	function urlFor(source) {
		return builder.image(source);
	}

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type=="about"]{
			title, 
			slug,
			body,
			secondBody,
			image{
				asset->{
					_id,
					url
				},
				alt
			}
		}`
			)
			.then((data) => setAboutData(data[0]))
			.catch(console.error);
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.data}>
				<img
					src={urlFor(aboutData?.image.asset.url).width(600)}
					alt="d"
				/>
				<div className={styles.block}>
					<SanityBlockContent
						dataset="production"
						projectId="8bvty42v"
						blocks={aboutData?.body}
					/>
				</div>
			</div>

			<div className={styles.data}>
				<div className={styles.block2}>
					<SanityBlockContent
						dataset="production"
						projectId="8bvty42v"
						blocks={aboutData?.secondBody}
					/>
				</div>
			</div>
		</div>
	);
};

export { About };
