import "./Features.css"
import Card from "./Card";
import Data from "./Data";

function Features() {
    return(
        <section className="feature">
        <div className="title"> <h2>PROJECTS</h2></div>
       
    
      <div className="contain">

       {Data.map((features)=>(

           <Card
           key={features.id}
           features={features}
           
           />

   
        ))}
</div>
</section>
    );
}

export default Features ;