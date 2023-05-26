import Reasons from "./Reasons";
import Price from "./Price";
import Team from "./Team";
import Services from "./Services";
import Footer from "./Footer";
import { Container } from "./styled";
import Clients from "./Clients";

const Content = () => (
  <Container>
    <Reasons title="W jakich przypadkach potrzebujesz świadectwa charakterystyki energetycznej?"/>
    <Clients title="Kto powinien posiadać świadectwo charakterystyki energetycznej?" />
    <Price title="Ile to kosztuje?" />
    <Services />
    <Team />
    <Footer />
  </Container>
);

export default Content;
