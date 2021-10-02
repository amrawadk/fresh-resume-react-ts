import "./App.less";

import { FC } from "react";

import Home from "./components/pages/Home";
import { HomeMain } from "./components/pages/Home.stories";

const App: FC = () => <div className="App">{<Home {...HomeMain.args} />}</div>;

export default App;
