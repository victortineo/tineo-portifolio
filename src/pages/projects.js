import React from "react";
import Layout from "../components/layout";
import { ProjectCard } from "../components/ProjectCards";
import Seo from "../components/seo";
import { projects } from "../constants";

const Projects = () => {
  return (
    <Layout>
      <Seo title="Victor Tineo - My Projects" />
      <section className="mx-auto max-w-6xl py-12">
        <ProjectCard 
          title="Awesome products delivered"
          desc="More details about the study can be found in the book , click to learn more ..."
          subtitle="Awesome discovery we did"
          subdescription="The results are spectacular, you can checkout the source for more informations"
          cards={projects}
        />
      </section>
    </Layout>
  )
}

export default Projects