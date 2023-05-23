import { Wrapper, Heading, Paragraph, Subheading, Dot } from "./styled";

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
        <Paragraph>
            Obowiązek posiadania świadectw od dnia 29.04.2023
        </Paragraph>
    </Wrapper>
);

export default Header;