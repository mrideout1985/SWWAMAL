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
						<div className={styles.header}>
							<h3>{post?.title}</h3>
						</div>

						<div className={styles.imageanddata}>
							<div className={styles.image}>
								<img
									src={urlFor(post?.image.asset.url)
										.width(600)
										.height(400)}
									alt="d"
								/>
							</div>
							<div className={styles.cardinfo}>
								<SanityBlockContent
									dataset="production"
									projectId="8bvty42v"
									blocks={post?.body}
								/>
							</div>
						</div>
					</div>
				);
			})
		);
	};

	return <div className={styles.container}>{showCampaignPosts()}</div>;
};

export { Campaigns };
