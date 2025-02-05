import "./Features.css"
import Card from "./Card";
import Data from "./Data";

function Features() {
    return(

      <div className="contain">

       {Data.map((features)=>(

           <Card
           key={features.id}
           features={features}
           
           />

   
        ))}
</div>

    );
}

export default Features ;