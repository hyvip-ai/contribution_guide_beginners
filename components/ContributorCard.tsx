import React, { useEffect } from "react";
import { User } from "../types/user";
interface Contributor {
  contributor: User;
}
function ContributorCard(props: Contributor) {
  useEffect(() => {}, []);
  return (
    <div className="card" data-state="#about">
      <div className="card-header">
        <div
          className="card-cover"
          style={{
            backgroundImage: `url(${props.contributor.avatar})`,
          }}
        ></div>
        <img
          className="card-avatar"
          src={props.contributor.avatar}
          alt="avatar"
        />
        <h1 className="card-fullname">{props.contributor.name}</h1>
        <h2 className="card-jobtitle">{props.contributor.designation}</h2>
      </div>
      <div className="card-main">
        <div className="card-section is-active" id="about">
          <div className="card-content">
            <div className="card-subtitle">ABOUT</div>
            <p className="card-desc">{props.contributor.about}</p>
          </div>
          <div className="card-social">
            <a href={props.contributor.linkedin}>
              <svg
                className="linkedin"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 002.882 0z" />
              </svg>
            </a>
            <a href={props.contributor.github}>
              <svg
                className="github"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
          <div className="card-contact-wrapper">
            <div className="card-contact">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <path d="M22 6l-10 7L2 6" />
              </svg>
              <a href={`mailto:${props.contributor.email}`}>
                {props.contributor.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContributorCard;
