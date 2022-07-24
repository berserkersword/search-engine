import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Spinner from '../../components/Spinner/Spinner';

const Data = ({ querry }) => {
    console.log(querry);
    return (
        <div className='w-full bg-[#e2eff8]'>
            <Navbar />
            <div className='grid lg:grid-cols-3 sm:grid-col-1 gap-4 p-4'>
                {querry.results ?
                    querry.results.map(item => {
                        return (
                            <a href={item.link} key={item.link} className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 overflow-hidden">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
                            </a>
                        )
                    })
                    : <Spinner />
                }
            </div>
        </div>
    )
}

export default Data