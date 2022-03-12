import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Section } from "./PostsSection.style";

const PostsSection = () => {
	const posts = useSelector((state) => state.posts.posts);

	useEffect(() => {
		console.log("posts>>>", posts);
	}, [posts]);

	return (
		<Section>
			<h2>Recent posts</h2>
		</Section>
	);
};

export default PostsSection;
