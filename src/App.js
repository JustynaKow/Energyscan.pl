import Faq from "./components/FAQ";
import Menu from "./components/Menu";
import Stopka from "./components/Stopka";
import Tytuł from "./components/Tytuł";
import Cennik from "./components/Cennik";
import Kontakt from "./components/Kontakt";
import Przesłanki from "./components/Przesłanki";
import Usługi from "./components/Usługi";
import Zespół from "./components/Zespół";
import Formularz from "./components/Formularz";

function App() {
  return (
    <>
      <Kontakt />
      <Menu />
      <Tytuł />
      <Formularz />
      <Przesłanki />
      <Cennik />
      <Usługi />
      <Faq />
      <Zespół />
      <Stopka />
    </>
  );
}

export default App;
