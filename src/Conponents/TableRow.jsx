import React from 'react';

const TableRow = () => {
    return (
        <tr>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>

            <td>
                <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                </div>

            </td>
            <td>
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
            </td>
            <th>
                <button className="btn btn-ghost btn-xs">Phone</button>
            </th>
            <th>
                <button className="btn btn-ghost btn-xs">Email</button>
            </th>
        </tr>
    );
};

export default TableRow;