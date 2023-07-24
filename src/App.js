import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import PrivacyPolitycy from "./features/PrivacyPolitycy";
import EnergyScan from "./features/EnergyScan";
import Menu from "./Menu";
import Media from "./Media";
import Footer from "./Footer";

function App() {
  return (
    <HashRouter>
      <Menu />

      <Switch>
        <Route path="/polityka-prywatności">
          <PrivacyPolitycy />
        </Route>
        <Route path="/">
          <EnergyScan />
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>

      <Footer />
      <Media />
    </HashRouter>
  );
}

export default App;
