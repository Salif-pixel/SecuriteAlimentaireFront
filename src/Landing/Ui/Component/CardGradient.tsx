import { Paper, Text, ThemeIcon, rem } from '@mantine/core';
import {
    IconAccessible,
    IconAlertTriangle, IconCarrot,
    IconColorSwatch,
    IconDevices,
    IconEye,
    IconFlag, IconFlask, IconHeart,
    IconHistory, IconPyramid,
    IconTrophy, IconUsers,

} from '@tabler/icons-react';

import classes from '../style/Cardgradient.module.css';
interface IconMapping {
    "Mission": JSX.Element;
    "Vision": JSX.Element;
    "Valeurs": JSX.Element;
    "Origine": JSX.Element;
    "Technologie": JSX.Element;
    "Analyse Précise des Ingrédients": JSX.Element;
    "Conformité Halal": JSX.Element;
    "Détection des Allergènes": JSX.Element;
    "Substances Nocives et Nutrition": JSX.Element;
    "Apport Nutritionnel": JSX.Element;
    "Inclusion Sociale": JSX.Element;
    "Nos cibles": JSX.Element;
}
const iconMapping:IconMapping = {
    "Mission": <IconFlag style={{ width: rem(28), height: rem(28) }} stroke={1.5} />,
    "Vision": <IconEye style={{ width: rem(28), height: rem(28) }} stroke={1.5} />,
    "Valeurs": <IconHeart style={{ width: rem(28), height: rem(28) }} stroke={1.5} />,
    "Origine": <IconHistory style={{ width: rem(28), height: rem(28) }} stroke={1.5} />,
    "Technologie": <IconDevices style={{ width: rem(28), height: rem(28) }} stroke={1.5} />,
    "Analyse Précise des Ingrédients": <IconFlask style={{ width: rem(28), height: rem(28) }} stroke={1.5} />,
    "Conformité Halal": <IconTrophy style={{ width: rem(28), height: rem(28) }} stroke={1.5} />,
    "Détection des Allergènes": <IconPyramid style={{ width: rem(28), height: rem(28) }} stroke={1.5} />,
    "Substances Nocives et Nutrition": <IconAlertTriangle style={{ width: rem(28), height: rem(28) }} stroke={1.5} />,
    "Apport Nutritionnel": <IconCarrot style={{ width: rem(28), height: rem(28) }} stroke={1.5} />,
    "Inclusion Sociale": <IconAccessible style={{ width: rem(28), height: rem(28) }} stroke={1.5} />,
    "Nos cibles": <IconUsers style={{ width: rem(28), height: rem(28) }} stroke={1.5} />
};
export function CardGradient({title,text}: {title:string,text:string}) {
    const icon = iconMapping[title as keyof IconMapping]  || <IconColorSwatch style={{ width: rem(28), height: rem(28) }} stroke={1.5} />;
    return (
        <Paper withBorder radius="md" className={classes.card}>
            <ThemeIcon
                size="xl"
                radius="md"
                variant="gradient"
                gradient={{ deg: 0, from: '#7DC242', to: '#7DC242' }}
            >

                {icon}
            </ThemeIcon>
            <Text size="xl" fw={500} mt="md">
                {title}
            </Text>
            <Text size="sm" mt="sm" c="dimmed">
                {text}
            </Text>
        </Paper>
    );
}