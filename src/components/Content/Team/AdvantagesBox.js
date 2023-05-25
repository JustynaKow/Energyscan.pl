import { Object, Icon, Subtitle, Article } from "./styled";

const AdvantagesBox = ({ photo, subtitle, article }) => (
    <>
        <Object>
            <Icon src={photo} alt="check" />
            <Subtitle> {subtitle} </Subtitle>
        </Object>
        <Article> {article} </Article>
    </>
);

export default AdvantagesBox;