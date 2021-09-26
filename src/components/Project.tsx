import React from "react";
import { Card, Space } from "antd";
import { LinkOutlined, GithubOutlined } from "@ant-design/icons";

interface ProjectProps {
  title: string;
  summary: string;
  url: URL;
  repo: URL;
}

// TODO: change repo icon based on url base domain

const Project: React.FC<ProjectProps> = ({ title, summary, url, repo }) => (
  <Card title={title} style={{ width: 300 }}>
    <p>{summary}</p>

    <Space>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <LinkOutlined style={{ fontSize: "150%" }} />
      </a>
      <a href={repo} target="_blank" rel="noopener noreferrer">
        <GithubOutlined style={{ fontSize: "150%" }} />
      </a>
    </Space>
  </Card>
);

export default Project;
