import { Kontener, Logo, Navigation, List, Link } from "./styled";


const Menu = () => (
    <Kontener>
        <Logo>
            LOGO
        </Logo>
        <Navigation>
            <List>
                <Link href="#cennik">
                Ile to kosztuje?
                </Link>
            </List>
            <List>
                Dlaczego muszę to mieć?
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