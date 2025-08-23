import './App.css';
import Counter from './counter';
import NavBar from './navBar';
import Home from './home';
import SocialLinks from './socials';
import { Analytics } from "@vercel/analytics/next"

// import Explore from './explore';

function App() {
  return (
    <>
      <NavBar />
      <Counter />
      <Home></Home>
      <SocialLinks></SocialLinks>
      <Analytics/>
      {/* <Explore></Explore> */}
    </>
  );
}

export default App;
