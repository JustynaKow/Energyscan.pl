import Reasons from "./Reasons";
import Price from "./Price";
import Team from "./Team";
import Services from "./Services";
import Footer from "./Footer";
import { Container } from "./styled";

const Content = () => (
  <Container>
    <Reasons />
    <Price />
    <Services />
    <Team />
    <Footer />
  </Container>
);

export default Content;
