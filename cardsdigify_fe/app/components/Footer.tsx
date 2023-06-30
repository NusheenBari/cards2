
import Link from "next/link"

const Footer = () => {

    const currentYr = new Date().getFullYear()

  return (
    <div className="block md:flex justify-between text-slate-600 bg-slate-200 py-2 px-6 text-xs text-center">
        
        <p className="p-2">
            Copyright {currentYr} © Cards Digify. All Rights Reserved.   
        </p>


        <p className="p-2">
            Patent Pending
        </p>

        <p className="p-2">
           A Venture of <Link href='https://www.digifyseocompany.com/' className="text-green-500 underline">Digify SEO Company.</Link>  
           Proud Vendor of <Link href='https://digitalmainstreet.ca/vendor/digify-seo-company/' className="text-green-500 underline">Digital Main Street. </Link>
        </p>



    </div>
  )
}

export default Footer