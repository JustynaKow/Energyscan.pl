import { Wrapper, Heading, Subheading, Dot } from "./styled";

const Header = () => (
    <Wrapper>
        <Heading>
            Świadectwa Charakterystyki Energetycznej
        </Heading>
        <Subheading>
            Sejny
            <Dot>·</Dot>
            Suwałki
            <Dot>·</Dot>
            Augustów
        </Subheading>
    </Wrapper>
);

export default Header;