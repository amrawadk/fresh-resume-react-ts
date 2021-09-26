import React from "react";
import {
  GithubOutlined,
  LinkedinOutlined,
  GitlabOutlined,
} from "@ant-design/icons";
import { Icon } from "@iconify/react";
import upworkIcon from "@iconify/icons-cib/upwork";
export interface SocialIconProps {
  network: "Github" | "Gitlab" | "Linkedin" | "Upwork";
  user: string;
}

// TODO: change repo SocialIcon based on url base domain

const SocialIcon: React.FC<SocialIconProps> = ({ network, user }) => {
  switch (network) {
    case "Linkedin":
      return (
        <a
          href={"https://www.linkedin.com/in/" + user}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinOutlined style={{ fontSize: "150%" }} />
        </a>
      );
    case "Github":
      return (
        <a
          href={"https://github.com/" + user}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubOutlined style={{ fontSize: "150%" }} />
        </a>
      );
    case "Gitlab":
      return (
        <a
          href={"https://gitlab.com/" + user}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitlabOutlined style={{ fontSize: "150%" }} />
        </a>
      );
    case "Upwork":
      return (
        <a
          href={"https://www.upwork.com/freelancers/" + user}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon={upworkIcon} style={{ fontSize: "150%" }} />
        </a>
      );
    default:
      return null;
  }
};

export default SocialIcon;
