import React , {useState, useEffect} from 'react';

//Components
import Header from './components/Header';
import Main from './components/Main';
import SideBar from './components/SideBar';
import Footer from './components/Footer';

const App = () => {
  const[countDowm , setCountDown] = useState(200);
  const[timeLeft , setTimeLeft] = useState(0);

  useEffect(() => {
    const interval = setInterval(() =>{
      setCountDown(prevCountDown => prevCountDown -1);
      setTimeLeft(prevTimeLeft => prevTimeLeft + 1);
    },1000);
    return() => clearInterval(interval)
  },[])

  return (
    <>
    <Header timeLeft={timeLeft} />
    <Main countDowm={countDowm} />
    <SideBar />
    <Footer />
    </>
  );
};

export default App;