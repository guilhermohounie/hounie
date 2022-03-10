import { Page } from "@components/common/Page";
import type { NextPage } from "next";
import Image from "next/image";

const IndexPage: NextPage = () => {
  return (
    <Page title="Guilhermo Hounie">
      <main className="flex flex-col gap-8">
        <span>
          <Image
            height={600 * 0.3}
            width={600 * 0.3}
            alt="Guilhermo Hounie's memoji"
            src="/assets/media/avatar.png"
            className="rounded-full"
          />
        </span>
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-3xl font-lora">Guilhermo Hounie</h1>
            <p className="text-gray-700">Cyberspace Homeboy.</p>
          </div>
          <hr className="w-32 h-px bg-gray-400 border-none" />
          <p className="text-gray-700">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat omnis earum
            ratione delectus animi laboriosam amet, sunt illo laborum, maiores fugit! Ullam
            reprehenderit nobis obcaecati quae, error id rem rerum?
          </p>
        </div>
      </main>
    </Page>
  );
};

export default IndexPage;
