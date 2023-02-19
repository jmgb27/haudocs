import React, { useState, useEffect } from 'react'
import Adminsidebar from '../Adminsidebar'
import Tabs from './Tabs'
import {IoMdDownload} from "react-icons/io"
import "./tabs.css"
import { Pagination } from 'flowbite-react'

const Adminsubmissions = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
  
    // Sample data
    const sampleData = [
      { classification: "null", documentname: "HAU-INITIAL-REVIEW", datesent: "03/23/23" },
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

    
  const tabs = [
    {
      title: 'Applicants',
      content: 
      <div class="w-tabs flex-col absolute flex justify-start items-start">
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
              <td><a className='justify-center flex items-center' href=''><IoMdDownload/>Download</a></td>
            </tr>
          ))}
        </tbody>
          </table>
          <div className='flex justify-start items-center mt-1'>
            <Pagination
              currentPage={currentPage}
              onPageChange={handlePageChange}
              layout="table"
              totalPages={totalPages}
            />
        </div>
      </div>,

    },
    {
      title: 'Reviewer',
      content:
      <div class="w-tabs absolute flex-col flex justify-start items-start">
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
              <td><a className='justify-center flex items-center' href=''><IoMdDownload/>Download</a></td>
            </tr>
          ))}
        </tbody>
          </table>
          <div className='mt-1'>
            <Pagination
              currentPage={currentPage}
              onPageChange={handlePageChange}
              layout="table"
              totalPages={totalPages}
            />
        </div>
      </div>,
    },
  ];
  return (
    <Adminsidebar>
    <div className="flex justify-start items-start ml-[15rem] flex-col mx-auto mt-[5rem]">
      <Tabs tabs={tabs} defaultActiveTab={0} />
    </div>
  </Adminsidebar>
  )
}

export default Adminsubmissions
