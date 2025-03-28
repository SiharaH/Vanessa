import { createContext, useState, useEffect } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = 'LKR';
    const deliveryFee = 350;
    const [search,setSearch] = useState('');
    const [showSearch, setshowSearch] = useState(true);

    const value = {
        products , currency, deliveryFee,
        search, setSearch, showSearch, setshowSearch

    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider
