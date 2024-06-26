import Navbar from './scenes/Navbar';
import DotGroup from './scenes/DotGroup';
import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Landing from "./scenes/Landing";

const App = () => {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediaumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !==0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [] );

  return (
    <div className="app bg-deep-blue">
      <Navbar isTopOfPage={isTopOfPage} selectedPage = {selectedPage} setSelectedPage = {setSelectedPage} />
      <div className='w-5/6 mx-auto md:h-full'>
        {isAboveMediaumScreens && (
          <DotGroup 
           selectedPage = {selectedPage}
           setSelectedPage = {setSelectedPage}
          />
        )}
        <Landing setSelectedPage = {setSelectedPage} />
      </div>
    </div>
  )
}

export default App