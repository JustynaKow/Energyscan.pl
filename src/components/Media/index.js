import phone from "../../images/phone.svg";
import massage from "../../images/massage.svg";
import facebook from "../../images/facebook.svg";
import Contact from "../../constants";
import { Icon, Wrapper } from "./styled";
import { useMediaQuery } from "react-responsive";
import { theme } from "../../theme";

const Media = () => {
    const isMobile = useMediaQuery({ maxWidth: theme.breakpoint.mobileMax });

    return (
        !isMobile && (
            <Wrapper>
                <a href={`tel:${Contact.PHONE}`}>
                    <Icon src={phone} alt="Telefon" />
                </a>
                <a href={`mailto:${Contact.EMAIL}`}>
                    <Icon src={massage} alt="E-mail" />
                </a>
                <a href={`${Contact.FACEBOOK}`}>
                    <Icon src={facebook} alt="Facebook" />
                </a>
            </Wrapper>
        )
    );
};

export default Media;