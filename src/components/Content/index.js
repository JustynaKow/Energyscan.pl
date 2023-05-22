import Reasons from "./Reasons";
import Price from "./Price";
import Team from "./Team";
import Services from "./Services";
import Contact from "./Contact";
import { Container } from "./styled";

const Content = () => (
  <Container>
    <Reasons />
    <Price />
    <Services />
    <Team />
    <Contact />
  </Container>
);

export default Content;
