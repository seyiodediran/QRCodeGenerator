// imports 
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
      {/* Header Component */}
      <Header /> 

      {/* Section Component */}
      <Section />

      <br /><br />

      {/* UserInfo Component */}
      <UserInfo id="userid"/> {/* prop id has been passed as a result of using react scroll library for smooth scroll which requires the id of a section you would like to scroll to as a prop */}

      <br /><br />

      {/* Sms Component */}
      <Sms id="sms"/> {/* prop id has been passed as a result of using react scroll library for smooth scroll which requires the id of a section you would like to scroll to as a prop */}

      <br /><br />

      {/* Email Component */}
      <Email id="email" /> {/* prop id has been passed as a result of using react scroll library for smooth scroll which requires the id of a section you would like to scroll to as a prop */}

      <br /><br />

      {/* Footer Component */}
      <Footer />

      
    </div>
  );
}

export default App;



//notes 
// take common functions used in different components and place them in parent component and pass as props