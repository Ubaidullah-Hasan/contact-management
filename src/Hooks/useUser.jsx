import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider.jsx/AuthProvider';

const useUser = () => {
    const { user } = useContext(AuthContext);
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:4000/users/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setUserInfo(data);
                })
                .catch(error => {
                    console.error("Error fetching user info:", error);
                });
        }
    }, [user?.email]);

    // console.log(userInfo)


    return { userInfo, user };
};

export default useUser;