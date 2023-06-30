import Link from 'next/link'
import { ITenant } from "@/types/usersdata"

interface TenantProps{
    tenants:ITenant[]
}


const AllTenants:React.FC<TenantProps> = ({ tenants }) => {
  return (
    <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>

                </th>
                <th>Company</th>
                <th>Contact Person</th>
                <th>Plan</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row */}
              
              
                    {tenants.map(tenant => ( 

                  <tr key={tenant.id}>
                  <th>

                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        
                        <div className="w-16 shadow-md rounded-full">
                                        
                          <img src={tenant.companyLogo} alt= {tenant.companyName}/>
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{tenant.companyName}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    
                    <Link href="">
                      {tenant.contactPerson}
                    </Link>
                    
                    <br/>
                    <span className="badge badge-ghost badge-sm">Created at: {tenant.createdAt}</span>
                  </td>
                  <td>{tenant.plan}</td>
                  <th>
                      <Link href={`/tenants/${tenant.id}`}>
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

export default AllTenants