import { Page } from "@/components/common/Page";
import { Project } from "@/components/common/Project";
import projects from "@/data/projects.json";
import type { NextPage } from "next";

const ProjectsPage: NextPage = () => {
  return (
    <Page title="Projects" header={{ title: "[Projects.]" }}>
      <main className="py-8">
        <ul className="grid gap-8 md:grid-cols-2">
          {projects.map((entry) => {
            return (
              <li key={entry.name}>
                <Project {...entry} />
              </li>
            );
          })}
        </ul>
      </main>
    </Page>
  );
};

export default ProjectsPage;
