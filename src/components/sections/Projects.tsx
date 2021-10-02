import { FC } from "react";

import { Row, Col, Typography } from "antd";
import Project, { ProjectProps } from "../ui/Project";

export interface ProjectsProps {
  projects: [ProjectProps];
}

const { Title } = Typography;

const Projects: FC<ProjectsProps> = ({ projects }) => (
  <div>
    <Title style={{ textAlign: "center" }}>Projects</Title>
    <Row>
      {projects.slice(0, 6).map((project: ProjectProps, index) => (
        <Col xs={24} md={8} style={{ padding: "10px" }} key={index}>
          <Project {...project} />
        </Col>
      ))}
    </Row>
  </div>
);

export default Projects;
