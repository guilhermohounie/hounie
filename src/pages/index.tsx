import { Page } from "@/components/common/Page";
import type { NextPage } from "next";

const IndexPage: NextPage = () => {
  return (
    <Page title="Guilhermo Hounie">
      <main className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div>
            <h3>Guilhermo Hounie</h3>
            <p>Cyberspace Homeboy.</p>
          </div>
          <hr className="w-32 border border-orange-400" />
          <div className="grid gap-4">
            <p>
              Hello, I'm Guilhermo Hounie. I'm a computer science student, web developer and
              enthusiast in many things. I try to explain the world to my around through code.
            </p>
            <p>
              I love the web and its technologies, my goal is to contribute to the creation of
              amazing applications while helping to make the web a better place.
            </p>
            <p>I'm a minimalist, lover of retro computing, future funk, jazz and cats.</p>
            <p>
              I love the sun and nature, I love hiking and my favorite food is sushi. Mine dream
              is to live in peace and harmony with myself and all things around me.
            </p>
          </div>
        </div>
      </main>
    </Page>
  );
};

export default IndexPage;
