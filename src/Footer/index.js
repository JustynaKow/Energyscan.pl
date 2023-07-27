import {
  Wrapper,
  Icon,
  Object,
  Hyperlink,
  StyledLink,
  Container,
  Element,
} from "./styled";
import logo from "../images/energyscan.webp";
import { footer } from "./footer";

const Footer = () => {
  const scrollToUp = () => window.scrollTo({ top: 0 });

  return (
    <Wrapper id="kontakt">
      <Object>
        {footer.map(({ link, src, alt, description }) => (
          <Element key={alt}>
            <Icon src={src} alt={alt} width="40px" height="40px" />
            <Hyperlink href={link}>
              {description}
            </Hyperlink>
          </Element>
        ))}
      </Object>
      <Container>
        <img src={logo} alt="logo EnergyScan" width="300px" />
        <StyledLink to="/polityka-prywatności" onClick={scrollToUp}>
          Polityka Prywatności
        </StyledLink>
      </Container>
    </Wrapper>
  );
};

export default Footer;
