import { Element, Image, Subtitle, Paragraf } from "./styled";

const ReasonsBox = ({ photo, title, article }) => (
    <>
        <Element>
            <Image src={photo} alt={title} />
            <Subtitle> {title} </Subtitle>
        </Element>
        <Paragraf>
            {article}
        </Paragraf>
    </>
);

export default ReasonsBox;