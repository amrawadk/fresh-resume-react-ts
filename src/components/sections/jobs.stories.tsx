import Jobs, { JobsProps } from "./jobs";
import { TempoFullTime, TempoPartTime, Upwork, Valeo } from "../ui/Job.stories";

export default {
  component: Jobs,
  title: "Sections/Jobs",
};

const Template: Jobs = (args: JobsProps) => <Jobs {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  summary: "7+ years industry IT and software development experience.",
  jobs: [TempoFullTime.args, TempoPartTime.args, Upwork.args, Valeo.args],
};
