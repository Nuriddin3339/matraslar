import Statistics from '../../components/Statistics';
import Categoryy from '../../components/Category';
import Sale from '../../components/Sale';
import Header from '../../components/Header';
import Technology from '../../components/Technology';
import Company from '../../components/Company';
import AboutUs from '../../components/AboutUs';
import Address from './Address';
import Telefon from '../../components/Telefon';
import Footer from '../../components/Footer';
import './Home.css'

const Home = () => {
  return (
    <div>
      <Header />
      <Statistics />
      <Categoryy   />
      {/* <Products /> */}
      <Sale />
      <Technology />
      <Company />
      <AboutUs />
      <Address />
      <Telefon />
      <Footer />
    </div>
  );
};

export default Home;
