import { Card, CardContent } from "@mui/material";
import { useSelector } from "react-redux";
import { Section, Wrapper } from "./PostsSection.style";

const PostsSection = () => {
	const posts = useSelector((state) => state.posts.posts);

	const getDate = (date) => {
		if (date) {
			const result = new Date(date);
			return result.toString().slice(4, 15);
		}
	};

	return posts.length > 0 ? (
		<Wrapper id="blogs">
			<Section>
				<>
					<h2>
						Recent posts
						<a
							href="https://singhlify.hashnode.dev/"
							target="_blank"
							rel="noreferrer"
						>
							View all
						</a>
					</h2>
					<div className="cards">
						{posts.slice(0, 2).map((post) => (
							<Card key={post._id} className="card" elevation={0}>
								<a
									href={`https://singhlify.hashnode.dev/${post.slug}`}
									target="_blank"
									rel="noreferrer"
								>
									<CardContent className="card__content">
										<h1 className="card__title">{post.title}</h1>

										<div className="card__tags">
											{getDate(post.dateUpdated.slice(0, 10))}
										</div>

										<p className="card__desc">{post.brief}</p>
									</CardContent>
								</a>
							</Card>
						))}
					</div>
				</>
			</Section>
		</Wrapper>
	) : null;
};

export default PostsSection;
