import "./App.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Layout from "./DDD/Presentation/Components/Layouts/Layout/Layout";
import Top from "./DDD/Presentation/Pages/Top/Top";

function App() {
  return (
    <Layout>
      <Top />
    </Layout>
  );
}

export default App;
