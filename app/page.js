"use client";
import React from 'react';
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

const Page = ({ children }) => {
    return (
        <div>
            <h1>Welcome to the Default Page</h1>
            <p>This is a simple default page.</p>
            {/* Render children if they exist */}
            {children && <div>{children}</div>}
        </div>
    );
};

export default Page;
