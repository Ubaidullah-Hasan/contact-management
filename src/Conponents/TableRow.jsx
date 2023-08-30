import React from 'react';

const TableRow = ({ contact }) => {
    const { phone, _id, name, email, image, category } = contact;
    
    return (
        <tr>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={image} alt="photo" />
                    </div>
                </div>
            </td>

            <td>
                <div>
                    <div className="font-bold capitalize">{name}</div>
                </div>

            </td>
            <td>
                <span className="badge badge-ghost badge-sm uppercase">{category}</span>
            </td>
            <td>
                <button className="">{phone}</button>
            </td>
            <td>
                <button className="">{email}</button>
            </td>
        </tr>
    );
};

export default TableRow;