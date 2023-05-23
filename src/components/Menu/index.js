import { Navigation, Logo, Link, Icon } from "./styled";
import logo from "../../images/logo.png";
import { useMediaQuery } from "react-responsive";
import { theme } from "../../theme";
import phone from "../../images/phone.svg";
import massage from "../../images/massage.svg";
import facebook from "../../images/facebook.svg";
import Contact from "../../constants";

const Menu = () => {
    const isMobile = useMediaQuery({ maxWidth: theme.breakpoint.mobileMax });

    return (
        <Navigation>
            <Logo src={logo} alt="logo EnergyScan" />
            <a href={`tel:${Contact.PHONE}`}>
                <Icon src={phone} alt="Telefon" />
            </a>
            <a href={`mailto:${Contact.EMAIL}`}>
                <Icon src={massage} alt="E-mail" />
            </a>
            <a href={`${Contact.FACEBOOK}`}>
                <Icon src={facebook} alt="Facebook" />
            </a>
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