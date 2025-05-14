import { createContext, useState } from "react";

export const CoinContext = createContext();

const CoinContextProvider = (props) => {

    const [allCoin, setAllCoin] = useState([]);
    const [currency, setCurrency] = useState({
        name: "USD",
        symbol: "$",
        rate: 1,
    });

    const contextValue = {

    }
    return (
        <CoinContext.Provider value={{contextValue}}>
        {props.children}
        </CoinContext.Provider>
    );
}

export default CoinContextProvider;