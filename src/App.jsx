import './App.css';
import Counter from './counter';
import NavBar from './navBar';
import Home from './home';
import SocialLinks from './socials';
// import Explore from './explore';

function App() {
  return (
    <>
      <NavBar />
      <Counter />
      <Home></Home>
      <SocialLinks></SocialLinks>
      {/* <Explore></Explore> */}
    </>
  );
}

export default App;
