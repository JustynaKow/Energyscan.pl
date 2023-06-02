import { Element, Subtitle, Paragraf } from "./styled";

const ReasonsBox = ({ photo, title, article }) => (
    <>
        <Element>
            <img src={photo} alt={title} width="50px" height="50px" />
            <Subtitle> {title} </Subtitle>
        </Element>
        <Paragraf>
            {article}
        </Paragraf>
    </>
);

export default ReasonsBox;