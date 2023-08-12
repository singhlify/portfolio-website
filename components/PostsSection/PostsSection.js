import { Card, CardContent } from "@mui/material";
import { Section, Wrapper } from "./PostsSection.style";

const PostsSection = ({ posts = [] }) => {
  return posts.length > 0 ? (
    <Wrapper id="blogs">
      <Section>
        <>
          <h2>
            Recent posts
            <a
              href={posts?.[0]?.url?.split(".com")?.[0] + ".com"}
              target="_blank"
              rel="noreferrer"
            >
              View all
            </a>
          </h2>
          <div className="cards">
            {posts.map((post) => (
              <Card key={post?.title} className="card" elevation={0}>
                <a href={post?.url} target="_blank" rel="noreferrer">
                  <CardContent className="card__content">
                    <h1 className="card__title">{post?.title}</h1>

                    <div className="card__tags">{post?.updatedAt}</div>

                    <p className="card__desc">{post?.description}</p>
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
