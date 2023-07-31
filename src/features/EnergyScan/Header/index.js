import {
  Element,
  Wrapper,
  Heading,
  Container,
  Subheading,
  Dot,
  Button,
  Link,
  Picture,
} from "./styled";
import Contact from "../../../constants";
import background from "../../../images/mobile.webp";

const Header = () => (
  <Element>
    <Wrapper>
        <Heading>Świadectwa Charakterystyki Energetycznej</Heading>
        <Container>
          <Subheading>Sejny</Subheading>
          <Dot>·</Dot>
          <Subheading>Suwałki</Subheading>
          <Dot>·</Dot>
          <Subheading>Augustów</Subheading>
        </Container>
    </Wrapper>
    <Picture src={background} alt="żarówka" />
    <div>
      <Button>
        <Link href={`tel:${Contact.PHONE}`}>+48 530 196 930 </Link>
      </Button>
      <Button>
        <Link href={`mailto:${Contact.EMAIL}`}>{Contact.EMAIL} </Link>
      </Button>
    </div>
  </Element>
);

export default Header;
