import { Anchor, Group, ActionIcon, rem } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';

import classes from './style/FooterCentered.module.css';
import { motion } from 'framer-motion';
import logo from "../../assets/logo.png";

import {clsx} from "clsx";
import {useNavigate} from "react-router-dom";

const links = [
    { link: '/accueil', label: 'Accueil',color:'blueSmart' },
    { link: '/a-propos', label: 'A propos de Eath',color:'pinkSmart' },
    { link: '/fonctionnement', label: 'Fonctionnement',color:'orangeSmart' },
    { link: '/equipe', label: 'Equipe',color:'purpleSmart' },
    { link: '/contact', label: 'contactez nous',color:'redSmart' },
];

export function Footer() {
    const navigate = useNavigate();
    const items = links.map((link) => (
        <Anchor
            className={`hover:text-purpleSmart text-black`}
            c="dimmed"
            key={link.label}
            href={link.link}
            lh={1}
            onClick={(event) =>{ event.preventDefault();navigate(link.link)}}
            size="sm"
        >
            {link.label}
        </Anchor>
    ));

    return (
        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1, }}
                    transition={{type: "spring", stiffness: 100, damping: 25,delay:0.1}} className={`  relative bg-white bottom-0 left-0 right-0 z-[999] border border-t-gray-200`}>
            <div className={classes.inner}>
                <img height={`100`} width={`100`} className={` top-0 left-2`} src={logo} alt={``}/>

                <Group className={`${classes.links} `}>{items}</Group>

                <Group gap="xs" justify="flex-end" wrap="nowrap">
                    <ActionIcon className={`hover:bg-purpleSmart hover:text-white`} size="lg" variant="default"
                                radius="xl">
                        <IconBrandTwitter style={{width: rem(18), height: rem(18)}} stroke={1.5}/>
                    </ActionIcon>
                    <ActionIcon className={`hover:bg-purpleSmart hover:text-white`} size="lg" variant="default"
                                radius="xl">
                        <IconBrandYoutube style={{width: rem(18), height: rem(18)}} stroke={1.5}/>
                    </ActionIcon>
                    <ActionIcon className={`hover:bg-purpleSmart hover:text-white`} size="lg" variant="default"
                                radius="xl">
                        <IconBrandInstagram style={{width: rem(18), height: rem(18)}} stroke={1.5}/>
                    </ActionIcon>
                </Group>
            </div>
        </motion.div>
    );
}