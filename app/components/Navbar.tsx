import Link from "next/link"
import Image from "next/image"


const Navbar = () => {
  return (
        <div>
            <div className="navbar bg-indigo-500 text-primary-content flex justify-between gap-2 ">
                <Link className="btn btn-ghost normal-case text-md" href="/home">
                    <Image src="/icon.png" alt="Cards Digify" width={20} height={20}/>
                    Cards Digify
                </Link>

                <div className= "hidden text-sm md:flex gap-3">
              
                    <p> 
                        <Link href="">
                            My profile
                        </Link>
                    </p>  
                               
                 <p>Welcome User</p>

                 <Image className="rounded-full border border-white" src="" alt="" width={30} height={30}/>
                 
                </div>
                
            </div>
        </div>
  )
}

export default Navbar