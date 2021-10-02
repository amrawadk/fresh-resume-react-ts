import { Meta } from "@storybook/react";

import Job, { JobProps } from "./Job";

export default {
  component: Job,
  title: "UI/Job",
} as Meta;

// @ts-ignore # TODO FIX THIS 'refers to a value, but is being used as a type'
const Template: Job = (args: JobProps) => <Job {...args} />;

export const TempoFullTime = Template.bind({});

TempoFullTime.args = {
  employer: "Tempo",
  highlights: [
    "Lead platform pod (3 backend engineers) which provided infrastructure and standardization support for other cross-functional pods.",
    "Managed 3+ backend engineers in Egypt, focusing on their development, and career growth.",
    "Helped build a hiring process to scale the backend (and engineering) teams in Egypt, with a focus on standardization & automation to eliminate bias, and help hire top tier candidates.",
    "Collaborated with product, QA, analytics, marketing and other engineering teams on projects from inception until execution and operation.",
  ],
  keywords: [
    "Python",
    "AWS",
    "Infrastructure",
    "Flask",
    "GraphQL",
    "Terraform",
    "CI/CD",
    "Hiring",
  ],
  location: "Cairo, Egypt",
  position: "Head of Backend",
  start: "2019-05",
  summary:
    "Backend Engineering Manager helping scale the backend team in terms of both head count and productivity.",
  url: "https://tempo.fit/",
};

export const TempoPartTime = Template.bind({});

TempoPartTime.args = {
  employer: "Tempo",
  end: "2019-05",
  highlights: [
    "As the first hire in Egypt, produced great results despite the timezone and geographical differences, that convinced the company to open a 2nd office in Egypt (main office is in SF, USA) which now has 20+ engineers and trainers.",
    "Helped build the initial API and infrastructure on AWS and set up a CI/CD pipeline.",
    "Developed a live multiplayer server for driving the leaderboard of live classes.",
  ],
  keywords: [
    "Python",
    "AWS",
    "Flask",
    "Jsonrpc",
    "ZeroMQ",
    "Terraform",
    "CI/CD",
  ],
  location: "remote - part-time",
  position: "Senior Backend Engineer",
  start: "2018-08",
  summary:
    "Employee number 3, and first engineering hire, helped build the foundations of backend engineering in the company",
  url: "https://tempo.fit/",
};

export const Upwork = Template.bind({});

Upwork.args = {
  employer: "Upwork",
  highlights: [
    "Maintained [top rated](https://support.upwork.com/hc/en-us/articles/211068468-Top-Rated) status with a 100% Job Success Score (JSS) for 3+ years.",
    "Consulted multiple business owners on architecture of new services on AWS.",
    "Helped build custom python linters to standardize code for a fin-tech company",
  ],
  keywords: ["Python", "AWS", "Flask", "PyQT", "Pandas", "Web Scraping"],
  location: "remote - part-time",
  position: "Senior Python Developer",
  start: "2017-09",
  summary:
    "Senior Python Developer & Tech lead working in various python projects spanning web apps, cloud infrastructure, machine learning, data science, and more.",
  url: "https://www.upwork.com/freelancers/~01948cc7babe490214",
};

export const Valeo = Template.bind({});

Valeo.args = {
  employer: "Valeo",
  end: "2019-05",
  highlights: [
    "Helped qualify safety critical modules to pass [ASIL-B certification](https://www.synopsys.com/automotive/what-is-asil.html)",
    "Worked in Active Safety team on building a sensor fusion platform able to run fusion algorithms and produce a real-time map for [the first certified level 3 autonomous car by Honda](https://www.msn.com/en-us/autos/news/honda-legend-becomes-worlds-first-certified-level-3-autonomous-car/ar-BB1eeQFs)",
  ],
  keywords: [
    "Agile",
    "C",
    "Assembly",
    "Embedded Linux",
    "RTOS",
    "Safety",
    "Automotive",
  ],
  location: "6 October City, Egypt",
  position: "Embedded Software Engineer",
  start: "2017-09",
  summary:
    "SoC (System On Chip) Developer working with a proprietry RTOS to implement features for custom hardware",
  url: "https://www.valeo.com/en/egypt/",
};
