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
		<div className={styles.container}>
			{blogData &&
				blogData.map((post, index) => (
					<article>
						{post.title}
						<SanityBlockContent
							dataset="production"
							projectId="8bvty42v"
							blocks={post?.body}
						/>
						<img
							src={urlFor(post?.mainImage?.asset.url).width(800)}
							alt="d"
						/>
					</article>
				))}
		</div>
	);
};

export { Blog };
