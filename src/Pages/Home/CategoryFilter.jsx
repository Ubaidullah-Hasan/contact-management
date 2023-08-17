import React, { useEffect, useState } from 'react';
import TableRow from '../../Conponents/TableRow';

const CategoryFilter = () => {
    const [selectedOption, setSelectedOption] = useState('all');
    const [categories, setCategories] = useState([]);
    const [cateContacts, setCateContacts] = useState([]);
    console.log(selectedOption)

    useEffect(() => {
        fetch("https://contact-management-server-ten.vercel.app/contacts/categories")
            .then(res => res.json())
            .then(data => {
                setCategories(data)
            })

        fetch(`https://contact-management-server-ten.vercel.app/contacts/category/${selectedOption}`)
            .then(res => res.json())
            .then(data => {
                setCateContacts(data)
            })
    }, [selectedOption])
    // console.log(categories)
    console.log(cateContacts)

    const uniqueCategories = categories.filter((category, index, self) =>
        index === self.findIndex(ct => ct.category === category.category)
    );
    // console.log(uniqueCategories);



    return (
        <div>
            <div className='flex items-center justify-between'>
                <h1 className='text-4xl font-extrabold text-white capitalize'>Gorup Contacts</h1>
                <select
                    className="w-1/2 ms-auto block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:border-indigo-300"
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                >
                    <option value="all">All</option>
                    {
                        uniqueCategories.map(cate => <option
                            value={cate?.category}
                            key={cate?._id}
                        >{cate?.category}</option>)
                    }
                </select>
            </div>

            {/* table  */}
            <div className="overflow-x-auto mt-6">
                <table className="table text-back">
                    {/* head */}
                    <thead>
                        <tr className='text-black'>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Group</th>
                            <th>Phone</th>
                            <th>Email</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            cateContacts?.map(ct => <TableRow
                                key={ct._id}
                                contact={ct}
                            >
                            </TableRow>)
                        }
                    </tbody>

                </table>
            </div>
            {/* table end */}

        </div>
    );
};

export default CategoryFilter;