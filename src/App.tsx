import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

export default function App() {
  return (
    <div className="w-full h-full flex">
      <Sidebar />
      <div className="bg-amber-400">
        <MainContent theme="light" toggleTheme={() => {}} />
      </div>
    </div>
  );
}
