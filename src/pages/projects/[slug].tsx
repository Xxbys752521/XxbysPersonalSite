import { allProjects, Project } from "contentlayer/generated";
import siteMetadata from "data/siteMetadata";
import { useMDXComponent } from "next-contentlayer/hooks";
import { ArticleJsonLd, NextSeo } from "next-seo";
import ProjectInterface from "src/layouts/ProjectLayout";
import components from "../../components/MDXComponents";

export default function BlogDetailPage({ project }: { project: Project }) {
  const Component = useMDXComponent(project.body.code);
  return (
    <ProjectInterface project={project}>
      <SEO project={project} />
      <Component
        components={{
          ...components,
        }}
      />
    </ProjectInterface>
  );
}

function SEO({ project }: { project: Project }) {
  return (
    <>
      <NextSeo
        title={project.title}
        description={project.description}
        openGraph={{
          type: "article",
          article: {
            publishedTime: project.date,
          },
        }}
      />
      <ArticleJsonLd
        url={`${siteMetadata.siteUrl}/projects/${project.slug}`}
        title={project.title}
        datePublished={project.date}
        authorName={siteMetadata.author}
        description={project.description}
        images={[]}
      />
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: allProjects.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const project = allProjects.find((project) => project.slug === params.slug);
  return { props: { project } };
}
