import Navbar from "../Navbar";

export default function EditTenant() {
  return (
    <div>
        <Navbar/>


        <div className="text-sm breadcrumbs p-5 m-10 flex justify-center">
                <ul>
                    <li>
                    <a href="/home">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                        Home
                    </a>
                    </li> 
                    <li>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    Edit Profile
                    </li>
                </ul>
                </div>
      

<div className="p-5 m-10 flex justify-center">
            <div className="artboard artboard-horizontal phone-3 p-5 m-5 shadow-md rounded-md">

            <form>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Company Name</span>
                    </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Contact person</span>
                    </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Logo</span>
                    </label>
                    <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                </div>

                <div className="form-control w-full max-w-xs mt-10">
                    <button type="submit" className="btn bg-blue-500 text-white">Save & continue</button>
                </div>


            </form>
        </div>
</div>


    </div>
  )
}
