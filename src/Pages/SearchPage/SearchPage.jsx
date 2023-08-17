import React from 'react';
import { useLocation } from 'react-router-dom';
import TableRow from '../../Conponents/TableRow';

const SearchPage = () => {
    const location = useLocation();
    const searchData = location.state.searchData;
    console.log(searchData)
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