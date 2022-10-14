import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
    return (
        <section className="my-5">
            <h1 id="about">Who am I?</h1>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
            <div className="my-2">
                <p>
                Foam macchiato sweet, fair trade white froth ut mocha. Steamed rich, brewed, crema aromatic trifecta that white coffee cortado viennese. Spoon, cup breve, java plunger pot caramelization turkish single shot extra  acerbic.
                </p>
            </div>
        </section>
    );
}

export default About;