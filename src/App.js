//import Mailchecker from './components/mailchecker';
import Mailinfo from './components/mailinfo';
//import StyleSheet from './App.scss';
import Maillist from './components/mailist';
import MailNavBar from './components/mailnavbar';

function App() {
  return (
    <div className="App" >

      <div >
      <MailNavBar/>
      <Maillist/>
        <div>
      <Mailinfo/>
        </div>
      </div>
    </div>
  );
}

export default App;
