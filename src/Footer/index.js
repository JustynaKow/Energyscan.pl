import {
  Wrapper,
  Logo,
  Icon,
  Object,
  Hyperlink,
  StyledLink,
  Container
} from "./styled";
import logo from "../images/energyscan.webp";
import { footer } from "./footer";

const Footer = () => {
  const scrollToUp = () => window.scrollTo({ top: 0 });

  return (
        <Wrapper id="kontakt">
        <Object>
          {footer.map(({ link, src, alt, description }) => (
            <Hyperlink href={link} key={alt}>
              <Icon src={src} alt={alt} width="40px" height="40px" />
              {description}
            </Hyperlink>
          ))}
        </Object>
        <Container>
        <Logo src={logo} alt="logo EnergyScan" width="300px" height="100px" />
        <StyledLink to="/polityka-prywatności" onClick={scrollToUp}>
          Polityka Prywatności
        </StyledLink>
        </Container>
      </Wrapper>
  );
};

export default Footer;
