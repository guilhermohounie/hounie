import { Page } from "@/components/common/Page";
import { PageHeader } from "@/components/common/PageHeader";
import type { NextPage } from "next";

const ProjectsPage: NextPage = () => {
  return (
    <Page title="Projects">
      <PageHeader title="[Projects.]" description="You gotta have some." />
      <main></main>
    </Page>
  );
};

export default ProjectsPage;
