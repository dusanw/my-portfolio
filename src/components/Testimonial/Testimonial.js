import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";





const Testimonials = [
    {
        name: 'Jan Jirik',
        title: 'CEO of Jirik Moving',
        descriptoion: '“Working with Dusan on our website was an absolute pleasure. He is a web design pro, and his attention to detail is very impressive. He takes the time to understand what we need and then delivers on it perfectly. The end product is exactly what we were aiming for - a beautiful and functional website that not only looks great but also serves its purpose perfectly! I would highly recommend working with Dusan if you are looking for an excellent web designer!”',
    },
    {
        name: 'Vita Vencovska',
        title: 'CEO of Prohlidky Virtualne',
        descriptoion: '“I had the pleasure of working with Dusan recently on a web design project. He was extremely professional and knowledgeable about all aspects of web design, from the coding and designing to the user experience. His attention to detail was amazing and he was always willing to go above and beyond for his clients. If you are looking for an amazing web designer, then look no further!”',
    },
    {
        name: 'Michael Green',
        title: 'Univeristy Basketball Coach',
        descriptoion: '“Working with Mr. Walla has been an absolute pleasure! His expertise in web development is unmatched, and his commitment to making sure everything is done right is unparalleled. He is never afraid to take risks and always looks for ways to improve the product. I would highly recommend Dusan for any web development needs.”',
    },
    {
        name: 'Memeth Toker',
        title: 'General Poker Manager Palasino',
        descriptoion: '“Dusan Walla is an amazing web developer. He is highly knowledgeable in all aspects of web development, from coding to design and user experience. I trust Dusan with any project and know he will deliver it on time and with the best results. He is a great asset for any team!”',
    },
]



const Testimonial = () => {

    var settings = {
        dots: false,
        arrows: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (

        <section className="tp-testimonial-section section-padding">
            <div className="container">
                <div className="tp-section-title">
                    <span>Testimonials</span>
                    <h2>What My clients say.</h2>
                </div>

                <div className="tp-testimonial-wrap">
                    <Slider {...settings}>
                        {Testimonials.map((tstml, tsm) => (
                            <div className="tp-testimonial-item" key={tsm}>
                                <div className="tp-testimonial-text">
                                    <p>{tstml.descriptoion}</p>
                                    <span>{tstml.name}</span>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div className="visible-rotate-text">
                <h1>Review</h1>
            </div>
        </section>
    )
}

export default Testimonial;