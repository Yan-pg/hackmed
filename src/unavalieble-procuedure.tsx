import { PageDoidera2 } from "./components/component-page/page-doidera-2";
import { ModeToggle } from "./components/ui/mode-toggle";

export function UnavaliebleProcuedure() {
  return (
    <div>
      <div className="flex items-center justify-end px-5 mt-10">
        <ModeToggle />
      </div>

      <h1 className="px-5 text-3xl font-bold mt-10 text-center">
        Procedimentos indisponíveis
      </h1>
      <PageDoidera2 />
    </div>
  );
}
