import './App.css';
import { Business, Connecting, Constant, Contacts, Footer, Home, Keep, Navbar, Performance, Process } from './components';

const App = () => (
  <div  className="bg-primary w-full overflow-hidden">
    <Navbar />
    <Home />
    <Business />
    <Connecting />
    <Constant />
    <Ordinary />
    <Process />
    <Performance />
    <Keep />
    <Contacts />
    <Footer />
  </div>
);

export default App;
