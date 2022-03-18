import Image from "next/image";
import Link from "next/link";
import React from "react";
import ContributorCard from "../components/ContributorCard";
import Document from "../components/Document";
import { User } from "../types/user";
interface ContributorProp {
  contributors: User[];
}

function contributors(props: ContributorProp) {
  console.log(props.contributors);

  return (
    <>
      <Document
        title="Contributors"
        description="This is the list of contributors, these guys already started with the open source dont you wanna start it? what are you waiting for join them"
      />
      <div className="contributors">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1 className="heading">
            {props.contributors.length} Contributor
            {props.contributors.length > 1 ? "s" : ""} Till Now
          </h1>
          <a
            className="button"
            href="https://github.com/hyvip-ai/contribution_guide_beginners"
            style={{ margin: "0px auto" }}
          >
            <span className="button__mask"></span>
            <span className="button__text">
              Join Our Community Get Yourself Featured
            </span>
            <span className="button__text button__text--bis">
              Join Our Community Get Yourself Featured
            </span>
          </a>
        </div>
        <div className="outer">
          <div className="contributor_container">
            {props.contributors.map((contributor) => {
              return (
                <ContributorCard
                  key={Math.random()}
                  contributor={contributor}
                />
              );
            })}
          </div>
        </div>
        <Link href="/" passHref>
          <button className="go-back">
            <Image
              src="http://cdn.onlinewebfonts.com/svg/img_68752.png"
              alt="back"
              layout="fill"
            />
          </button>
        </Link>
      </div>
    </>
  );
}

export default contributors;

export async function getServerSideProps() {
  const contributors: User[] = await fetch(
    `https://my-json-server.typicode.com/hyvip-ai/contribution_guide_beginners/contributors`
  ).then((res) => res.json());
  console.log(contributors);
  return {
    props: {
      contributors,
    },
  };
}
