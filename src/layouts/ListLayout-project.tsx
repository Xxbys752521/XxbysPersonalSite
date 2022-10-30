import { Project } from "contentlayer/generated";
import { motion } from "framer-motion";
import React, { useState } from "react";
import ProjectCard from "src/components/ProjectCard";

export default function ProjectLayout({ projects }: { projects: Project[] }) {
  const [search, setsearch] = useState("");
  const filteredPosts = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="border-b-[1px] pb-8 mb-8 border-muted">
        <div className="max-w-xl ">
          <h1 className="mb-4 text-3xl font-bold uppercase md:text-5xl text-text">
            Projects
          </h1>

          <p className=" text-subtle">
            These are {projects.length} projects that I have written.
          </p>
        </div>
      </div>
      <motion.div
        className="grid gap-5 md:grid-cols-2"
        layout="position"
        transition={{ duration: 0.5 }}
      >
        {filteredPosts.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </motion.div>
    </div>
  );
}
