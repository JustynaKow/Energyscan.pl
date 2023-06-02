import { Wrapper, Logo, Icon, Object, Link } from "./styled";
import logo from "../../../images/energyscan.webp";
import { footer } from "./footer";

const Footer = () => (
    <Wrapper id="footer">
        <Object>
            {footer.map(({ link, src, alt, description }) => (
                <Link href={link} key={alt}>
                    <Icon src={src} alt={alt} width="40px" height="40px" />
                    {description}
                </Link>
            ))}
        </Object>
        <Logo src={logo} alt="logo EnergyScan" width="300px" height="100px" />
    </Wrapper>

);

export default Footer;