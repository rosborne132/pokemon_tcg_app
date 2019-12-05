import React, { createContext } from 'react';
import { useFetchUser } from '../../lib/user';

const initialValues = {
    user: {},
    loading: false,
};

export const UserContext = createContext(initialValues);

const UserContextProvider = ({ children }) => {
    const { user, loading } = useFetchUser();

    const newValues = {
        user,
        loading,
    };

    return (
        <UserContext.Provider value={newValues}>
            { children }
        </UserContext.Provider>
    );
};

export default UserContextProvider;
