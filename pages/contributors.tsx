import React from "react";
import ContributorCard from "../components/ContributorCard";
import { User } from "../types/user";
interface ContributorProp {
  contributors: User[];
}

function contributors(props: ContributorProp) {
  console.log(props.contributors);

  return (
    <>
      <div className="contributor_container">
        {props.contributors.map((contributor) => {
          return (
            <ContributorCard key={Math.random()} contributor={contributor} />
          );
        })}
      </div>
    </>
  );
}

export default contributors;

export async function getServerSideProps() {
  const contributors: User[] = await fetch(
    ` https://my-json-server.typicode.com/hyvip-ai/contribution_guide_beginners/contributors`
  ).then((res) => res.json());
  console.log(contributors);
  return {
    props: {
      contributors,
    },
  };
}
