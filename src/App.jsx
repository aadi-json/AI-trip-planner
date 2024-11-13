import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Button>hii there</Button>
      <div className="bg-red-400">hii</div>
    </div>
  );
}

export default App;
