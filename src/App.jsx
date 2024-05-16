import { useState } from "react";
import Navbar from "./Component/Navbar";
import NewsBoard from "./Component/NewsBoard";
const App = () => {
  const [category, setcategory] = useState("general");

  return (
    <div>
      <Navbar setcategory={setcategory} />
      <NewsBoard category={category} />
    </div>
  );
};

export default App;
