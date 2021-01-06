import React from 'react';
const Hero = ({ handleLogout }) => {
    return (
        <Section className="hero">
            <nav>
                <h2>welcome</h2>
                <button onclick={handleLogout}>Logout</button>
            </nav>
        </Section>
    )
}
export default Hero;