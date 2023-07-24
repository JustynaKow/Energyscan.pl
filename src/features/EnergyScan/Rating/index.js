import { Wrapper, Image } from "./styled";
import star from "../../../images/star.svg";

const Rating = () => (
        <Wrapper>
            <Image src={star} alt="gwiazda" />
            <Image src={star} alt="gwiazda" />
            <Image src={star} alt="gwiazda" />
            <Image src={star} alt="gwiazda" />
            <Image src={star} alt="gwiazda" />
        </Wrapper>
);

export default Rating;