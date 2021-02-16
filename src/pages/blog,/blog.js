import React, { useState, useEffect } from "react";
import sanityClient from "../../client.js";
import SanityBlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import styles from "./blog.module.scss";

const Blog = () => {
	const [blogData, setBlogData] = useState(null);

	const builder = imageUrlBuilder(sanityClient);
	function urlFor(source) {
		return builder.image(source);
	}

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "post"]{
			title,
			slug,
			author,
			body,
			description,
			publishedAt,
			mainImage{
                asset->{
                    _id,
                    url
                },
                alt
			}
		}`
			)
			.then((data) => setBlogData(data))
			.catch(console.error);
	}, []);

	return (
		<section className={styles.container}>
			{blogData &&
				blogData.map((post, index) => (
					<article
						className={styles.article}
						style={{
							backgroundImage: `url(${post.mainImage.asset.url})`,
						}}
						key={index}
					>
						<div className={styles.cardinfo}></div>
					</article>
				))}
		</section>
	);
};

export { Blog };
