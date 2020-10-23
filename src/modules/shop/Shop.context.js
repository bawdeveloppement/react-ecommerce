import React, {
    createContext,
    useState
} from 'react';

import shopData from './shop.data';

const InitialState = {
    shopData
};

export const ShopContext = createContext(InitialState);

// TODO: Add an article
// TODO: 

export const ShopContextProvider = ({ children }) => {
    const [data, setData] = useState(InitialState.data);

    return <ShopContext.Provider value={{
        data,
        setData
    }}>{children}</ShopContext.Provider>
};

// export default { ShopContext, ShopContextProvider }