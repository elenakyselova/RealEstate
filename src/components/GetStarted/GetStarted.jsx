import React from "react";
import './GetStarted.css'

const GetSterted = () => {
    return(
        <section className="g-wrapper">
            <div className="paddings innerWidth g-container ">
                <div className="flexColCenter inner-container">
                    <span className="primaryText">Get started with Homyz</span>
                    <span className="secondaryText">
                        Subscribe and find super attractive price quotes from us.
                        <br /> 
                        Find your residence soon</span>
                   <button className="button">
                    <a href="mailto:ekyselov@yahoo.com">Get Started</a>
                   </button>
                </div>
            </div>

        </section>
    )
}

export default GetSterted;