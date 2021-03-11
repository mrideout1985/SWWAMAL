import React from "react";
import styles from "./news.module.scss";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import twitter from "../../assets/images/twitterundraw.svg";

const News = () => {
	return (
		<section className={styles.container}>
			<div className={styles["twitter-embed"]} id={"twitter"}>
				{
					<TwitterTimelineEmbed
						sourceType="profile"
						screenName="w_cwu"
						options={{
							tweetLimit: "5",
							width: "100%",
							height: "100%",
						}}
						theme="light"
						noHeader="true"
						// noBorders="true"
						noFooter="true"
					/>
				}
			</div>
			<div className={styles.twitter}>
				<div className={styles.newsheader}>
					<p>
						Keep up to date with all the latest news / campaigns.
						Follow our social media websites for constant updates
						and information straight frm the source
					</p>
				</div>
				<img src={twitter} alt="twitter" />
			</div>
		</section>
	);
};

export { News };
