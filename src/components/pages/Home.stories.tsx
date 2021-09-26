import Home, { HomeProps } from "./Home";
import { Primary } from "../sections/Banner.stories";

export default {
  component: Home,
  title: "Pages/Home",
};

const Template: Home = (args: HomeProps) => <Home {...args} />;

export const Main = Template.bind({});

Main.args = { ...Primary.args };
