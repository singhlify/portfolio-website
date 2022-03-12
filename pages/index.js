import Home from "@/container/Home";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "../slices/posts";

export default function RootPage({ posts }) {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPosts(posts));
	}, [posts]);

	return (
		<>
			<Home posts={posts} />
		</>
	);
}

export async function getStaticProps(context) {
	const client = new ApolloClient({
		uri: "https://api.hashnode.com/",
		cache: new InMemoryCache(),
	});

	const { data } = await client.query({
		query: gql`
			query GetPosts {
				user(username: "singhlify") {
					publication {
						posts(page: 0) {
							_id
							title
							brief
							slug
							dateUpdated
						}
					}
				}
			}
		`,
	});

	return {
		props: {
			posts: data.user.publication.posts,
		},
	};
}
