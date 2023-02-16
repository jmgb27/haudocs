import React from 'react'
import Adminsidebar from '../Adminsidebar'
import './application.css'

const AdminApplication = () => {
  return (
    <Adminsidebar>
    <div>
    <h1 className='mt-[5rem] text-2xl font-bold'>Review Status</h1>
<div class="flex overflow-x-auto mt-[2rem]">
    <table class="text-sm text-center text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-white uppercase bg-maroon dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3 text-sm">
                    Protocol Number
                </th>
                <th scope="col" class="px-6 py-3 text-sm">
                    Document Name
                </th>
                <th scope="col" class="px-6 py-3 text-sm">
                    Due Date
                </th>
                <th scope="col" class="px-6 py-3 text-sm">
                    Reviewer
                </th>
                <th scope="col" class="px-6 py-3 text-sm">
                    Status
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                    #124567890
                </th>
                <td class="px-6 py-4 text-sm font-semibold">
                    HAU-INITIAL-REVIEW
                </td>
                <td class="px-6 py-4 text-sm font-semibold">
                    03/23/23
                </td>
                <td class="px-6 py-4 text-sm font-semibold">
                    Almond Rosos
                </td>
                <td class="px-6 py-4 text-sm font-semibold">
                    Done
                </td>
            </tr>
        </tbody>
    </table>
</div>

    </div>
    </Adminsidebar>
  )
}

export default AdminApplication
