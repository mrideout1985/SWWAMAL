import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../../client.js";
import SanityBlockContent from "@sanity/block-content-to-react";
import styles from "./singlePost.module.scss";

const SinglePost = () => {
	const [singlePost, setSinglePost] = useState(null);
	const { slug } = useParams();

	useEffect(() => {
		sanityClient
			.fetch(
				`*[slug.current == "${slug}"]{
			title,
			_id,
			slug,
			body,
			"name": author->name,
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
			.then((data) => setSinglePost(data))
			.catch(console.error);
	}, [slug]);

	if (!SinglePost) return <div>Loading....</div>;

	return (
		<div className={styles["container"]}>
			{singlePost &&
				singlePost.map((post, index) => (
					<article key={post.slug.current}>
						<header>
							<h2>{post.title}</h2>
						</header>

						<div className={styles["post-container"]}>
							<p>
								<SanityBlockContent
									dataset="production"
									projectId="8bvty42v"
									blocks={post.body}
								/>
							</p>
							<footer>
								<p>
									{new Date(
										post.publishedAt
									).toLocaleDateString()}
								</p>
								<p>Author: {" " + post.name}</p>
							</footer>
						</div>
					</article>
				))}
		</div>
	);
};

export { SinglePost };
