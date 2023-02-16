import React, {useState, useEffect} from 'react'
import Sidebar from '../../components/Sidebar';
import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
  } from "firebase/storage";
  import { storage } from "../../firebase";
  import { v4 } from "uuid";

const ReSubmission = () => {
    const [fileUpload, setfileUpload] = useState(null);
    const [fileUrls, setfileUrls] = useState([]);
  
    const filesListRef = ref(storage, "HAU-IRB-INITIAL-REVIEW/");
    const uploadFile = () => {
      if (fileUpload == null) return;
      const imageRef = ref(storage, `HAU-IRB-INITIAL-REVIEW/${fileUpload.name + v4()}`);
      uploadBytes(imageRef, fileUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setfileUrls((prev) => [...prev, url]);
        });
      });
    };
  
    useEffect(() => {
      listAll(filesListRef).then((response) => {
        response.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            setfileUrls((prev) => [...prev, url]);
          });
        });
      });
    }, []);
  return (
    <Sidebar>
      <div className='sub-container'>
        <div className='sub-title'>
          <h1 class="text-lg font-bold">Initial Process</h1>
          <hr />
          <br />
          <div className='files'>
            <div className='form'>
              <article className='upload'>
              <label class="block mb-5 text-lg font-medium text-gray-900 dark:text-white" for="file_input">1. Revised Manuscript</label>
                <input
                class='block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
                id="multiple_files"
                 type="file"
                 multiple
                 onChange={(event) => {
                setfileUpload(event.target.files[0]);
                }}/>
              </article>
              <article className='upload'>
                <label class="block mb-5 text-lg font-medium text-gray-900 dark:text-white" for="file_input">2. Accomplished HAU-IRB Forms</label>
                <h1 className='text-base mb-2'>HAU-IRB FORM 2(B): Registration and Application Form</h1>
                <input
                class='block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
                 type="file"
                 multiple
                 onChange={(event) => {
                setfileUpload(event.target.files[0]);
                }}/>
                <h1 className='text-base mb-2'>HAU-IRB FORM 3.3(A): Amendment Review Form</h1>
                <input
                class='block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
                 type="file"
                 multiple
                 onChange={(event) => {
                setfileUpload(event.target.files[0]);
                }}/>
              </article>
              <form>
              <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
              <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
              <label for="comment" class="sr-only">Your comment</label>
              <textarea id="comment" rows="4" class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a comment..." required></textarea>
              </div>
              <div class="flex space-x-4 items-center justify-end px-3 py-2 border-t dark:border-gray-600">
              <button onClick={uploadFile} type="submit" class="inline-flex items-center py-2.5 px-[3rem] text-xs font-medium text-center text-white bg-maroon hover:bg-red-800 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900">
               Submit
              </button>
              </div>
              </div>
              </form>
            </div>
           
          </div>
        </div>
      </div>
    </Sidebar>
  )
}

export default ReSubmission
