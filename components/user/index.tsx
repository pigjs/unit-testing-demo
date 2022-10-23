import React, { useState,useEffect } from 'react'

export interface UserProps {
    id:string
}

interface UserState {
    name:string,
    age:string,
    address:string
}

const Index:React.FC<UserProps> = (props)=>{
    const [user,setUser] = useState<UserState | null>(null)

    async function fetchUserData(id) {
        const response = await fetch("/" + id);
        setUser(await response.json());
    }

    useEffect(() => {
        fetchUserData(props.id);
      }, [props.id]);
    
    if (!user) {
    return <div>加载中...</div>
    }
    
    return (
        <div>
          <summary>{user.name}</summary>
          <strong>{user.age}</strong> 岁
          <br />
          住址 {user.address}
        </div>
    );
}

export default Index