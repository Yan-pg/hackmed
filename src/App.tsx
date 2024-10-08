import "./App.css";

import { PageDoidera } from "./components/component-page/page-doidera";
import { ModeToggle } from "./components/ui/mode-toggle";

function App() {
  return (
    <div>
      <div className="flex items-center justify-end px-5 mt-10">
        <ModeToggle />
      </div>

      <h1 className="px-5 text-3xl font-bold mt-10 text-center">
        Dados do paciente
      </h1>
      <PageDoidera />
    </div>
  );
}

export default App;
