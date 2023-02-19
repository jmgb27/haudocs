import React from 'react'
import Adminsidebar from '../Adminsidebar'
import AdminTabs from './AdminTabs'
import './transfer.css'
import {Card} from "flowbite-react"
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const AdminTransfer = () => {
  const [state, setState] = React.useState({
    Almond: true,
    Myra: false,
    Steph: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { almond, myra, steph } = state;
  const tabs = [
    {
      title: 'Applicants',
      content: 
        <Card className='trans absolute'>
        <div className='flex items-start justify-start mt-5 space-x-2'>
        <h1 className='text-white ml-4'>Enter your protocol number:</h1><input></input>
        </div>
        <input class="ml-4 mt-5 block text-sm text-white cursor-pointer dark:text-gray-400 focus:outline-none dark:placeholder-gray-400" id="multiple_files" type="file" multiple />
        <div className='flex items-center justify-start mt-5 space-x-2'>
        <h1 className='text-white ml-4 mr-[6rem]'>Type of review:</h1>
        <select id="review" class="bg-gray-50 w-half border border-gray-300 text-gray-900 text-sm focus:ring-maroon focus:border-maroon p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-maroon dark:focus:border-maroon">
        <option selected>Choose type of review</option>
        <option value="SC">Scientist</option>
        <option value="NS">Non-Scientist</option>
        </select>
        </div>
        <div className='flex items-center mt-5 space-x-2'>
        <h1 className='text-white ml-4 mr-[9rem]'>Send to: </h1>
        <input/>
        </div>
        <form>
        <h1 className='text-white ml-4 mt-[2rem] mr-[6rem]'>Comments:</h1>
        <div class="w-half mb-2 mr-2 ml-[9rem] mt-7 border border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
        <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
        <label for="comment" class="sr-only">Your comment</label>
        <textarea id="comment" rows="4" class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a comment..." required></textarea>
        </div>
        <div class="flex space-x-4 items-center justify-end px-3 py-2 border-t dark:border-gray-600">
        <button type="submit" class="inline-flex items-center py-2.5 px-[3rem] text-xs font-medium text-center text-white bg-maroon hover:bg-red-800 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900">
        Send
        </button>
        </div>
        </div>
        </form>
      </Card>
    },
    {
      title: 'Reviewer',
      content:
      <div className='review'>
      <Card className='trans absolute'>
      <div className='flex items-center mt-2 space-x-2'>
      <h1 className='text-white ml-[1.3rem]'>Enter your protocol number:</h1><input></input>
      <div class="flex items-center border-gray-200 rounded dark:border-gray-700">
      <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 ml-[8rem] text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
      <label for="bordered-checkbox-1" class="w-full py-4 ml-2 text-sm font-medium text-white dark:text-gray-300">HAU</label>
      </div>
      <div class="flex items-center border-gray-200 rounded dark:border-gray-700">
      <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 ml-[5rem] text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
      <label for="bordered-checkbox-1" class="w-full py-4 ml-2 text-sm font-medium text-white dark:text-gray-300">Others</label>
      </div>
      </div>
      <input class="ml-[1.3rem] mt-5 block text-sm text-white cursor-pointer dark:text-gray-400 focus:outline-none dark:placeholder-gray-400" id="multiple_files" type="file" multiple />
      <div className='flex items-center justify-start mt-5 space-x-2'>
      <h1 className='text-white ml-[1.3rem] mr-[6rem]'>Type of review:</h1>
      <select id="review" class="bg-gray-50 w-half border border-gray-300 text-gray-900 text-sm focus:ring-maroon focus:border-maroon p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-maroon dark:focus:border-maroon">
      <option selected>Choose type of review</option>
      <option value="SC">Scientist</option>
      <option value="NS">Non-Scientist</option>
      </select>
      </div>
      <div className='text-white '>
      <Box sx={{ display: 'flex' }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend"><div className='text-white'>Assign to:</div></FormLabel>
        <FormGroup className='ml-[12.8rem]'>
          <FormControlLabel className='outline-white'
            control={
              <Checkbox checked={almond} onChange={handleChange} name="almond" />
            }
            label="Almond Rosos"
          />
          <FormControlLabel
            control={
              <Checkbox checked={myra} onChange={handleChange} name="myra" />
            }
            label="Myra Cuyagbo"
          />
          <FormControlLabel
            control={
              <Checkbox checked={steph} onChange={handleChange} name="steph" />
            }
            label="Stephanie David"
          />
        </FormGroup>
      </FormControl>      
    </Box>
    <form>
        <h1 className='text-white ml-4 mr-[6rem]'>Comments:</h1>
        <div class="w-half mb-2 mr-2 ml-[9rem] border border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
        <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
        <label for="comment" class="sr-only">Your comment</label>
        <textarea id="comment" rows="4" class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a comment..." required></textarea>
        </div>
        <div class="flex space-x-4 items-center justify-end px-3 py-2 border-t dark:border-gray-600">
        <button type="submit" class="inline-flex items-center py-2.5 px-[3rem] text-xs font-medium text-center text-white bg-maroon hover:bg-red-800 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900">
        Assign
        </button>
        </div>
        </div>
        </form>
    </div>
    </Card>
    </div>
    },
  ];
  return (
    <Adminsidebar>
    <div className="flex ml-[15rem] mt-[4rem]">
      <AdminTabs tabs={tabs} defaultActiveTab={0} />
    </div>
    </Adminsidebar>
  )
}

export default AdminTransfer
