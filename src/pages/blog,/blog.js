import React, { useState, useEffect } from "react";
import sanityClient from "../../client.js";
import SanityBlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import styles from "./blog.module.scss";
import { Link } from "react-router-dom";

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
		<div className={styles.container}>
			{blogData &&
				blogData.map((post, index) => (
					<article className={styles.article} key={index}>
						{console.log(post)}
						<div className={styles.post}></div>
						<div
							className={styles.cardinfo}
							style={{
								backgroundImage: `url(${post.mainImage.asset.url})`,
							}}
						>
							<div className={styles.info}>
								<div className={styles.header}>
									<h1>{post.title}</h1>
								</div>
								<div className={styles.description}>
									<h4>{post.description}</h4>
									<span>
										<Link
											to={
												"/singlepost/" +
												post.slug.current
											}
										>
											...read more
										</Link>
									</span>
								</div>
							</div>
						</div>
					</article>
				))}
		</div>
	);
};

export { Blog };
