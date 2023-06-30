import Image from "next/image"
import { getUser, getCard } from "@/api"
import Navbar from "@/app/components/Navbar"
import { ICard, IContact, IUser } from "@/types/usersdata"

type Params = {
    params:{
        userId: string
    }
}


export default async function UserPage({ params: { userId }}: Params) {

    const userData: Promise<IUser> =  getUser(userId)
    const userCardData: Promise<ICard[]> = getCard(userId)

    const [user, userCard] = await Promise.all([userData, userCardData])


  return (

    <>

    <Navbar/>

      <div className="m-10 p-5 flex justify-center">
              <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={user.profilePicture} alt={user.username}/></figure>
            <div className="card-body">
              <h2 className="card-title">User name: {user.username}</h2>
              <br/>
              <p>Company Id: {user.tenant.id}</p>
              <br/>
              <hr/>
              <p>Email: {user.email}</p>
              <br/>
              <hr/>
              <div className="card-actions justify-end mt-5">
                <button className="btn bg-blue-500 text-white">Edit User</button>
              </div>
            </div>
          </div>
        </div>
    </>

  )
}
