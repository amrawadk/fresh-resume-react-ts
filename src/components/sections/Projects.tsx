import { FC } from "react";

import { Row, Col } from "antd";
import Project, { ProjectProps } from "../ui/Project";

export interface ProjectsProps {
  projects: [ProjectProps];
}

const Projects: FC<ProjectsProps> = ({ projects }) => (
  <Row>
    {projects.map((project: ProjectProps) => (
      <Col xs={24} md={8} style={{ padding: "10px" }}>
        <Project {...project} />
      </Col>
    ))}
  </Row>
);

export default Projects;
