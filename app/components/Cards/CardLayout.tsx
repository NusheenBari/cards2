const CardLayout = () => {
    return (
      <div className="p-3 m-3 md:p-5 md:m-10 flex justify-center">
          <div className="card w-96 bg-base-100 shadow-xl">
          <figure><img src="icon.png" alt="Shoes" width={80} height={80}/></figure>
          <div className="card-body">
              <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div> 
              <div className="badge badge-outline">Products</div>
              </div>
          </div>
          </div>
      </div>
    )
  }
  
  export default CardLayout