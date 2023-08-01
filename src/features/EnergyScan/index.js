import Reasons from "./Reasons";
import Price from "./Price";
import Advantages from "./Advantages";
import Services from "./Services";
import Clients from "./Clients";
import Profit from "./Profit";
import Information from "./Information";
import Rating from "./Rating";
import Header from "./Header";
import Menu from "./Menu";

const EnergyScan = () => (
  <>
  <Menu />
    <Header />
    <Reasons title="W jakich przypadkach potrzebujesz świadectwa charakterystyki energetycznej?" />
    <Information />
    <Clients title="Kto powinien posiadać świadectwo charakterystyki energetycznej?" />
    <Price title="Ile to kosztuje?" />
    <Profit title="O czym informuje świadectwo charakterystyki energetycznej?" />
    <Advantages title="Co nas wyróżnia?" />
    <Rating />
    <Services title="Nasze pozostałe usługi" />
  </>
);

export default EnergyScan;
