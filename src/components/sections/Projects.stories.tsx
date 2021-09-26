import Projects, { ProjectsProps } from "./Projects";
import { Primary } from "../ui/Project.stories";

export default {
  component: Projects,
  title: "Pages/Projects",
};

const Template: Projects = (args: ProjectsProps) => <Projects {...args} />;

export const Main = Template.bind({});

Main.args = { projects: [...Array(10)].map((e, i) => Primary.args) };
