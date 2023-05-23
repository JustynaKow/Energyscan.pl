import { Wrapper, Title, Icon, Object, Link } from "./styled";
import phone from "../../../images/tel.svg";
import mail from "../../../images/mail.svg";
import location from "../../../images/location.svg";
import media from "../../../images/media.svg";
import Contact from "../../../constants";

const Footer = () => (
    <Wrapper id="footer">
        <Title>Zadzwoń:</Title>
        <Object>
            <Icon src={phone} alt="ikona telefonu" />
            <Link href={`tel:${Contact.PHONE}`}>{Contact.PHONE}</Link>
        </Object>
        <Object>
            <Icon src={mail} alt="ikona e-mail" />
            <Link href={`mailto:${Contact.EMAIL}`}>{Contact.EMAIL}</Link>
        </Object>
        <Object>
            <Icon src={location} alt="ikona lokalizacji" />
            <p>ul. Ks. J.J. Zawadzkiego 2 lok.012 <br /> 16-400 Suwałki</p>
        </Object>
        <Object>
            <Icon src={media} alt="ikona lokalizacji" />
            <Link href={`${Contact.FACEBOOK}`}>Facebook</Link>
        </Object>
    </Wrapper>

);

export default Footer;