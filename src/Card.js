import 'bootstrap/dist/css/bootstrap.min.css';
import "./Card.css"
function Card({features}) {
    const {img ,text ,head ,link} =features;
return(
    
    <section className='project'>

  <div className="cards">
      
    <div className="container">
        <div className="card">
            <img src={img} alt="" className="card-img" />

<div className="card-body">
    <p className="lead">{text}</p>
    <div className="body-footer">
        <h5>{head}</h5>
        <a href="#">{link}</a>
    </div>
</div>


 
        </div>
    </div>

  </div>
  </section>
 
)
}


export default Card;