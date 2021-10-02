import { Timeline, Typography } from "antd";
import { FC } from "react";

import Job, { JobProps } from "../ui/Job";

export interface JobsProps {
  summary: string;
  jobs: [JobProps];
}

const { Title, Paragraph } = Typography;

const Jobs: FC<JobsProps> = ({ summary, jobs }) => (
  <div>
    <Title style={{ textAlign: "center" }}>Job History</Title>
    <Paragraph style={{ textAlign: "center" }}>{summary}</Paragraph>

    <Timeline>
      {jobs.map((job, index) => (
        <Timeline.Item key={index}>
          <Job {...job} />
        </Timeline.Item>
      ))}
    </Timeline>
  </div>
);

export default Jobs;
