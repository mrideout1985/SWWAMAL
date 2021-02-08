import React from "react";
import styles from "./news.module.scss";
import {
	TwitterTimelineEmbed,
	// TwitterShareButton,
	// TwitterFollowButton,
	// TwitterHashtagButton,
	// TwitterMentionButton,
	// TwitterTweetEmbed,
	// TwitterMomentShare,
	// TwitterDMButton,
	// TwitterVideoEmbed,
	// TwitterOnAirButton,
} from "react-twitter-embed";

const News = () => {
	return (
		<section className={styles.container}>
			<div className={styles["twitter-embed"]} id={"twitter"}>
				{
					<TwitterTimelineEmbed
						sourceType="profile"
						screenName="rideoutmaffoo"
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
		</section>
	);
};

export { News };
