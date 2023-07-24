import { Subtitle, Paragraf, Wrapper, Image } from "./styled";

const ReasonsBox = ({ photo, title, article }) => (
    <Wrapper>
        <Image src={photo} alt={title} />
        <Subtitle> {title} </Subtitle>
        <Paragraf>
            {article}
        </Paragraf>
    </Wrapper>
);

export default ReasonsBox;