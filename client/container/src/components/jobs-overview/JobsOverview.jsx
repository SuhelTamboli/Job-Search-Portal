import React, { useEffect, useState } from "react";
import JobsOverviewCard from "jobs/JobsOverviewCard";
import styles from "./JobsOverview.module.css";

const EVENT_BUS = window.EVENT_BUS;

const topJobs = [
  {
    jobId: "JOB-101",
    company: "Google",
    country: "India",
    role: "Frontend Developer",
    description:
      "Join the Google Search team in Bangalore/Hyderabad to build the next generation of user interfaces that power billions of searches every day. You will work with React, TypeScript, and cutting-edge performance optimization techniques to deliver lightning-fast, accessible, and beautiful experiences across desktop and mobile devices. Collaborate with designers, product managers, and backend engineers in a highly autonomous squad following Google’s world-class engineering practices.",
    positions: 2,
    type: "Full Time",
    salary: "24 LPA",
    longDescription:
      "As a Frontend Engineer on the Google Search team, you'll be responsible for developing new user-facing features, optimizing rendering performance using the latest React 19+ concurrent features, and ensuring pixel-perfect implementation of designs from our world-class UX team. You'll work with Closure Compiler, Bazel builds, and have the opportunity to contribute to open-source libraries used by millions. We follow 20% time policy, offer extensive learning budgets, and provide relocation + comprehensive benefits including health insurance for family, generous stock units, on-site gyms, gourmet meals, and transportation. This role is based out of our vibrant Bangalore and Hyderabad campuses.",
  },
  {
    jobId: "JOB-102",
    company: "Microsoft",
    country: "India",
    role: "Backend Engineer",
    description:
      "Be part of Microsoft Azure’s India Development Center and build highly scalable distributed systems that power cloud services for millions of customers worldwide. Work with .NET 8, C#, Kubernetes, and Azure services to design resilient APIs and real-time data processing pipelines.",
    positions: 3,
    type: "Full Time",
    salary: "28 LPA",
    longDescription:
      "We are expanding the Azure Cosmos DB team in Hyderabad and looking for passionate backend engineers who love solving hard scalability problems. You will design globally distributed NoSQL database features, implement advanced consistency models, optimize query performance at planetary scale, and contribute to open-source projects like Apache Cassandra and Service Fabric. Tech stack includes .NET 8+, C#, gRPC, Docker, AKS, and Azure DevOps. Microsoft offers industry-leading compensation, ESOPs/RSUs, hybrid work model, unlimited sick leaves, parental leave up to 6 months, learning stipend of $3000/year, and relocation support.",
  },
  {
    jobId: "JOB-103",
    company: "Amazon",
    country: "USA",
    role: "Full Stack Developer",
    description:
      "Work on customer-facing, high-traffic services at Amazon scale. Build end-to-end features from database to UI using Java, Spring Boot, React/TypeScript, and AWS services. Ownership, on-call, and leadership principles are part of daily life.",
    positions: 4,
    type: "Full Time",
    salary: "32 LPA",
    longDescription:
      "Join the Amazon Prime Video team in Seattle to work on one of the largest streaming platforms in the world. You will own entire services — from designing DynamoDB schemas and writing Lambda functions to building responsive React frontends using AWS Amplify and AppSync. We operate with extreme ownership: you write it, you ship it, you support it. On-call rotation with generous compensation. Relocation package includes flight tickets, temporary housing for 30 days, sign-on bonus up to $50K (converted), and full visa sponsorship (H-1B + Green Card support). Benefits include 401(k) match, health insurance from day one, and 20% discount on Amazon.com.",
  },
  {
    jobId: "JOB-104",
    company: "Netflix",
    country: "USA",
    role: "UI/UX Designer",
    description:
      "Shape the future of entertainment by designing intuitive, delightful, and inclusive experiences for Netflix’s 250+ million members worldwide. Work closely with product and engineering teams using Figma, Framer, and design systems at scale.",
    positions: 1,
    type: "Contract",
    salary: "20 LPA",
    longDescription:
      "This is a 12-month contract role (with strong possibility of conversion) on Netflix’s Consumer Product Design team based in Los Gatos, California. You will design features for TV devices, mobile apps, and web that reach hundreds of millions of users. Collaborate with legendary designers, conduct user research, and contribute to Chaos — Netflix’s design system. We move fast, ship daily, and value freedom and responsibility. Contract includes full medical/dental/vision coverage, 401(k) with match, daily catered meals, gym membership, and relocation stipend. Remote-friendly within the US.",
  },
  {
    jobId: "JOB-105",
    company: "Meta",
    country: "UK",
    role: "Mobile App Developer",
    description:
      "Build and ship features for Instagram, WhatsApp, or Facebook apps that reach over 3 billion people. Work with React Native, GraphQL, and cutting-edge mobile infrastructure in London — one of Meta’s largest engineering hubs outside the US.",
    positions: 2,
    type: "Full Time",
    salary: "30 LPA",
    longDescription:
      "Meta London is hiring React Native engineers to work on Instagram Reels and Stories experiences. You’ll collaborate with product designers and backend teams to ship features weekly to hundreds of millions of users. Tech includes React Native, Hermes, TypeScript, Flipper, and Buck build system. Benefits include competitive salary + bonus + RSUs, private healthcare (Bupa), life insurance, pension contribution up to 10%, 30 days holiday + bank holidays, free breakfast/lunch/dinner, on-site gym, and visa sponsorship with indefinite leave to remain (ILR) path. Family relocation package available.",
  },
  {
    jobId: "JOB-106",
    company: "Spotify",
    country: "Germany",
    role: "DevOps Engineer",
    description:
      "Help Spotify scale to 600+ million users by building rock-solid infrastructure using Kubernetes, GCP, Terraform, and observability tools. Work in autonomous squads with extreme ownership and a strong engineering culture.",
    positions: 1,
    type: "Full Time",
    salary: "26 LPA",
    longDescription:
      "Join Spotify’s Core Infrastructure squad in Berlin or Stockholm to own services that handle petabytes of data and millions of requests per second. You will design multi-region Kubernetes platforms, implement zero-downtime deployment strategies, and improve observability with Prometheus, Grafana, and OpenTelemetry. We value work-life balance — 35-hour work weeks, unlimited vacation (minimum 30 days), 6 months paid parental leave, wellness allowance €2000/year, and public transport card. Full relocation support including German language courses and housing assistance for the first 3 months.",
  },
];

const JobsOverview = () => {
  const [filteredJobs, setFilteredJobs] = useState(
    topJobs.filter((job) => job.role.toLowerCase().includes(""))
  );

  const handleSearchEvent = (searchText) => {
    console.log(
      "caught search-jobs event in container JobsOverview.jsx ",
      searchText
    );
    setFilteredJobs(
      topJobs.filter((job) => job.role.toLowerCase().includes(searchText))
    );
  };

  useEffect(() => {
    const unsubscribeSearch = EVENT_BUS?.on?.("search-jobs", ({ searchText }) =>
      handleSearchEvent(searchText)
    );

    return () => {
      unsubscribeSearch?.();
    };
  }, []);
  return (
    <div>
      <h2>Latest and Top Job Openings</h2>
      <div className={styles.jobsOverviewCardsWrapper}>
        {filteredJobs.map((job) => (
          <JobsOverviewCard key={job.jobId} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobsOverview;
