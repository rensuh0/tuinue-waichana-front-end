import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

const Link = ({ page, selectedPage, setSelectedPage}) => {
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink className={ `${selectedPage === lowerCasePage ? "text-dark-grey" : ""} 
        hover: text-dark-grey transition duration-500`}
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    )
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery ("(min-width: 768px)");
    const navbarBackground = isTopOfPage ? "" : "bg-red";

    return (
        <nav className = {`${navbarBackground} z-40 w-full fixed top-0 py-6`} >
            <div className="flex items-center justify-between mx-auto w-5/6">
                <h4 className="font-playfair text-3xl font-bold text-black"> Tuinue Wasichana</h4>

                {/*desktop nav bar */}
                {isAboveSmallScreens ? (
                    <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
                        <Link 
                          page = "Home"
                          selectedPage={selectedPage}
                          setSelectedPage={setSelectedPage}
                        />
                         <Link 
                          page = "About"
                          selectedPage={selectedPage}
                          setSelectedPage={setSelectedPage}
                        />
                        <Link 
                          page = "Ways To Fundraise"
                          selectedPage={selectedPage}
                          setSelectedPage={setSelectedPage}
                        />
                        <Link 
                          page = "Tips & Tools"
                          selectedPage={selectedPage}
                          setSelectedPage={setSelectedPage}
                        />                      
                    </div>
                ) : (
                    <button className="rounded-full bg-black p-2"
                    onClick={() => setIsMenuToggled(!isMenuToggled)} >
                        <img alt = "menu-icon" src="../assets/menu-icon.svg" />
                    </button>
                ) }

                {/* mobile nav bar */}
                {!isAboveSmallScreens && isMenuToggled && (
                    <div className="fixed right-0 bottom-0 h-full bg-black w-[300px]">
                      {/* close icon */}
                      <div className="flex justify-end p-12">
                        <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        <img alt = "close-icon" src="../assets/close-icon.svg" />
                        </button>
                      </div>
                      
                      {/* menu items */}
                      <div className="flex flex-col gap-10 ml-[33%] text-2xl text-black">
                      <Link 
                          page = "Home"
                          selectedPage={selectedPage}
                          setSelectedPage={setSelectedPage}
                        />
                         <Link 
                          page = "About"
                          selectedPage={selectedPage}
                          setSelectedPage={setSelectedPage}
                        />
                        <Link 
                          page = "Ways To Fundraise"
                          selectedPage={selectedPage}
                          setSelectedPage={setSelectedPage}
                        />
                        <Link 
                          page = "Tips & Tools"
                          selectedPage={selectedPage}
                          setSelectedPage={setSelectedPage}
                        />
                      </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;