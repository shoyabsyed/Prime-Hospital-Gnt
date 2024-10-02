import React from 'react'

export default function InnerBanner(props) {
    return (
        <section className='elementor-section'>
            <div
                 style={{
                    backgroundImage: `url(${props?.imagePath})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    padding: '130px 0',
                    textAlign: 'center',
                    fontSize: '60px',
                    fontWeight: '900',
                    lineHeight: '1.5em',
                    fontFamily: "Playfair Display Sans-serif", 
                    color: "#fff"
                  }}
            >
                {props?.heading}
            </div>
        </section>
    )
}
