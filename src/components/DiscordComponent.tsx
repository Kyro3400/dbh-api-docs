import React, { createContext } from 'react';
import {
    DiscordDefaultOptions,
    DiscordOptionsContext,
    DiscordMessageOptions,
    DiscordMessages,
} from '@pycord/discord-message-components-react'

export const defaultOptions: DiscordMessageOptions = {
    ...DiscordDefaultOptions,
    profiles: {
        jonfirexbox: {
            author: 'Jonfirexbox',
            avatar: 'https://cdn.discordapp.com/avatars/856176853719187506/b8c835a2c8598bd98b72653c0fe21dad.png?size=1024',
        },
        willy: {
            author: 'Willy',
            avatar: 'https://cdn.discordapp.com/avatars/853158265466257448/35eb8b32381055e896a6a2c6368065dd.png?size=1024',
            roleColor: '#0390F3',
        },
    },
};

interface DiscordComponentProps {
    options?: DiscordMessageOptions
}

const DiscordComponent: React.FC<DiscordComponentProps> = ({options = defaultOptions, children }) => {
    return (
        <DiscordOptionsContext.Provider value={options}>
            <DiscordMessages>
                {children}
            </DiscordMessages>
        </DiscordOptionsContext.Provider>
    );
};

export default DiscordComponent;
