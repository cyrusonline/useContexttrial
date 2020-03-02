import React, {useContext} from 'react';
import {UserContext} from '../UserContext'
import {login} from '../utils/login'
export const Index = ()=>{
    const {user,setUser} = useContext(UserContext)
    return (
        <div>
            <h2>Home</h2>
            <pre>{JSON.stringify(user,null,2)}</pre>
            <button onClick={
                async()=>{
                    const user = await login()
                    setUser(user)
                }

                }>login</button>
        </div>
    )
}