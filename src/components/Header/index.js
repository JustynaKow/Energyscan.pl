import Title from "./Title";
import { StyledHeader, Information, Paragraph } from "./styled";

const Header = () => (
  <StyledHeader>
    <Title />
    <Information>
      <Paragraph>Obowiązek posiadania świadectw od dnia 29.04.2023</Paragraph>
    </Information>
  </StyledHeader>
);

export default Header;