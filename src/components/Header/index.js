import { Wrapper, Logo, Navigation, List } from "./styled";


const Header = () => (
    <Wrapper>
        <Logo />
        <Navigation>
            <List>
                Czym się zajmujemy?
            </List>
            <List>
                Cennik
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
    </Wrapper>
);

export default Header;