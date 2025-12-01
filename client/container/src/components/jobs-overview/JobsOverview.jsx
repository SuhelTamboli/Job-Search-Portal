import React from "react";
import JobsOverviewCard from "jobs/JobsOverviewCard";
import styles from "./JobsOverview.module.css";

const topJobs = [
  {
    jobId: "JOB-101",
    company: "Google",
    country: "India",
    role: "Frontend Developer",
    description:
      "Develop and optimize user-facing features for large-scale applications using React and modern UI technologies.",
    positions: 2,
    type: "Full Time",
    salary: "24 LPA",
  },
  {
    jobId: "JOB-102",
    company: "Microsoft",
    country: "India",
    role: "Backend Engineer",
    description:
      "Build scalable backend services, improve API performance, and work on distributed systems using .NET and Azure.",
    positions: 3,
    type: "Full Time",
    salary: "28 LPA",
  },
  {
    jobId: "JOB-103",
    company: "Amazon",
    country: "USA",
    role: "Full Stack Developer",
    description:
      "Work across the stack to design robust web services, deliver highly available features, and improve system reliability.",
    positions: 4,
    type: "Full Time",
    salary: "32 LPA",
  },
  {
    jobId: "JOB-104",
    company: "Netflix",
    country: "USA",
    role: "UI/UX Designer",
    description:
      "Design intuitive user interfaces, create wireframes, and collaborate with product teams to enhance customer experience.",
    positions: 1,
    type: "Contract",
    salary: "20 LPA",
  },
  {
    jobId: "JOB-105",
    company: "Meta",
    country: "UK",
    role: "Mobile App Developer",
    description:
      "Build high-quality mobile applications using React Native, optimize app performance, and integrate backend services.",
    positions: 2,
    type: "Full Time",
    salary: "30 LPA",
  },
  {
    jobId: "JOB-106",
    company: "Spotify",
    country: "Germany",
    role: "DevOps Engineer",
    description:
      "Manage CI/CD pipelines, automate infrastructure, and ensure smooth deployment workflows with Kubernetes and AWS.",
    positions: 1,
    type: "Full Time",
    salary: "26 LPA",
  },
];


const JobsOverview = () => {
  return (
    <div>
      <h2>Latest and Top Job Openings</h2>
      <div className={styles.jobsOverviewCardsWrapper}>
        {topJobs.map((job) => (
          <JobsOverviewCard key={job.jobId} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobsOverview;
