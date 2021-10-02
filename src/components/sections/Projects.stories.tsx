import Projects, { ProjectsProps } from "./Projects";
import { Primary } from "../ui/Project.stories";

export default {
  component: Projects,
  title: "Pages/Projects",
};

// @ts-ignore # TODO FIX THIS 'refers to a value, but is being used as a type'
const Template: Projects = (args: ProjectsProps) => <Projects {...args} />;

export const Main = Template.bind({});

Main.args = { projects: [...Array(10)].map((e, i) => Primary.args) };
