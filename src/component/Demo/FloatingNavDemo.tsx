"use client";

import { FloatingNav } from "../ui/floating-navbar";
import { IconHome, IconMessage, } from "@tabler/icons-react";
export function FloatingNavDemo() {
    const navItems = [
        {
            name: "Accueil",
            link: "/accueil",
            icon: <IconHome className="h-4 w-4 text-neutral-500 " />,
        },

        {
            name: "A propos de Eath",
            link: "/a-propos",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className=" text-neutral-500 h-6 w-6"
                      viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none"
                     strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 20m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>
                    <path d="M10 20h-6"/>
                    <path d="M14 20h6"/>
                    <path
                        d="M12 15l-2 -2h-3a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-3l-2 2z"/>
                    <path d="M9 6h6"/>
                    <path d="M9 9h3"/>
                </svg>
            ),
        },
        {
            name: "Fonctionnement",
            link: "/fonctionnement",
            icon: <svg xmlns="http://www.w3.org/2000/svg"  className=" text-neutral-500 h-6 w-6" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none"
                       strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8l3.5 3.5"/>
            </svg>,
        },
        {
            name: "Equipe",
            link: "/equipe",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className=" text-neutral-500 h-6 w-6" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none"
                       strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/>
                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"/>
            </svg>,
        },


        {
            name: "Contactez nous",
            link: "/contact",
            icon: (
                <IconMessage className="h-4 w-4 text-neutral-500 "/>
            ),
        },
    ];
    return (
        <div className="relative hidden lg:block w-full">
            <FloatingNav navItems={navItems}/>
        </div>
    );
}
