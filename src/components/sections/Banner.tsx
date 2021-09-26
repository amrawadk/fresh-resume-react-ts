import { FC } from "react";

import { Typography, Row, Space } from "antd";
import ReactMarkdown from "react-markdown";
import SocialIcon, { SocialIconProps } from "../ui/SocialIcon";

export interface BannerProps {
  name: string;
  brief: string;
  socialIcons: [SocialIconProps];
}

const { Title, Paragraph } = Typography;

const Banner: FC<BannerProps> = ({ name, brief, socialIcons }) => (
  <div>
    <Row justify="center">
      <Title style={{ textAlign: "center" }}>Hi, I'm {name}</Title>
    </Row>
    <Row justify="center">
      <Paragraph style={{ width: "60%", textAlign: "center" }}>
        <ReactMarkdown>{brief}</ReactMarkdown>
      </Paragraph>
    </Row>
    <Row justify="center">
      <Space size="large">
        {socialIcons.map(({ network, user }) => (
          <SocialIcon network={network} user={user} />
        ))}
      </Space>
    </Row>
  </div>
);

export default Banner;
