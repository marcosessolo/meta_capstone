import aboutus from '../assets/about us.jpg';

function Chicago() {
    return(
<main className="container mt-5">
    <div className="row">
        <div className="col-4">
            <h1>
                Little lemon
            </h1>
            <h2>
                Chicago
            </h2>
            <p>Little lemon restaurant is a restaurant based in chicago. the founders are italians and they make italian, greek and turkish food. </p>
        </div>
        <div className='col-8'>
            <img src={aboutus} height='600rem' alt="restaurant" />
        </div>
    </div>
</main>
    )
};

export default Chicago;