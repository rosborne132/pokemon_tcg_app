import React, { createContext } from 'react'
import { useFetchUser } from '../../lib/user'

type User = {
    name: string
    nickname: string
    picture: string
}

type initialValues = {
    user: User,
    loading: boolean
}

const initialValues = {
    user: {} as User,
    loading: false,
}

export const UserContext = createContext<initialValues>(initialValues)

const UserContextProvider: React.FC = ({ children }) => {
    const { user, loading } = useFetchUser()

    const newValues = {
        user,
        loading,
    }

    return (
        <UserContext.Provider value={newValues}>
            { children }
        </UserContext.Provider>
    )
}

export default UserContextProvider
