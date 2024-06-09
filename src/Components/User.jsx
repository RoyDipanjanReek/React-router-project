import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
    const {userId} = useParams()
    return (
        <div>
            <h1>Hitest Choudhury: {userId}</h1>
        </div>
    );
}

export default User;