import React, {useState, useEffect} from 'react'
import Adminsidebar from '../Adminsidebar'
import './application.css'
import { Pagination } from 'flowbite-react'

const AdminApplication = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
  
    // Sample data
    const sampleData = [
      { classification: "null", documentname: "HAU-INITIAL-REVIEW", datesent: "03/23/23", action: "done" },
    ];

    useEffect(() => {
        // Load data
        setData(sampleData);
      }, []);
  
    // Handle page change

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
      };
  
    // Calculate number of pages
    const totalPages = Math.ceil(data.length / itemsPerPage);
  
    // Get data for current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentData = data.slice(indexOfFirstItem, indexOfLastItem);
    
  return (
    <Adminsidebar>
    <div className='ml-[15rem]'>
    <h1 className='mt-[5rem] text-center text-2xl font-bold'>Review Status</h1>
    <div class="flex flex-col justify-center items-center overflow-x-auto mt-[2rem]">
    <table class="border-t-0 text-sm text-center text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-white uppercase bg-maroon dark:text-gray-400">
        <tr>
            <th scope="col" class="px-6 py-3 text-sm">
            Classification
            </th>
            <th scope="col" class="px-6 py-3 text-sm">
            Document Name
            </th>
            <th scope="col" class="px-6 py-3 text-sm">
            Date Sent
            </th>
            <th scope="col" class="px-6 py-3 text-sm">
            Action
            </th>
            </tr>
        </thead>
        <tbody>
            {currentData.map((item) => (
            <tr className='text-base' key={item.id}>
              <td>{item.classification}</td>
              <td>{item.documentname}</td>
              <td>{item.datesent}</td>
              <td>{item.action}</td>
            </tr>
          ))}
        </tbody>
          </table>
          <div className='flex justify-center items-center mt-1'>
            <Pagination
              currentPage={currentPage}
              onPageChange={handlePageChange}
              layout="table"
              totalPages={totalPages}
            />
        </div>
    </div>

    </div>
    </Adminsidebar>
  )
}

export default AdminApplication
