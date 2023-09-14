import React, { createContext, useContext, useEffect, useState } from 'react';

// Step 1: Create a UserContext
const UserContext = createContext();

export function useUser() {
    return useContext(UserContext);
}

export function UserProvider({ children }) {
    // Step 2: Check if the user is signed in by checking local storage
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const contextValue = {
        user,
        setUser,
    };

    return (
        // Step 3: Provide the UserContext to the components
        <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
    );
}
