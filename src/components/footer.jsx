import "./footer.css";

function Footer() {
    return (
        <div className="footer">
            <label>Grace in the Wild Co</label>
            <br></br>
            <label>Email: hello@graceinthewildco.com</label>
            <br></br>
            <h5>Follow us on social! </h5>
            <div className="socialicons">
                <i class="fa-brands fa-square-facebook"></i>
                <i class="fa-brands fa-square-instagram" />
                <i class="fa-brands fa-tiktok" />
                <i class="fa-brands fa-square-youtube" />
            </div>
        </div>
    );

}

export default Footer; 