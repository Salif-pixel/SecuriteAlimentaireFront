


import {FloatingNavDemo} from "../../component/Demo/FloatingNavDemo.tsx";


import {LandingPage} from "./Component/LandingPage.tsx";

import {Navbar} from "../../Navbar/Ui/mainNavbar.tsx";
import {Route, Routes, useLocation} from "react-router-dom";
import { Fonctionnement} from "./Component/FaqSimple.tsx";

import {Footer} from "../../Footer/Ui/mainFooter.tsx";
import About from "./Component/About.tsx";
import LoadingBar, {LoadingBarRef} from "react-top-loading-bar";
import {useEffect, useRef, useState} from "react";

import {motion, useAnimation} from "framer-motion";
import { TeamMember} from "./Component/CardsCarousel.tsx";
import {ContactUs} from "./Component/ContactUs.tsx";


function Landing() {


    const loadingBarRef = useRef<LoadingBarRef>(null);
    const [loading, setLoading] = useState(true);
    const [hideLandingPage, setHideLandingPage] = useState(false);
    const location = useLocation();
    const controls = useAnimation();
    useEffect(() => {
        const pathsToHideLandingPage = ['/a-propos', '/fonctionnement', '/contact','/equipe'];
        setHideLandingPage(pathsToHideLandingPage.includes(location.pathname));
    }, [location.pathname]);
    const startLoading = () => {
        if (loadingBarRef.current) {
            loadingBarRef.current.continuousStart();
        }
    };

    const completeLoading = () => {
        if (loadingBarRef.current) {
            loadingBarRef.current.complete();
        }
    };

    // Simulate loading
    useEffect(() => {
        setLoading(true);
        startLoading();
        setTimeout(() => {
            completeLoading();
            setLoading(false);
        }, 5600); // Change this timeout as needed
    }, []);

    useEffect(() => {
        if (hideLandingPage) {
            controls.start({
                opacity: 0,
                transition: { duration: 0.2 }
            }).then(() => {
                controls.start({
                    height: 0,
                    width: 0,
                    scale:0,
                    transition: { duration: 0.2 }
                });
            });
        } else {
            controls.start({

                height: 'auto',
                width: 'auto',
                transition: { duration: 0.2 }
            }).then(() => {
                controls.start({
                    scale: 1,
                    opacity: 1,



                    transition: { duration: 0.2 }
                });
            });
        }
    }, [hideLandingPage, controls]);
    return (
        <div className={`relative bg-white w-screen  overflow-x-hidden`}>
            <FloatingNavDemo/>
            <Navbar/>
            {loading && (
                <div className={`absolute inset-0   z-[999]  bg-white`} id="lottieunivers">
                    <LoadingBar className={`w-screen`} color="#0097D7" ref={loadingBarRef}/>
                </div>
            )}
            <motion.div
                initial={{opacity: 1, height: 'auto', width: 'auto',scale:1}}
                animate={controls}
                transition={{duration: 0.5}}
                style={{overflow: 'hidden'}}
            >
                <LandingPage/>

            </motion.div>

            <Routes>
                <Route path="/" element={<div className={`relative`}></div>}/>
                <Route path="/accueil" element={<div className={`relative`}></div>}/>
                <Route path="/a-propos" element={<About/>}/>
                <Route path="/fonctionnement" element={<Fonctionnement/>}/>
                <Route path="/equipe" element={<TeamMember/>}/>
                <Route path="/contact" element={<ContactUs/>}/>
            </Routes>
            <Footer/>

        </div>
    )
}

export default Landing


