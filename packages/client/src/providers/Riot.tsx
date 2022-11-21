import {createContext, ReactNode} from 'react';

const key = import.meta.env.RIOT_API_KEY;
const RiotContext = createContext(key);

export const RiotProvider = ({children}: {children: ReactNode}) => {
    return <RiotContext.Provider value={key}>{children}</RiotContext.Provider>;
};
