import React from 'react';

const ContactList = () => {
    return (
        <div className='mx-10'>
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
                       
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ContactList;