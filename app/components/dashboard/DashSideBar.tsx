import { BsBell } from 'react-icons/bs';


const DashSideBar = () => {
  return (
    <details className="collapse bg-slate-300 max-w-xs rounded-none">
      <summary className="collapse-title text-xl font-medium">
        <BsBell/>
      </summary>
      <div className="collapse-content"> 
        <p>content</p>
      </div>
</details>
  )
}

export default DashSideBar