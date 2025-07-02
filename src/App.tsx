import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

export default function App() {
  return (
    <div className="w-full h-full bg-gray-900 flex overflow-hidden">
      <div className="w-1/4 h-full bg-none">
        <Sidebar />
      </div>
      <div className="w-full overflow-y-auto">
        <MainContent theme="light" toggleTheme={() => {}} />
      </div>
    </div>
  );
}
