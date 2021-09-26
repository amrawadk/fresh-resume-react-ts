import { Meta } from "@storybook/react";

import NavigationMenu from "./NavigationMenu";

export default {
  component: NavigationMenu,
  title: "Sections/TopNav",
} as Meta;

export const Primary: React.VFC<{}> = () => <NavigationMenu />;
