import React, { useEffect, useState } from 'react';
import CategoryFilter from './CategoryFilter';
import "./home.css"

const Home = () => {
    const [saveContact, setSaveContact] = useState(0);
    const [users, setUsers] = useState(0); // todo
    let totalUsers = parseInt(saveContact);

    useEffect(() => {
        fetch("https://contact-management-server-ten.vercel.app/contacts/count")
            .then(res => res.json())
            .then(data => {
                setSaveContact(data.totalCount)
            })
    }, [])
    // console.log(totalUsers)


    return (
        <div className='lg:my-10'>
            <div className="lg:stats shadow-lg border-t border-gray-100 w-full grid sm:grid-cols-2 gap-3">

                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title capitalize">Contacts download</div>
                    <div className="stat-value text-primary">25.6K</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title">Save Contacts</div>
                    <div className="stat-value text-secondary">{totalUsers.toString().padStart(2, '0')}</div>
                    <div className="stat-desc">Only register users</div>
                </div>

                <div className="stat hidden lg:block">
                    <div className="stat-figure text-secondary">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className="stat-title">Total Users</div>
                    <div className="stat-value">{0 || users}</div>
                    <div className="stat-desc text-secondary">31 tasks remaining</div>
                </div>

            </div>

            <div className=' pt-6 px-5  lg:p-7 mt-4 lg:mt-14 bg-grd shadow-lg rounded-lg overflow-scroll lg:h-[350px]'>
                <CategoryFilter></CategoryFilter>
            </div>
        </div>
    );
};

export default Home;