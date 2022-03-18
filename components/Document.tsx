import Head from "next/head";
import React from "react";

interface documentProps {
  title: string;
  description: string;
}

function Document(props: documentProps) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={props.description} />
    </Head>
  );
}

export default Document;
