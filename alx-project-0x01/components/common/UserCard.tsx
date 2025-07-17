import React from "react";
import {UserProps} from "@/interfaces"

const UserCard: React.FC<UserProps> = ({
    name,
    email,
    phone,
    website,
    company,
    address
}) => {
    return (
        <div className="border rounded-lg shadow p-4 bg-white hover:shadow-md">
            <h2 className="text-lg font-bold">{name}</h2>
            <p className="text-sm text-gray-600">{email}</p>
            <p className="text-sm">{phone}</p>
            <p className="text-sm italic text-blue-600">{website}</p>
            <div className="mt-2">
                <p className="text-xs text-gray-500">Company: {company.name}</p>
                <p className="text-xs text-gray-500">City: {address.city}</p>
            </div>
        </div>
    )
}


export default UserCard;