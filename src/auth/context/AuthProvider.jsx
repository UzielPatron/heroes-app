import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { types } from "../types/types";
import { useLocation } from "react-router-dom";


const initialState = {
    logged: false,
};

const init = () => {
    
    const user = JSON.parse(localStorage.getItem( 'user' ) )

    return {
        logged: !!user,
        user,
    }
}

export const AuthProvider = ({ children }) => {

    const [ authState, dispatch] = useReducer( authReducer, initialState, init );

    const { pathname, search } = useLocation();
    

    const q = pathname + search;
    
    const login = async ( name = '' ) => {  
        const user = { id: 'ABC', name, };
        const action = { type: types.login, payload: user, };

        localStorage.removeItem( 'last-page' );
        localStorage.setItem( 'user', JSON.stringify( user ) );

        dispatch( action );
    };

    const logout = async () => {
        localStorage.removeItem( 'user' );
        localStorage.setItem( 'last-page', JSON.stringify( q ));
        const action = { type: types.logout };

        dispatch( action );
    }


    return (
        <AuthContext.Provider value={{ 
            ...authState,
            login,
            logout
         }}>
            { children }
        </AuthContext.Provider>
  )
}
