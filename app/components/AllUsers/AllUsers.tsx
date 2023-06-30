import { IUser } from "@/types/usersdata"
import Link from "next/link"

interface UserProps{
    users:IUser[]
}
const AllUsers:React.FC<UserProps> = ({ users }) => {
  return (
    <div>


<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
        </th>
        <th>Profile image</th>
        <th>Name</th>
        <th>Company</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {users.map (user => (
                  <tr key={user.id}>
                  <th>
          
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                      
                        <div className="w-16 shadow-md rounded-full">
                          <Link href={`/tenants/user/${user.id}`}>
                            <img src={user.profilePicture} alt={user.username} />  
                          </Link>
                        </div>
                      
                      </div>
                      <div>
                      </div>
                    </div>
                  </td>
                  <td>
                  <Link href={`/tenants/user/${user.id}`}>
                  <div className="font-bold">{user.username}</div>
                  </Link>
                    <br/>
                    <span className="badge badge-ghost badge-sm">Email: {user.email}</span>
                  </td>
                  <td>{user.tenant.id}</td>

                  
                  <th>
                    <Link href={`/tenants/user/${user.id}`}>
                        <button className="btn btn-ghost btn-xs bg-green-400 text-white">View</button>
                    </Link>
                    
                  </th>
                </tr>
        ))}


    </tbody>
   
  </table>
</div>
        

    </div>
  )
}

export default AllUsers