import { Object, Icon, Subtitle, Article } from "./styled";
import check from "../../../images/check.webp";

const AdvantagesBox = ({ subtitle, article }) => (
    <>
        <Object>
            <Icon src={check} alt="check" />
            <Subtitle> {subtitle} </Subtitle>
        </Object>
        <Article> {article} </Article>
    </>
);

export default AdvantagesBox;