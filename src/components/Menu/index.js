import { Navigation, Logo, Link, Icon } from "./styled";
import { useMediaQuery } from "react-responsive";
import { theme } from "../../theme";
import Contact from "../../constants";
import logo from "../../images/logo.png";
import phone from "../../images/phone.svg";
import massage from "../../images/massage.svg";
import facebook from "../../images/facebook.svg";

const Menu = () => {
    const isMobile = useMediaQuery({ maxWidth: theme.breakpoint.mobileMax });

    return (
        <Navigation>
            <Logo src={logo} alt="logo EnergyScan" />
            <div>
                <a href={`tel:${Contact.PHONE}`}>
                    <Icon src={phone} alt="Telefon" />
                </a>
                <a href={`mailto:${Contact.EMAIL}`}>
                    <Icon src={massage} alt="E-mail" />
                </a>
                <a href={`${Contact.FACEBOOK}`}>
                    <Icon src={facebook} alt="Facebook" />
                </a>
            </div>
            {!isMobile && (
                <div>
                    <Link href="#reasons">Dlaczego muszę to mieć?</Link>
                    <Link href="#price">Ile to kosztuje?</Link>
                    <Link href="#services">Nasze usługi</Link>
                    <Link href="#aboutUs">O nas</Link>
                    <Link href="#footer">Kontakt</Link>
                </div>
            )}
        </Navigation >
    );
};

export default Menu;