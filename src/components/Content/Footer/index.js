import { Wrapper, Logo, Icon, Object, Link } from "./styled";
import logo from "../../../images/energyscan.png";
import { footer } from "./footer";

const Footer = () => (
    <Wrapper id="footer">
        <Object>
            {footer.map(({ link, src, alt, description }) => (
                <Link href={link}>
                    <Icon src={src} alt={alt} />
                    {description}
                </Link>
            ))}
        </Object>
        <Logo src={logo} alt="logo EnergyScan" />
    </Wrapper>

);

export default Footer;