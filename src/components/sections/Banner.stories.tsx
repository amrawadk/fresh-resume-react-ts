import Banner, { BannerProps } from "./Banner";
import { Linkedin, Github, Gitlab, Upwork } from "../ui/SocialIcon.stories";

export default {
  component: Banner,
  title: "Sections/Banner",
};

const Template: Banner = (args: BannerProps) => <Banner {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  name: "Amr Awad",
  brief:
    "**A problem solver with 5+ years of software industry experience** specializing in cloud-driven web applications and middleware. I enjoy working on challenging problems both technical and non-technical, and am able to leverage a mix of soft skills, planning, leadership, technical experience to tackle problems.",
  socialIcons: [Linkedin.args, Github.args, Gitlab.args, Upwork.args],
};
