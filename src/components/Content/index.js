import Reasons from "./Reasons";
import Price from "./Price";
import Team from "./Team";
import Services from "./Services";
import Clients from "./Clients";
import Profit from "./Profit";
import Information from "./Information";
import Rating from "./Rating";

const Content = () => (
  <>
    <Reasons title="W jakich przypadkach potrzebujesz świadectwa charakterystyki energetycznej?"/>
    <Information />
    <Clients title="Kto powinien posiadać świadectwo charakterystyki energetycznej?" />
    <Price title="Ile to kosztuje?" />
    <Profit title="O czym informuje świadectwo charakterystyki energetycznej?" />
    <Team title="Co nas wyróżnia" />
    <Rating />
    <Services title="Nasze pozostałe usługi" />
  </>
);

export default Content;
