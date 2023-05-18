import { Navigation, Logo, Link, Icon } from "./styled";
import logo from "../../../images/energyscan.png";
import { useMediaQuery } from "react-responsive";
import { theme } from "../../../theme";
import phone from "../../../images/phone.svg";
import massage from "../../../images/massage.svg";
import facebook from "../../../images/facebook.svg";

const Menu = () => {
    const isMobile = useMediaQuery({ maxWidth: theme.breakpoint.mobileMax });

    return (
        <Navigation>
            <Logo src={logo} alt="logo EnergyScan" />
            <a href="tel:+48783737050">
                <Icon src={phone} alt="Telefon"/>
            </a>
            <a href="mailto:biuro@sercefinansow.pl" >
                <Icon src={massage} alt="Wiadomość"/>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100092561449395">
                <Icon src={facebook} alt="Facebook"/>
            </a>
            {!isMobile && (
                <div>
                    <Link href="#przeslanki">Dlaczego muszę to mieć?</Link>
                    <Link href="#cennik">Ile to kosztuje?</Link>
                    <Link href="#usługi">Nasze usługi</Link>
                    <Link>FAQ</Link>
                    <Link>O nas</Link>
                    <Link>Kontakt</Link>
                </div>
            )}
        </Navigation >
    );
};

export default Menu;