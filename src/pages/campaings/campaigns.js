import React, { useState, useEffect } from "react";
import sanityClient from "../../client.js";
import SanityBlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import styles from "./campaigns.module.scss";

const Campaigns = () => {
	const [campaignsData, setCampaignsData] = useState(null);
	const builder = imageUrlBuilder(sanityClient);
	function urlFor(source) {
		return builder.image(source);
	}

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "campaigns"]{
			title,
			slug,
			body,
			image{
                asset->{
                    _id,
                    url
                },
                alt
			}
		}`
			)
			.then((data) => setCampaignsData(data))
			.catch(console.error);
	}, []);

	const showCampaignPosts = () => {
		return (
			campaignsData &&
			campaignsData.map((post, key) => {
				return (
					<div key={key} className={styles["container__campaign"]}>
						<h1>{post.title}</h1>
						<img
							src={urlFor(post?.image.asset.url)
								.width(800)
								.height(500)}
							alt="d"
						/>
					</div>
				);
			})
		);
	};

	return <div className={styles.container}>{showCampaignPosts()}</div>;
};

export { Campaigns };
