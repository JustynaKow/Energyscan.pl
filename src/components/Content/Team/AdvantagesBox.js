import { Object, Subtitle, Article } from "./styled";
import check from "../../../images/check.webp";

const AdvantagesBox = ({ subtitle, article }) => (
    <>
        <Object>
            <img src={check} alt="check"  width="40px" height="40px" />
            <Subtitle> {subtitle} </Subtitle>
        </Object>
        <Article> {article} </Article>
    </>
);

export default AdvantagesBox;