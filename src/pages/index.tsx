import { Page } from "@/components/common/Page";
import type { NextPage } from "next";

const IndexPage: NextPage = () => {
  return (
    <Page title="Guilhermo Hounie">
      <main className="flex flex-col gap-8">
        <span>
          {/* <Image
            height={600 * 0.3}
            width={600 * 0.3}
            alt="Guilhermo Hounie's memoji"
            src="/assets/media/avatar.png"
            className="rounded-full"
          /> */}
        </span>
        <div className="flex flex-col gap-4">
          <div>
            <h3>Guilhermo Hounie</h3>
            <p>Cyberspace Homeboy.</p>
          </div>
          <hr className="w-32 h-px bg-gray-400 border-none" />
          <div className="grid gap-4">
            <p>
              Hi, I'm Guilhermo Hounie. I'm a computer science student, Web Developer and many
              things enthusiast. I try to explain things and make sense of the world around me
              with code.
            </p>
            <p>
              I love the web and its core tools. My goal is to contribute in the creation of
              awesome applications while also making the web a fun place.
            </p>
            <p>
              I'm a minimalist, lover of all things retro computing, future funk, jazz and cats.
            </p>
            <p>
              I love the sun and nature, I love to walk and my favorite food is japanese. My
              dream is to live in peace and harmony with myself and the things around me.
            </p>
          </div>
        </div>
      </main>
    </Page>
  );
};

export default IndexPage;
