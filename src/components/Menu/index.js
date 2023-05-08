import { Kontener, Logo, Navigation, List, Link } from "./styled";


const Menu = () => (
    <Kontener>
        <Logo src="https://github.com/JustynaKow/audyty/blob/main/src/images/firma.png" alt="logo EnergyScan" />
        <Navigation>
            <List>
                <Link href="#cennik">
                    Ile to kosztuje?
                </Link>
            </List>
            <List>
                <Link href="#przeslanki">
                    Dlaczego muszę to mieć?
                </Link>
            </List>
            <List>
                Nasze usługi
            </List>
            <List>
                FAQ
            </List>
            <List>
                O nas
            </List>
            <List>
                Kontakt
            </List>
        </Navigation>
    </Kontener>
);

export default Menu;