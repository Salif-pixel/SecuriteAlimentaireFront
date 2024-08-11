import React, { useEffect, useState } from 'react';
import { To, useLocation, useNavigate } from 'react-router-dom';
import { Group, Divider, Box, Burger, Drawer, ScrollArea, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import logomp4 from "../../assets/logo.mp4";
import logo from "../../assets/logo.png";
import { motion, AnimatePresence } from 'framer-motion'; // Import framer-motion


import classes from './style/HeaderMegaMenu.module.css';


export function Navbar() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [activeLink, setActiveLink] = useState('');
    const [isAnimating, setIsAnimating] = useState(false); // State to control animation
    const navigate = useNavigate();
    const location = useLocation();
    const [initialLoad, setInitialLoad] = useState(true);
    const [transitionColor, setTransitionColor] = useState('');
    type RouteColors = {
        [path: string]: string;
    };
    const routeColors: RouteColors = {
        '/accueil': 'bg-purpleSmart',
        '/': 'bg-purpleSmart',
        '/a-propos': 'bg-purpleSmart',
        '/fonctionnement': 'bg-purpleSmart',
        '/equipe': 'bg-purpleSmart',
        '/contact': 'bg-purpleSmart',
    };
    useEffect(() => {
        switch (location.pathname) {
            case '/accueil':
                setActiveLink('Accueil');
                break;
            case '/':
                setActiveLink('Accueil');
                break;
            case '/a-propos':
                setActiveLink('A propos de Eath');
                break;
            case '/fonctionnement':
                setActiveLink('Fonctionnement');
                break;
            case '/equipe':
                setActiveLink('Equipe');
                break;

            case '/contact':
                setActiveLink('Contactez nous');
                break;
            default:
                setActiveLink('');
        }
        if (initialLoad) {
            setInitialLoad(false); // Mark initial load as complete
        } else {
            setIsAnimating(true);
           closeDrawer();
            setTransitionColor(routeColors[location.pathname] || 'bg-greenSmart');
            const timer = setTimeout(() => {
                setIsAnimating(false);
            }, 500);

            return () => clearTimeout(timer);
        }



    }, [location.pathname]);

    const handleLinkClick = (link: React.SetStateAction<string>, path: To) => {
        setActiveLink(link);
        navigate(path);
    };

    return (
        <Box >
            <header className={`${classes.header} font-gotham font-bold z-50  `}>
                <Group className={`z-[999] `} justify="space-between" h="100%">
                    <img height={`100`} width={`100`} className={` top-0 left-2`} src={logo} alt={``}/>

                    <Group h="100%" gap={0} visibleFrom="sm">
                        <div
                            onClick={() => handleLinkClick('Accueil', '/accueil')}
                            className={`${classes.link} relative cursor-pointer font-gotham font-bold ${activeLink === 'Accueil' ? 'text-greenSmart' : ''}`}
                        >
                            Accueil {activeLink === 'Accueil' && (
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purpleSmart rounded-full"></span>
                        )}
                        </div>
                        <div
                            onClick={() => handleLinkClick('A propos de Eath', '/a-propos')}
                            className={`${classes.link} cursor-pointer relative font-gotham font-bold ${activeLink === 'A propos de Eath' ? 'text-greenSmart' : ''}`}
                        >
                            A propos de Eath {activeLink === 'A propos de Eath' && (
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purpleSmart rounded-full"></span>
                        )}
                        </div>
                        <div
                            onClick={() => handleLinkClick('Fonctionnement', '/fonctionnement')}
                            className={`${classes.link} cursor-pointer relative font-gotham font-bold ${activeLink === 'Fonctionnement' ? 'text-greenSmart' : ''}`}
                        >
                            Fonctionnement {activeLink === 'Fonctionnement' && (
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purpleSmart rounded-full"></span>
                        )}
                        </div>
                        <div
                            onClick={() => handleLinkClick('Equipe', '/equipe')}
                            className={`${classes.link} cursor-pointer relative font-gotham font-bold ${activeLink === 'Equipe' ? 'text-greenSmart' : ''}`}
                        >
                            Equipe {activeLink === 'Equipe' && (
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purpleSmart rounded-full"></span>
                        )}
                        </div>

                        <div
                            onClick={() => handleLinkClick('Contactez nous', '/contact')}
                            className={`${classes.link} cursor-pointer relative font-gotham font-bold ${activeLink === 'Contactez nous' ? 'text-greenSmart' : ''}`}
                        >
                            Contactez nous {activeLink === 'Contactez nous' && (
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purpleSmart rounded-full"></span>
                        )}
                        </div>
                    </Group>

                    <div></div>
                    <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm"/>
                </Group>
            </header>

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}

                padding="md"
                hiddenFrom="sm"
                zIndex={1000}

            >


                <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
                    <Divider my="sm"/>
                    <video
                        className={` w-40  z-[999] top-0`}
                        autoPlay
                        muted
                        loop

                    >
                        <source src={logomp4} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                    <div
                        onClick={() => handleLinkClick('Accueil', '/accueil')}
                        className={`${classes.link} cursor-pointer relative font-gotham font-bold ${activeLink === 'Accueil' ? 'text-greenSmart' : ''}`}
                    >
                        Accueil {activeLink === 'Accueil' && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-greenSmart rounded-full"></span>
                    )}
                    </div>
                    <div
                        onClick={() => handleLinkClick('A propos de Eath', '/a-propos')}
                        className={`${classes.link} cursor-pointer relative font-gotham font-bold ${activeLink === 'A propos de Eath' ? 'text-pinkSmart' : ''}`}
                    >
                        A propos de Eath {activeLink === 'A propos de Eath' && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pinkSmart rounded-full"></span>
                    )}
                    </div>
                    <div
                        onClick={() => handleLinkClick('Fonctionnement', '/fonctionnement')}
                        className={`${classes.link} cursor-pointer relative font-gotham font-bold ${activeLink === 'Fonctionnement' ? 'text-orangeSmart' : ''}`}
                    >
                        Fonctionnement {activeLink === 'Fonctionnement' && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orangeSmart rounded-full"></span>
                    )}
                    </div>
                    <div
                        onClick={() => handleLinkClick('Equipe', '/equipe')}
                        className={`${classes.link} cursor-pointer relative font-gotham font-bold ${activeLink === 'Equipe' ? 'text-purpleSmart' : ''}`}
                    >
                        Equipe {activeLink === 'Equipe' && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purpleSmart rounded-full"></span>
                    )}
                    </div>

                    <div
                        onClick={() => handleLinkClick('Contactez nous', '/contact')}
                        className={`${classes.link} cursor-pointer relative font-gotham font-bold ${activeLink === 'Contactez nous' ? 'text-redSmart' : ''}`}
                    >
                        Contactez nous {activeLink === 'Contactez nous' && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-redSmart rounded-full"></span>
                    )}
                    </div>

                    <Divider my="sm"/>


                </ScrollArea>
            </Drawer>

            {/* Add the animation overlay */}
            <AnimatePresence>
                {isAnimating && (
                    <motion.div
                        className={`fixed top-0 left-0 z-[999] w-full h-full ${transitionColor}`}
                        initial={{opacity: 0, y: '-100%'}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 1, y: '-100%' }}
                        transition={{ duration: 0.5 }}
                        style={{ zIndex: 999999 }}
                    />
                )}
            </AnimatePresence>
        </Box>
    );
}
