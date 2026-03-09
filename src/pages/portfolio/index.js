import React from "react";
import Heading from "../../component/heading";
import Qt from "../../assests/images/size1.jpg";
import Seo from "../../component/seo";
export default function Portfolio() {
  const data = [
    {
      title: "iloilo",
      category: "E-learning",
      src: Qt,
      description: "An innovative e-learning platform designed to provide interactive online education solutions.",
      link: "#",
    },
    {
      title: "Rented Wheel",
      category: "Rental Booking",
      src: Qt,
      description: "A user-friendly rental booking system for vehicles, streamlining the booking process.",
      link: "#",
    },
    {
      title: "Deftrank",
      category: "EdTech",
      src: Qt,
      description: "Educational technology platform focused on enhancing learning experiences through modern tools.",
      link: "#",
    },
    {
      title: "Qt Pet",
      category: "Transport",
      src: Qt,
      description: "Transportation solution for pet owners, ensuring safe and convenient travel for pets.",
      link: "#",
    },
  ];
  return (
    <div>
      <Seo
        title="Portfolio | Projects by Full-Stack Developer Vishal Sivhare"
        description="Explore Vishal Sivhare's portfolio of web development and full-stack applications built using React, Node.js, and more."
        keywords="portfolio, projects, full-stack developer, React, Node.js, Vishal Sivhare, web development"
        image="https://vishalshivhare.netlify.app/assests/images/hero-img.jpg"
        gaTrackingId={process.env.REACT_APP_GA_ID}
      />
      {data.map((item, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": item.title,
            "description": item.description,
            "genre": item.category,
            "author": {
              "@type": "Person",
              "name": "Vishal Sivhare"
            },
            "url": `https://vishalshivhare.netlify.app/portfolio#${item.title.toLowerCase().replace(/\s+/g, '-')}`
          })}
        </script>
      ))}
      <Heading name={"Portfolio"} />
      <div className="container">
        <div className="row">
          {data?.map((item) => {
            return (
              <div className="col-lg-4 col-md-6 col-sm-12 mb-2" key={item.title}>
                <article className="card border-0 rounded-3">
                  <img src={item?.src} alt={item.title + " - " + item.category}  className="img-fluid rounded-2"/>
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.category}</p>
                    <p className="card-description">{item.description}</p>
                    <a href={item.link} className="btn btn-primary">View Project</a>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
