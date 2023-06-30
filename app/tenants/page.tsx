import { getAllTenants, getAllUsers } from "@/api"
import AllTenants from "../components/AllTenants/AllTenants"
import AllUsers from "../components/AllUsers/AllUsers"
import Script from 'next/script'

const Tenants = async () => {
  const tenants = await getAllTenants()
  const users = await getAllUsers()
  return (
    <div>

<div className="tabs">

</div>


<div>


<link rel="stylesheet" href="https://unpkg.com/@themesberg/flowbite@1.2.0/dist/flowbite.min.css" />



<div className=" mx-auto">
    
    <div className="border-b border-gray-200 dark:border-gray-700 mb-4">
        <ul className="flex flex-wrap -mb-px" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
            <li className="mr-2" role="presentation">
                <button className="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                  Companies
                </button>
            </li>
            <li className="mr-2" role="presentation">
                <button className="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300 active" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="true">
                  Users
                </button>
            </li>
            <li className="mr-2" role="presentation">
                <button className="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300" id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">
                  Activity
                </button>
            </li>
            <li role="presentation">
                <button className="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300" id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">
                  Settings
                </button>
            </li>
        </ul>
    </div>
    <div id="myTabContent">
        <div className="bg-gray-50 p-4 rounded-lg dark:bg-gray-800 hidden" id="profile" role="tabpanel" aria-labelledby="profile-tab">
        <div>
         <AllTenants tenants={tenants}/>
      </div>
      
        </div>
        <div className="bg-gray-50 p-4 rounded-lg dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
        <div className="p-3 m-3 border">
        <h3 className="text-2xl font-semibold">
          Users
        </h3>
        <AllUsers users={users}/>
      </div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg dark:bg-gray-800 hidden" id="settings" role="tabpanel" aria-labelledby="settings-tab">
            <p className="text-gray-500 dark:text-gray-400 text-sm">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Settings tab associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg dark:bg-gray-800 hidden" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
            <p className="text-gray-500 dark:text-gray-400 text-sm">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Contacts tabs associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
        </div>
    </div>

</div>

<Script src="https://unpkg.com/@themesberg/flowbite@1.2.0/dist/flowbite.bundle.js"></Script>

</div>

      

    </div>
  )
}

export default Tenants