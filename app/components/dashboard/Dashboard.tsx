import CardLayout from "../Cards/CardLayout"
import Navbar from "../Navbar"
import DashBody from "./DashBody"
import DashSideBar from "./DashSideBar"

export const metadata = {
  title: 'Dashboard',
}


const Dashboard = () => {
  return (
    <>
      <Navbar/>

      <div className="block">

        <div className="p-3 m-5">

          <h3 className="text-lg font-semibold">All Accounts</h3>
          <DashBody/>
        </div>
        
      </div>
      
    </>
  )
}

export default Dashboard