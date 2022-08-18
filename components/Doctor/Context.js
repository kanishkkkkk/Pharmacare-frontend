import React from "react";
import { useContext, useReducer, createContext, useEffect, useState} from "react";
import { cartReducer } from "./Reducer";
import axios from "axios";
import baseUrl from "../../api's/base_url";

const Cart=createContext();
const Context=({children})=>{
    
    const [drugs, setDrugs] = useState({});
    const getOrdersFromApi = () => {
        axios.get(baseUrl + "/drug").then(
            (response) => {
                setDrugs(response.data);
                console.log(response.data);
            },
            (error) => {
                console.log("error");
                setDrugs({});
            }
        );
    };
    useEffect(() => {
        document.title = "Drugs";
        getOrdersFromApi();
    }, []); 
                                                                
      
    const[ state, dispatch] = useReducer(cartReducer,{
        drugs:drugs,
        cart:[]
    });
    return <Cart.Provider value={{state, dispatch}}>{children}</Cart.Provider>

};
export const CartState=()=>{
    return useContext(Cart);
};
export default Context;