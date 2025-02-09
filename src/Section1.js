import './Section1.css';
function Section1() {
  return ( 
    <div className="section1">
       
      <div className="title"> <h2>SERVICES</h2>  </div>

   
   
    <div className='contain'>
        <div className='box' >
        <i class='bx bxs-pencil'></i>        
        <h5 className='head'>
            script writing
        </h5>
        <p className='lorem'>
        Lorem ipsum dolor sit amet consectetur
         adipisicing elit. Est cum reprehenderit 
         eveniet adipisci, corporis in nostrum 
         veritatis cupiditate quam magnam mollitia, 
         velit ad voluptatem! Laudantium incidunt 
         sint nihil quis laboriosam.
        </p>
        </div>
        <div className='box2' >
        <i class='bx bxl-chrome'></i>
        <h5 className='head'>
           make websites
        </h5>
        <p className='lorem'>
        Lorem ipsum dolor sit amet consectetur
         adipisicing elit. Est cum reprehenderit 
         eveniet adipisci, corporis in nostrum 
         veritatis cupiditate quam magnam mollitia, 
         velit ad voluptatem! Laudantium incidunt 
         sint nihil quis laboriosam.
        </p>
        </div>
        <div className='box' >
        <i class='bx bxs-video' ></i>
        <h5 className='head'>
            video production
        </h5>
        <p className='lorem'>
        Lorem ipsum dolor sit amet consectetur
         adipisicing elit. Est cum reprehenderit 
         eveniet adipisci, corporis in nostrum 
         veritatis cupiditate quam magnam mollitia, 
         velit ad voluptatem! Laudantium incidunt 
         sint nihil quis laboriosam.
        </p>
        </div>
    </div>
    </div>
  )
}

export default Section1;