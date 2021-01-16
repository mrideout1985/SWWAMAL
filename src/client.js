import sanityClient from "@sanity/client";
// talks to santiy studio. When you grab data - what project you need and where to look etc.

export default sanityClient({
	projectId: "8bvty42v",
	dataset: "production",
	useCdn: true,
});
