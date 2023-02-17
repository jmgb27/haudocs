import React from 'react'
import Adminsidebar from '../Adminsidebar'
import Tabs from './Tabs'
import {IoMdDownload} from "react-icons/io"
import "./tabs.css"

const Adminsubmissions = () => {
  const tabs = [
    {
      title: 'Applicants',
      content: 
      <div class="w-tabs absolute">
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
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 text-gray-900 text-base whitespace-nowrap dark:text-white">
                          #124567890
                      </th>
                      <td class="px-6 py-4 text-sm font-semibold">
                          HAU-INITIAL-REVIEW
                      </td>
                      <td class="px-6 py-4 text-sm font-semibold">
                          03/23/23
                      </td>
                      <td class="px-6 py-4 text-sm font-semibold">
                          <a className='flex justify-center items-center' href=''><IoMdDownload/>Download</a>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>,
    },
    {
      title: 'Reviewer',
      content:
      <div class="w-tabs absolute">
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
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 text-gray-900 text-base whitespace-nowrap dark:text-white">
                      #124567890
                  </th>
                  <td class="px-6 py-4 text-sm font-semibold">
                      HAU-CONTINUING-REVIEW
                  </td>
                  <td class="px-6 py-4 text-sm font-semibold">
                      03/23/23
                  </td>
                  <td class="px-6 py-4 text-sm font-semibold">
                      <a className='justify-center flex items-center' href=''><IoMdDownload/>Download</a>
                  </td>
              </tr>
          </tbody>
      </table>
  </div>,
    },
  ];
  return (
    <Adminsidebar>
    <div className="container mx-auto mt-[5rem]">
      <Tabs tabs={tabs} defaultActiveTab={0} />
    </div>
  </Adminsidebar>
  )
}

export default Adminsubmissions
