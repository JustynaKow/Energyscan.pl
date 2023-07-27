import phone from "../../images/media_phone.svg";
import massage from "../../images/media_massage.svg";
import facebook from "../../images/media_facebook.svg";
import Contact from "../../constants";
import { Icon, Wrapper } from "./styled";

const Media = () => (
  <Wrapper>
    <a href={`${Contact.FACEBOOK}`}>
      <Icon src={facebook} alt="Facebook" />
    </a>
    <a href={`mailto:${Contact.EMAIL}`}>
      <Icon src={massage} alt="E-mail" />
    </a>
    <a href={`tel:${Contact.PHONE}`}>
      <Icon src={phone} alt="Telefon" />
    </a>
  </Wrapper>
);

export default Media;
