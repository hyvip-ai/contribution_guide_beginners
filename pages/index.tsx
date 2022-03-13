import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="homeWrapper">
        <div className="left">
          <h1>Creativity starts with viewing the whole world differently</h1>
          <h3>Get Started with Open Source easily within minutes</h3>
          <div className="buttons">
            <button className="pink">
              <a href="https://github.com/hyvip-ai/contribution_guide_beginners">
                Start Contributing
              </a>{" "}
            </button>
            <button className="pink">
              <Link href="/contributors">Checkout All Contributors</Link>
            </button>
          </div>
        </div>
        <div className="right">
          <Image
            src="https://demos.creative-tim.com/notus-nextjs/img/pattern_nextjs.png"
            alt="pattern"
            layout="responsive"
            height="100%"
            width="100%"
            objectFit="cover"
          />
        </div>
      </div>
    </>
  );
}
