import { Container } from "./styled";
import Reasons from "./Reasons";
import Price from "./Price";
import Team from "./Team";
import Services from "./Services";
import Footer from "./Footer";
import Clients from "./Clients";
import Profit from "./Profit";

const Content = () => (
  <Container>
    <Reasons title="W jakich przypadkach potrzebujesz świadectwa charakterystyki energetycznej?"/>
    <Clients title="Kto powinien posiadać świadectwo charakterystyki energetycznej?" />
    <Price title="Ile to kosztuje?" />
    <Profit title="O czym informuje świadectwo charakterystyki energetycznej?" />
    <Services />
    <Team />
    <Footer />
  </Container>
);

export default Content;
