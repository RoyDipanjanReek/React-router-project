import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Github(props) {
    const data = useLoaderData()
    return (
        <div  className='flex-wrap flex text-center m-4 bg-gray-600 text-white p-4
        text-3xl'>
            <div className= 'px-20' >
                <img src={data.avatar_url} alt='Github pic' width={300}/>
            </div>
            <div className= 'px-20' width={600} >
                <div>Name : {data.name}</div><br />
                <div>Github Followers: {data.followers}</div><br />
                <div>Public Repository : {" "+data.public_repos}</div>
                
            </div>
        </div>
       
    );
}

export default Github;

export const githubInfoLoader = async() => {
    const responce = await fetch('https://api.github.com/users/RoyDipanjanReek')
    return responce.json()
} 