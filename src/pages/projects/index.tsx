import { allProjects, Project } from "contentlayer/generated";
import { pick } from "contentlayer/utils";
import moment from "moment";
import { NextSeo } from "next-seo";
import ProjectLayout from "src/components/layouts/ListLayout-project";

export default function BlogPage({ projects }: { projects: Project[] }) {
  return (
    <>
      <NextSeo
        title="Project list"
        description="All the Personal Projects I made"
      />
      <ProjectLayout projects={projects} />
    </>
  );
}

export async function getStaticProps() {
  const projects = allProjects
    .map((project) =>
      pick(project, ["slug", "title", "date", "logos", "description"])
    )
    .sort((a, b) => moment(b.date).diff(moment(a.date)));

  return { props: { projects } };
}
