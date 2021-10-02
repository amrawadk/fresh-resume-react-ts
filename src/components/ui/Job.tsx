import { Card } from "antd";
import React from "react";
import ReactMarkdown from "react-markdown";

export interface JobProps {
  position: string;
  employer: string;
  url: URL;
  location: string;

  start: Date;
  end?: Date;

  summary: string;
  highlights: [string];

  keywords?: [string];
}

// TODO: render dates more nicely.

const Job: React.FC<JobProps> = ({
  position,
  employer,
  url,
  location,
  start,
  end,
  summary,
  highlights,
  keywords,
}) => {
  let content = `## ${position} @ [${employer}](${url})
  ### ${location}
  #### ${start} - ${end ? end : "current"}

  ${summary}

  #### Highlights

  ${highlights.map((s) => `- ${s}`).join("\n")}
  `;
  return (
    <Card>
      <ReactMarkdown>{content}</ReactMarkdown>
    </Card>
  );
};

export default Job;
