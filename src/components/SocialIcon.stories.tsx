import { Meta } from "@storybook/react";

import SocialIcon, { SocialIconProps } from "./SocialIcon";

export default {
  component: SocialIcon,
  title: "Components/SocialIcon",
} as Meta;

const Template = (args: SocialIconProps) => <SocialIcon {...args} />;

export const Linkedin = Template.bind({});

Linkedin.args = {
  network: "Linkedin",
  user: "amrawadk",
};

export const Github = Template.bind({});

Github.args = {
  network: "Github",
  user: "amrawadk",
};

export const Gitlab = Template.bind({});

Gitlab.args = {
  network: "Gitlab",
  user: "amrawadk",
};

export const Upwork = Template.bind({});

Upwork.args = {
  network: "Upwork",
  user: "~01948cc7babe490214",
};
