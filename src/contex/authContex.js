import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
    const [token, setToken] = useState("");
    const [name, setName] = useState('');
    const [list, SetList] = useState();
    return (
        <AuthContext.Provider
            value={{
                token,setToken,
                name,setName,
                list, SetList
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
