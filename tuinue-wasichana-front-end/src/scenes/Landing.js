import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from '../components/SocialMediaIcons';


const Landing = ({setSelectedPage}) => {
    const isAboveMediaumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <section id="home" className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10">

        {/* image section */}
        <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
            {isAboveMediaumScreens ? (
                <div> 
                    <img 
                    alt="profile"
                    className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full
                    max-w-[400px] md:max-w-[600px]"
                    src="assets/profile.png"
                    />
                </div>
            ) : (
                <img 
                    alt="profile"
                    className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full
                    max-w-[400px] md:max-w-[600px]"
                    src="assets/profile.png"
                    />

            )}
            </div>
            {/* main section */}
            <div className="z-30 basis-2/5 mt-12 md:mt-32">

                {/* headings motion section */}
                <motion.div
                initial = "hidden"
                whileInView = "visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{duration: 0.5}}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                }}
                >
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            UNLEASH {""}
            <span
              className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush
              before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
            >
              POTENTIAL!
            </span>
          </p>

          <p className="mt-10 mb-7 text-sm text-center md:text-start">
            Providing more than just pads, we're delivering clean water & sanitation. Empowering girls for a brighter future in school & beyond!
          </p>
            </motion.div>

            {/*calls to action */}
            <motion.div
            className="flex, mt-5 justify-center md:justify-start"
             initial = "hidden"
             whileInView = "visible"
             viewport={{ once: true, amount: 0.5 }}
             transition={{delay: 0.2, duration: 0.5}}
             variants={{
             hidden: { opacity: 0, x: -50 },
             visible: { opacity: 1, x: 0 }
            }}
            >
                <AnchorLink
                className="bg-dark-grey text-deep-blue rounded-sm py-3 px-4 font-semibold
                hover:text-black transition duration-500"
                onClick={() => setSelectedPage("ways to fundraise")}
                href="#ways to fundraise"
                >
                Fundraise
                </AnchorLink>

            </motion.div>

            <motion.div
            className="flex, mt-5 justify-center md:justify-start"
            initial = "hidden"
            whileInView = "visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{delay: 0.4, duration: 0.5}}
            variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
           }}
            >
                <SocialMediaIcons />
            </motion.div>
            </div>
        </section>
    );
};

export default Landing;