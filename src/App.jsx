import { Business, Connecting, Constant, Contacts, Footer, Home, Keep, Navbar, Ordinary, Performance, Process } from './components';

const App = () => (
  <div  className="bg-primary w-full overflow-hidden">
    <div className='home px-6 flex justify-center items-center'>
      <div className='xl:max-w-[1600px] w-full'>
        <Navbar />
        <Home />
      </div>
    </div>
    <div className='flex flex-col justify-center items-center'>
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
  </div>
);

export default App
