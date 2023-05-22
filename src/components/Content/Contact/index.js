import { Wrapper, Title, Icon, Object, Link } from "./styled";
import phone from "../../../images/tel.svg";
import mail from "../../../images/mail.svg";
import location from "../../../images/location.svg";
import media from "../../../images/media.svg";

const Contact = () => (
<Wrapper id="contact">
<Title>Zadzwoń:</Title>
<Object>
<Icon src={phone} alt="ikona telefonu"/> 
<Link href="tel:+48530196930">530196930</Link>
</Object>
<Object>
<Icon src={mail} alt="ikona e-mail"/> 
<Link href="mailto:biuro@energyscan.pl">biuro@energyscan.pl</Link>
</Object>
<Object>
<Icon src={location} alt="ikona lokalizacji"/> 
<p>ul. Ks. J.J. Zawadzkiego 2 lok.012 <br /> 16-400 Suwałki</p>
</Object>
<Object>
<Icon src={media} alt="ikona lokalizacji"/> 
<Link href="https://www.facebook.com/profile.php?id=100092561449395">Facebook</Link>
</Object>
</Wrapper>

);

export default Contact;