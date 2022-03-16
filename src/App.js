import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header';
import Company from './component/Header/Company/Company';
import AllInOne from './component/AllInOne/AllInOne';
import WhatIsSkilline from './component/WhatIsSkilline/WhatIsSkilline';
import UCanDo from './component/UCanDo/UCanDo';
import OurFeatures from './component/OurFeatures/OurFeatures';
import Footer from './component/Footer/Footer';
import LatestNews from './component/LatestNews/LatestNews';


function App() {
  return (
    <div className="App">
      
      <Header></Header>
      <Company></Company>
      <AllInOne></AllInOne>
      <WhatIsSkilline></WhatIsSkilline>
      <UCanDo></UCanDo>
      <OurFeatures></OurFeatures>
      <LatestNews> </LatestNews>
      <Footer></Footer>
    </div>
  );
}

export default App;
