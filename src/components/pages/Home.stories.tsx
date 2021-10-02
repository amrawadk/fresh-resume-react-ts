import Home, { HomeProps } from "./Home";
import { Primary } from "../sections/Banner.stories";
import { Main } from "../sections/Projects.stories";
import { Primary as PrimaryJobs } from "../sections/jobs.stories";

export default {
  component: Home,
  title: "Pages/Home",
};

// @ts-ignore # TODO FIX THIS 'refers to a value, but is being used as a type'
const Template: Home = (args: HomeProps) => <Home {...args} />;

export const HomeMain = Template.bind({});

HomeMain.args = {
  banner: Primary.args,
  projects: Main.args,
  jobs: PrimaryJobs.args,
};
