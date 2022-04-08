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
              Ola, eu sou Guilhermo Hounie. Sou estudante de ciência da computação,
              desenvolvedor web e entusiasta em muitas coisas. Tento explicar o mundo ao meu
              redor através de código.
            </p>
            <p>
              Eu amo a web e suas tecnologias, meu objetivo é contribuir para a criação de
              aplicações incríveis enquanto ajudo a tornar a web um lugar melhor.
            </p>
            <p>Sou um minimalista, amante de computação retro, future funk, jazz e gatos.</p>
            <p>
              Eu amo o sol e natureza, eu amo caminhar e minha comida favorita é sushi. Meu
              sonho é viver em paz e harmonia comigo mesmo e com todas as coisas ao meu redor.
            </p>
          </div>
        </div>
      </main>
    </Page>
  );
};

export default IndexPage;
