import { Paper, Text, ThemeIcon, rem } from '@mantine/core';
import { IconColorSwatch } from '@tabler/icons-react';

import classes from '../style/Cardgradient.module.css';

export function CardGradient({title,text}: {title:string,text:string}) {
    return (
        <Paper withBorder radius="md" className={classes.card}>
            <ThemeIcon
                size="xl"
                radius="md"
                variant="gradient"
                gradient={{ deg: 0, from: 'pink', to: 'blue' }}
            >
                <IconColorSwatch style={{ width: rem(28), height: rem(28) }} stroke={1.5} />
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