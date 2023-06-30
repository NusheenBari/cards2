import { getTenant } from "@/api"
import Navbar from "@/app/components/Navbar"
import { ITenant } from "@/types/usersdata"
import Link from "next/link"
import Image from "next/image"


type Params = {
    params:{
        tenantId: string
    }
}


export default async function TenantPage({ params: { tenantId }}: Params) {

    const tenantData: Promise<ITenant> =  getTenant(tenantId)

    const [tenant] = await Promise.all([tenantData])


  return (

    <>
    <Navbar/>
    <div className="card-actions justify-end p-5 m-5">

                <Link href='/edit_tenant'>
                  <button className="btn bg-blue-500 text-white">Edit</button>
                </Link>
                
                <Link href={`/tenants/users`}>
                  <button className="btn bg-blue-500 text-white">View contacts</button>
                </Link>

                <button className="btn bg-slate-300 text-white disabled">Add user +</button>

              </div>
      <div className="m-5 p-2 md:m-10 md:p-5 flex justify-center">


        <div className="card w-96 bg-base-100 shadow-xl">
          <figure><img src={tenant.companyLogo} alt={tenant.companyName} /></figure>
          <div className="card-body">
            <h2 className="card-title">
              {tenant.companyName}
              <div className="badge badge-secondary hidden"></div>
            </h2>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{tenant.plan}</div> 
              <div className="badge badge-outline hidden">{tenant.renewalDate}</div>
            </div>
            <p>Contact Person:  
              <b>
                 {tenant.contactPerson}
              </b>
              </p>

              <br/>

              <hr/>

              <p>Phone number: 
                <b>
                  {tenant.phoneNumber}
                </b>
              </p>

              <hr/>



          </div>
        </div>


    </div>
    </>

  )
}
