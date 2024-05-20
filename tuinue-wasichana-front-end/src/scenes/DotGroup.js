import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelecPage }) => {
    const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 
    before:rounded-full before:border-2  before:border-yellow before:left-[-50%] before:top-[-50%]`;

    return (
        <div className="flex flex-col gap-6 fixed top-[60%] right-7">
        <AnchorLink className={ `${selectedPage === "home" ? selectedStyles : "bg-dark-grey"} 
        w-3 h-3 rounded-full`}
        href="#home"
        onClick={() => setSelectedPage('home')}
        />
        <AnchorLink className={ `${selectedPage === "about" ? selectedStyles : "bg-dark-grey"} 
        w-3 h-3 rounded-full`}
        href="#about"
        onClick={() => setSelectedPage('about')}
        />
        <AnchorLink className={ `${selectedPage === "ways to fundraise" ? selectedStyles : "bg-dark-grey"} 
        w-3 h-3 rounded-full`}
        href="#ways to fundraise"
        onClick={() => setSelectedPage('ways to fundraise')}
        />
        <AnchorLink className={ `${selectedPage === "tips & tools" ? selectedStyles : "bg-dark-grey"} 
        w-3 h-3 rounded-full`}
        href="#tips & tools"
        onClick={() => setSelectedPage('tips & tools')}
        />
        </div>
    )

}

export default DotGroup;