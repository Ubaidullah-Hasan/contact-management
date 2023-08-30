import React, { useEffect, useState } from 'react';
import TableRow from '../../Conponents/TableRow';
import { AiOutlineCloudDownload } from 'react-icons/ai';
import { CSVLink, CSVDownload } from "react-csv";


const ContactList = () => {
    const [contacts, setContacts] = useState([]);

    const headers = [
        { label: "Name", key: "name" },
        { label: "Phone", key: "phone" },
        { label: "Email", key: "email" },
        { label: "Category", key: "category" },
        { label: "Image", key: "image" }
    ];


    useEffect(() => {
        fetch("http://localhost:4000/contacts")
            .then(res => res.json())
            .then(data => {
                setContacts(data);
            })
    }, [])
    // console.log(contacts)
    // xl: mx - 10

    return (
        <div className='overflow-hidden'>

            <div className='my-4 mx-3 md:mx-0 text-end'>
                <CSVLink data={contacts} headers={headers} filename='contacts_data.csv'>
                    <button className='btn btn-accent'>Export <AiOutlineCloudDownload size={22} /></button>
                </CSVLink>
            </div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Group</th>
                            <th>Phone</th>
                            <th>Email</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            contacts?.map(ct => <TableRow
                                key={ct._id}
                                contact={ct}
                            >
                            </TableRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ContactList;