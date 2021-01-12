import { useState } from "react";
import Splash from "./components/Splash";
import Home from "./components/Home";

export default function Landing() {
  const [maintenance, setMaintenance] = useState(true);

  return maintenance ? <Splash /> : <Home />;
}
