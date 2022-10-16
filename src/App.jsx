import { Business, Connecting, Constant, Contacts, Footer, Home, Keep, Navbar, Ordinary, Performance, Process } from './components';

const App = () => (
  <div  className="bg-primary w-full overflow-hidden">
    <div className='home px-6 flex justify-center items-center'>
      <div className='xl:max-w-[1280px] w-full'>
        <Navbar />
        <Home />
      </div>
    </div>
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

export default App
