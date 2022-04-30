import { Page } from "@/components/common/Page";
import { PageHeader } from "@/components/common/PageHeader";
import { Project } from "@/components/common/Project";
import projects from "@/data/projects.json";
import type { NextPage } from "next";

const ProjectsPage: NextPage = () => {
  return (
    <Page title="Projetos">
      <PageHeader title="[Projetos.]" description="Em breve." />
      <main className="py-8">
        <ul className="grid gap-8 md:grid-cols-2">
          {projects.map((entry) => {
            return <Project {...entry} key={entry.name} />;
          })}
        </ul>
      </main>
    </Page>
  );
};

export default ProjectsPage;
