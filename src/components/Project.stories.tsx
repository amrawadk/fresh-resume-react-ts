import { Meta } from "@storybook/react";

import Project from "./Project";

export default {
  component: Project,
  title: "Resume/Project",
} as Meta;

const Template: Project = (args) => <Project {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title: "Socializer",
  summary: "A CLI that automates building and maintaining personal networks.",
  url: "http://socializer.amrawadk.com/",
  repo: "https://github.com/AmrAwadK/socializer",
};
