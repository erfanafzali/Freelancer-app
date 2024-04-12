import { Toaster } from "react-hot-toast";
import Router from "./routers/Router";
import Layout from "./layouts/Layout";

function App() {
  return (
    <div className="container">
      <Toaster />
      <Layout>
        <Router />
      </Layout>
    </div>
  );
}

export default App;
