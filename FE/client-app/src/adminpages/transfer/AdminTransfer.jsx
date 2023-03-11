import React from "react";
import Adminsidebar from "../Adminsidebar";
import AdminTabs from "./AdminTabs";
import "./transfer.css";
import { Card } from "flowbite-react";

function AdminTransfer() {
  return (
    <Adminsidebar>
      <Card className="trans">
        <input
          class="ml-4 mt-5 block text-sm text-white cursor-pointer dark:text-gray-400 focus:outline-none dark:placeholder-gray-400"
          id="multiple_files"
          type="file"
          multiple
        />
        <div className="flex items-center justify-start mt-5 space-x-2">
          <h1 className="text-white ml-4 mr-[6rem]">Type of review:</h1>
          <select
            id="review"
            class="bg-gray-50 w-half border border-gray-300 text-gray-900 text-sm focus:ring-maroon focus:border-maroon p-1 pl-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-maroon dark:focus:border-maroon"
          >
            <option selected>Choose type of review</option>
            <option value="SC">Exempt from review</option>
            <option value="NS">Full board review</option>
            <option value="NS">expedited review</option>
          </select>
        </div>
        <div className="flex items-center mt-5 space-x-2">
          <h1 className="text-white ml-4 mr-[9rem]">Send to: </h1>
          <input />
        </div>
        <form>
          <h1 className="text-white ml-4 mt-[2rem] mr-[6rem]">Comments:</h1>
          <div class="w-half mb-2 mr-2 ml-[9rem] mt-7 border border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
              <label for="comment" class="sr-only">
                Your comment
              </label>
              <textarea
                id="comment"
                rows="4"
                class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                placeholder="Write a comment..."
                required
              ></textarea>
            </div>
            <div class="flex space-x-4 items-center justify-end px-3 py-2 border-t dark:border-gray-600">
              <button
                type="submit"
                class="inline-flex items-center py-2.5 px-[3rem] text-xs font-medium text-center text-white bg-maroon hover:bg-red-800 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </Card>
    </Adminsidebar>
  );
}

export default AdminTransfer;
