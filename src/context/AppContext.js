import { createContext, useEffect, useReducer} from "react";
import CartReducer from "../cartReducer";




export const AppContext = createContext();

const AppContextProvider = ({children, initialCart=[]}) =>{
   
    const [cart, dispatch] = useReducer(CartReducer,initialCart);
    console.log('cart', cart)
    useEffect(()=>localStorage.setItem('cart', JSON.stringify(cart)), [cart]);


    return(
        <AppContext.Provider value={{cart, dispatch}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;