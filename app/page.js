"use client";
import React, { useEffect } from 'react';

import { UserButton, useUser } from '@clerk/nextjs';
import { api } from '@/convex/_generated/api';
import { useMutation } from 'convex/react';

const Page = () => {
    const {user}=useUser();
    const createUser = useMutation(api.user.createUser)

    useEffect(()=>{
        user&&CheckUser();
    },[user])

    const CheckUser=async()=>{
        const result = await createUser({
            email:user?.primaryEmailAddress?.emailAddress,
            imageUrl:user?.imageUrl,
            userName:user?.fullName
        });
        console.log(result);

    }
    return (
        <div>
            <h1>Welcome to the Default Page</h1>
            <p>This is a simple default page.</p>
           
            <UserButton/>
        </div>
    );
};

export default Page;
