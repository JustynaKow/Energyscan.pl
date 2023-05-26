import { Wrapper, Logo, Title, Icon, Object, Link } from "./styled";
import phone from "../../../images/tel.svg";
import mail from "../../../images/mail.svg";
import location from "../../../images/location.svg";
import media from "../../../images/media.svg";
import Contact from "../../../constants";
import logo from "../../../images/energyscan.png";

const Footer = () => (
    <Wrapper id="footer">
        <Logo src={logo} alt="logo EnergyScan" />
        <Object>
            <Link href={`tel:${Contact.PHONE}`}>
                <Icon src={phone} alt="ikona telefonu" />
                <Title> Zadzwoń do nas: +48&nbsp;530&nbsp;196&nbsp;930 </Title>
            </Link>
            <Link href={`mailto:${Contact.EMAIL}`}>
                <Icon src={mail} alt="ikona e-mail" />
                {Contact.EMAIL}
            </Link>
            <Link href={`${Contact.ADRESS}`}>
                <Icon src={location} alt="ikona lokalizacji" />
                ul. Ks. J.J. Zawadzkiego 2 lok.012, 16-400 Suwałki
            </Link>
            <Link href={`${Contact.FACEBOOK}`}>
                <Icon src={media} alt="ikona lokalizacji" />
                Facebook
            </Link>
        </Object>
    </Wrapper>

);

export default Footer;