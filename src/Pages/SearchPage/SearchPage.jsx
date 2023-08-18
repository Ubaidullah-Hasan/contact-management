import React from 'react';
import { useLocation } from 'react-router-dom';
import TableRow from '../../Conponents/TableRow';

const SearchPage = () => {
    const location = useLocation();
    const searchData = location?.state?.searchData;
    const searchText = location.search.split('=')[1];
    // console.log(searchText)


    return (
        <div className=''>
            <h1 className='uppercase my-5 text-center text-2xl font-bold'>search result of : {searchText}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className='bg-gray-800 text-white '>
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
                            searchData?.map(ct => <TableRow
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

export default SearchPage;