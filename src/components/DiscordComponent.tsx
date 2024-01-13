import React, { createContext } from 'react';
import {
    DiscordDefaultOptions,
    DiscordOptionsContext,
    DiscordMessageOptions,
    DiscordMessages,
} from 'pycord/discord-message-components/packages/react'

export const defaultOptions: DiscordMessageOptions = {
    ...DiscordDefaultOptions,
    profiles: {
        jonfirexbox: {
            author: 'Jonfirexbox',
            avatar: '/img/jon.png',
        },
        corruptbump: {
            author: 'Corrupt Bump',
            avatar: '/img/logo.png',
            roleColor: '#7FD858',
            bot: true,
            verified: false,
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
