import Link from "next/link"
import Image from "next/image"

const Login = () => {
  return (


    <div className="">
      <div className="flex justify-center mt-36">
        <Image src="/icon.png" alt="cards-digify" width={50} height={50}/>
      </div>
      
 
      <div className="flex justify-center mb-36">
        
        <form  className="p-5 border border-slate-200 rounded-md max-w-md shadow-md m-5">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Registered email</span>
              </label>
              <input type="text" placeholder="eg. john@emailaddress.com" className="input input-bordered w-full max-w-xs" />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="text" placeholder="*********" className="input input-bordered w-full max-w-xs" />
            </div>

            <div className="mt-5 mb-5">
              <button type="submit" className="btn w-full max-w-xs bg-indigo-600 text-white">Login</button>
            </div>
            
          <p className="text-xs text-slate-400">Forgot your password? <Link href='reset_password' className="text-indigo-500 underline">Click here</Link></p>
        </form>

        

      </div>   
    </div>
  )
}

export default Login