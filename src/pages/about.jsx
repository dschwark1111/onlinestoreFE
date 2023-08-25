import "./about.css"

function About() {
    return (<div className="about page">
        <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="/images/aboutimage.png" class="img-fluid rounded-start" alt="about" />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">About the Owner </h5>
                        <p class="card-text">Hi, my name is Dorothy, but everyone calls me Dottie. Welcome to Grace in the Wild Co where we create your handmade gifts with care and love! We are based out of Norman, Oklahama.
                            <br></br>
                            When I am not creating your gifts, I am hanging with my family or chickens. I am an Air Force vet, now military spouse. I love reading, walking and just being in nature.</p>
                        <br></br>
                        I can't wait to create your items! Don't see what you want? Message us! We love custom orders.
                        <div className="aboutbutton">
                            <button type="button" class="btn btn-dark">Click this button to email us! </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default About;