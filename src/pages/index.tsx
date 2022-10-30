import moment from "moment";
import {
  allPosts,
  allSnippets,
  allProjects,
  Post,
  Snippet,
  Project,
} from "contentlayer/generated";
import { pick } from "contentlayer/utils";
import { allTags, Tag } from "src/lib/tags";

import HeadLine from "src/components/LandingPage/HeadLine";
import NewestPost from "src/components/LandingPage/NewestPost";
import FeaturedSnippet from "src/components/LandingPage/FeaturedSnippet";
import Projects from "src/components/LandingPage/Projects";
import Tags from "src/components/LandingPage/Tags";

export default function Home({
  posts,
  snippets,
  tags,
  projects,
}: {
  snippets: Snippet[];
  posts: Post[];
  tags: Tag[];
  projects: Project[];
}) {
  return (
    <div className="space-y-10">
      <HeadLine />
      <NewestPost posts={posts} />
      <Projects projects={projects} />
      <FeaturedSnippet snippets={snippets} />
      <Tags tags={tags} />
    </div>
  );
}

export async function getStaticProps() {
  const posts = allPosts
    .filter((post) => post.draft !== true)
    .map((post) => pick(post, ["slug", "title", "summary", "date"]))
    .sort((a, b) => moment(b.date).diff(moment(a.date)))
    .slice(0, 3);
  const snippets = allSnippets
    .map((snippet) =>
      pick(snippet, ["description", "title", "logos", "slug", "date"])
    )
    .sort((a, b) => moment(b.date).diff(moment(a.date)))
    .slice(0, 4);
  const projects = allProjects
    .map((project) =>
      pick(project, ["description", "title", "logos", "slug", "date"])
    )
    .sort((a, b) => moment(b.date).diff(moment(a.date)))
    .slice(0, 4);
  const tags = allTags().sort((a, b) => b.count - a.count);
  return { props: { posts, snippets, tags, projects } };
}
