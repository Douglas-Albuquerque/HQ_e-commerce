import { useEffect } from "react";
import RoutePage from "./Router/index"
import api from "./Service/api"

function App() {

  useEffect(() => {
    async function loadData() {
      await api.get("/");
    }
    loadData();

  },[]);
  
  return (
    <div>
      <RoutePage />
    </div>
  );
}

export default App;
