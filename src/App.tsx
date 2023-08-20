import Sidebar from "./components/Sidebar";
import MainTab from "./components/MainTab";

const App = () => {
  return (
    <main className="bg-dark min-h-screen text-t-light flex flex-col lg:flex-row">
      <Sidebar />
      <MainTab />
    </main>
  );
};

export default App;
