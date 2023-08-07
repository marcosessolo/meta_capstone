import lemon from '../assets/lemon_dessert.jpg';
import bruschetta from '../assets/bruschetta.jpg';
import greek from '../assets/greek_salad.jpg';

function Specials() {
  
    


    return(
        <main className="container mt-3">
            <div className="row">
                <div className="col-6 d-flex justify-content-center">
                    <h3>Specials of the day</h3>
                </div>
                <div className="col-6 d-flex justify-content-center">
                <button type="button" className="btn btn-light">Menu online</button>
                </div>

            </div>

            <div className="row mt-5">
                <div className="col-4">
                    <div className="card" style={{width: "18rem",}}>
                        <img src={lemon} height={'300rem'} className="card-img-top" alt="image"/>
                            <div className="card-body">
                                <h5 className="card-title">Lemon Dessert</h5>
                                <p className="card-text">weekly dessert special.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                            <p>slice of lemon dessert made with sicilian lemons</p>
                    </div>
                </div>

                <div className="col-4">
                    <div className="card" style={{width: "18rem"}}>
                        <img src={bruschetta} height={'300rem'} className="card-img-top" alt="image"/>
                            <div className="card-body">
                                <h5 className="card-title">bruschetta</h5>
                                <p className="card-text">italian food</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                            <p>bruschetta is made with tomatoes,olive oil,cheese and olives on top of a slice of wholemeal bread. </p>
                    </div>
                </div>

                <div className="col-4">
                    <div className="card" style={{width: "18rem"}}>
                        <img src={greek} height={'300rem'} class="card-img-top" alt="image"/>
                            <div class="card-body">
                                <h5 class="card-title">greek salad</h5>
                                <p class="card-text">Greek salad, made with love</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                            <p>greek salad is made with cheese, cherry tomatoes and fresh salad</p>
                    </div>
                </div>
            </div>
           
        </main>
        
    )
}

export default Specials;