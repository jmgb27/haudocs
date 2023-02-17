import React, {useState, useEffect} from 'react'
import Sidebar from '../../components/Sidebar'
import './submit.css'
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
} from "firebase/storage";
import { storage } from "../../firebase";
import { v4 } from "uuid";

function Submission () {
  const [fileUpload, setfileUpload] = useState(null);
  const [fileUrls, setfileUrls] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

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
  const tabs = [
    { label: 'Initial Process', content: 
    <div className='sub-container'>
    <div className='sub-title'>
      <h1 class="text-lg font-bold">Initial Process</h1>
      <hr />
      <br />
      <div className='files'>
        <div className='form'>
          <article className='upload'>
          <label class="block mb-5 text-lg font-medium text-gray-900 dark:text-white" for="file_input">1. Research Proposal</label>
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
          <label class="block mb-5 text-lg font-medium text-gray-900 dark:text-white" for="file_input">2. Informed consent/assent form</label>
            <input
            class='block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
             type="file"
             multiple
             onChange={(event) => {
            setfileUpload(event.target.files[0]);
            }}/>
          </article>
          <article className='upload'>
          <label class="block mb-5 text-lg font-medium text-gray-900 dark:text-white" for="file_input">3. Questionnaire/s/Tools (Quantitative), Interview Guide (Qualitative)</label>
            <input
            class='block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
             type="file"
             multiple
             onChange={(event) => {
            setfileUpload(event.target.files[0]);
            }}/>
          </article>
          <article className='ncip' >
          <label class="block mb-5 text-lg font-medium text-gray-900 dark:text-white" for="file_input">4. NCIP clearance (for studies involving indigenous groups)(if needed)</label>
            <input
            class='block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
             type="file"
             multiple
             onChange={(event) => {
            setfileUpload(event.target.files[0]);
            }}/>
          </article>
          <article className='upload'>
          <label class="block mb-5 text-lg font-medium text-gray-900 dark:text-white" for="file_input">5. Accomplished HAU-IRB Forms</label>
          <h1 className='text-base mb-2'>HAU-IRB FORM 2(B): Registration and Application Form</h1>
            <input
            class='block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
             type="file"
             multiple
             onChange={(event) => {
            setfileUpload(event.target.files[0]);
            }}/>
           <h1 className='text-base mb-2'>HAU-IRB FORM 4.1(A): Protocol Assessment Form</h1>
            <input
            class='block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
             type="file"
             multiple
             onChange={(event) => {
            setfileUpload(event.target.files[0]);
            }}/>
           <h1 className='text-base mb-2'>HAU-IRB FORM 4.1(B): Informed Consent Assessment Form</h1>
            <input
            class='block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
             type="file"
             multiple
             onChange={(event) => {
            setfileUpload(event.target.files[0]);
            }}/>
          </article>
          <article className='upload'>
          <label class="block mb-5 text-lg font-medium text-gray-900 dark:text-white" for="file_input">6. Curriculum Vitae</label>
            <input
            class='block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
             type="file"
             multiple
             onChange={(event) => {
            setfileUpload(event.target.files[0]);
            }}/>
          </article>
          <article className='upload'>
          <label class="block mb-5 text-lg font-medium text-gray-900 dark:text-white" for="file_input">7. Others</label>
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
  </div>},
    { label: 'Continuing Review', content:
    <div className='sub-container'>
    <div className='sub-title'>
      <h1 class="text-lg font-bold">Continuing Review</h1>
      <hr />
      <br />
      <div className='files'>
        <div className='form'>
          <article className='upload'>
          <label class="block mb-5 text-lg font-medium text-gray-900 dark:text-white" for="file_input">1. HAU-IRB 3.1(A): Progress Report Form</label>
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
          <label class="block mb-5 text-lg font-medium text-gray-900 dark:text-white" for="file_input">2. HAU-IRB FORM 3.2(A): Early Termination Report Form</label>
            <input
            class='block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
             type="file"
             multiple
             onChange={(event) => {
            setfileUpload(event.target.files[0]);
            }}/>
          </article>
          <article className='upload'>
          <label class="block mb-5 text-lg font-medium text-gray-900 dark:text-white" for="file_input">3. HAU-IRB FORM 3.3(A): Amendment Review Form</label>
            <input
            class='block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
             type="file"
             multiple
             onChange={(event) => {
            setfileUpload(event.target.files[0]);
            }}/>
          </article>
          <article className='ncip' >
          <label class="block mb-5 text-lg font-medium text-gray-900 dark:text-white" for="file_input">4. HAU-IRB FORM 3.4(A): Protocol Deviation/Violation Report Form</label>
            <input
            class='block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
             type="file"
             multiple
             onChange={(event) => {
            setfileUpload(event.target.files[0]);
            }}/>
          </article>
          <article className='upload'>
          <label class="block mb-5 text-lg font-medium text-gray-900 dark:text-white" for="file_input">5. HAU-IRB FORM 3.5(A): Serious Adverse Event Form</label>
            <input
            class='block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
             type="file"
             multiple
             onChange={(event) => {
            setfileUpload(event.target.files[0]);
            }}/>
          </article>
          <article className='upload'>
          <label class="block mb-5 text-lg font-medium text-gray-900 dark:text-white" for="file_input">6. HAU-IRB FORM 3.5(B): Reportable Negative Events Form</label>
            <input
            class='block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
             type="file"
             multiple
             onChange={(event) => {
            setfileUpload(event.target.files[0]);
            }}/>
          </article>
          <article className='upload'>
          <label class="block mb-5 text-lg font-medium text-gray-900 dark:text-white" for="file_input">7. HAU-IRB FORM 3.6(A): Application for Continuing Review</label>
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
  </div>},
    { label: 'Final Review', content:     <div className='sub-container'>
    <div className='sub-title'>
      <h1 class="text-lg font-bold">Final Review</h1>
      <hr />
      <br />
      <div className='files'>
        <div className='form'>
          <article className='upload'>
          <label class="block mb-5 text-lg font-medium text-gray-900 dark:text-white" for="file_input">1. HAU-IRB 3.7(A): Final Report Form</label>
            <input
            class='block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
            id="multiple_files"
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
  </div>},
  ];

  return (
    <Sidebar>
          <div className='mt-[5rem] '>
      <div className='flex justify-center items-center'>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={activeTab === index ? 'active' : ''}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>{tabs[activeTab].content}</div>
    </div>
    </Sidebar>
  )
}

export default Submission
