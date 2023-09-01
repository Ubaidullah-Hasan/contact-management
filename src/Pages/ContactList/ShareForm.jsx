import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useUser from '../../Hooks/useUser';
import { AiOutlineLoading3Quarters, AiOutlineShareAlt } from 'react-icons/ai';

const ShareForm = ({ selectedContacts, setSelectedContacts }) => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState('');
    const [accessType, setAccessType] = useState('read-only');
    const [isSharing, setIsSharing] = useState(false);


    useEffect(() => {
        // Fetch the list of users from your backend (replace with your API endpoint)
        axios.get('http://localhost:4000/users-name-photo')
            .then(response => setUsers(response.data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);
    // console.log(users);



    const handleShare = () => {
        setIsSharing(true);
        // Send selectedContacts, selectedUser, and accessType to your backend for sharing
        // ...
        console.log(selectedContacts, selectedUser, accessType);

        // Simulate a sharing process with a delay
        setTimeout(() => {
            setIsSharing(false);
            setSelectedUser('');
            setAccessType('read-only');
            setSelectedContacts([]); 
            console.log(selectedContacts);
        }, 1500);
    };

    return (
        <div className="flex gap-8 items-center">
            
            {isSharing ? (
                <div className="text-blue-500 font-semibold">Sharing contacts with {selectedUser}...</div>
            ) : (
                <div className="flex items-center gap-8">
                    <select
                        value={selectedUser}
                        onChange={(e) => setSelectedUser(e.target.value)}
                        className="border border-gray-300 rounded-md px-3 py-3 w-full focus:outline-none focus:border-blue-500"
                    >
                        <option value="" disabled>Select a user</option>
                        {users?.map(user => (
                            <option key={user._id} value={user?.userName}>{user?.userName}</option>
                        ))}
                    </select>

                        <div className='flex gap-4  w-full'>
                            <label className="block font-semibold ">Access Type:</label>
                            <select
                                value={accessType}
                                onChange={(e) => setAccessType(e.target.value)}
                                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                            >
                                <option value="read-only">Read-Only</option>
                                <option value="write">Write & Read</option>
                            </select>
                    </div>
                </div>
            )}

            <button
                onClick={handleShare}
                className="bg-blue-500 text-white py-3 px-4 rounded-md font-semibold hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200 disabled:bg-blue-300 "
                disabled={isSharing || selectedContacts.length === 0 || !selectedUser}
            >
                {isSharing ? <AiOutlineLoading3Quarters className='animate-spin' /> : <AiOutlineShareAlt/>}
            </button>

        </div>
    );
};

export default ShareForm;
