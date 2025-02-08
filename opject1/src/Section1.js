import './Section1.css';
function Section1() {
  return (
    <div className="section1">
      <span className='sp1'></span>
    <button>SERVICES</button>
    <span className='sp2'></span>
    <div className='contain'>
        <div className='box' >
        <i class='bx bxs-pencil'></i>        
        <h2 className='head'>
            script writing
        </h2>
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
        <h2 className='head'>
           make websites
        </h2>
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
        <h2 className='head'>
            video production
        </h2>
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