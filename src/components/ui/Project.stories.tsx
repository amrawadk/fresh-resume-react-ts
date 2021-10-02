import { Meta } from "@storybook/react";

import Project, { ProjectProps } from "./Project";

export default {
  component: Project,
  title: "UI/Project",
} as Meta;

// @ts-ignore # TODO FIX THIS 'refers to a value, but is being used as a type'
const Template: Project = (args: ProjectProps) => <Project {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title: "Socializer",
  summary: "A CLI that automates building and maintaining personal networks.",
  url: "http://socializer.amrawadk.com/",
  repo: "https://github.com/AmrAwadK/socializer",
};
