import Card from "./Card";
function Tours({tours,removeTour}){  // using destructing here not props onject 
    return(
        
        <div className="container">
            <div>  
                <h2 className="title">plan with love</h2>
            </div>
            <div className="cards">
                {
                tours.map( (tour) => {
                    return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                })
            }
            </div>

        </div>
    );
}

export default Tours;