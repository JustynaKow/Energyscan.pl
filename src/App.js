import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import PrivacyPolitycy from "./features/PrivacyPolitycy";
import EnergyScan from "./features/EnergyScan";
import Media from "./common/Media";
import Footer from "./common/Footer";

function App() {
  return (
    <HashRouter>
      
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
