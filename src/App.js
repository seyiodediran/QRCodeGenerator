import './App.css';
import Header from './components/Header';
import UserInfo from './components/Id/userInfo';
import Sms from './components/Sms/Sms';
import Email from './components/Email/Email';
import Section from './components/section';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Header />
      <Section />

      <br /><br />
      <UserInfo id="userid"/>

      <br /><br />
      <Sms id="sms"/>

      <br /><br />
      <Email id="email" />

      <br /><br />

      <Footer />

      
    </div>
  );
}

export default App;



//notes 
// take common functions used in different components and place them in parent component and pass as props