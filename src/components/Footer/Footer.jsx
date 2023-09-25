import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer section__padding bg__dark">
            <div className="container">
                <div className="footer__content grid text__light text__center">
                    <div className="footer__content--item">
                        <a href="" style={{ fontSize: 40 }} className="footer__navlink">SASJ & Co.</a>
                        <p className="para__text"> CHARTERED ACCOUNTANTS</p>
                        <p style={{ margin: 20, fontSize: 30, color: "orange" }} className="para__text"> Thank you</p>
                    </div>

                    <div className="footer__content--item">
                        <h3 style={{ marginBottom: '.5rem', color: "#10c9c3" }} className="footer__title">EMAIL-ID</h3>
                        <a href="mailto:someone@gmail.com"> Sasj.indore@gmail.com</a><br />
                        <h3 style={{ marginBottom: '.5rem', color: "#10c9c3" }} className="footer__title">PHONE NO.</h3>
                        <span> +91-98933 30185</span><br />
                        <span>  +91-9977899033</span><br />
                        <span> +91-731 3593821</span><br />
                        <span> +91-9131925848</span><br />
                    </div>
                    <div className="footer__content--item">
                        <h3 className="footer__title" style={{ color: "#10c9c3" }}>PINCODE</h3>
                        <ul className="footer__links">
                            <li><a href=""> 452001</a></li>

                        </ul>
                    </div>

                    <div className="footer__content--item">
                        <h3 className="footer__title" style={{ color: "#10c9c3" }}>ADDRESS</h3>
                        <ul className="footer__links">
                            <li><a href="">10A, Vaibhav Nagar Extension,kanadiya

                                Road,Indore (M.P.) </a></li>

                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;