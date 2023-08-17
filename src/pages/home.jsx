import "./home.css";
import { Link } from 'react-router-dom'
function Home() {
    return (<div className="home page">
        <h1>Welcome to Grace in the Wild</h1>
        <Link className="btn btn-dark" to="/catalog">
            Catalog
        </Link>
    </div>
    );
}

export default Home;