import "./App.css";
import Sidebar from "./components/sideheader/sidebar";
import Allchatbody from './components/allchatsandchatbody/allchatbody';

function App() {
  return (
    <div className="main-container">
      <Sidebar />
      <Allchatbody />
    </div>
  );
}

export default App;
