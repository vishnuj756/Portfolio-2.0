import React from "react";
import Heading from "../../component/heading";
import Qt from "../../assests/images/size1.jpg";
export default function Portfolio() {
  const data = [
    {
      title: "iloilo",
      category: "E-learning",
      src: Qt,
    },
    {
      title: "Rented Wheel",
      category: "Rental Booking",
      src: Qt,
    },
    {
      title: "Deftrank",
      category: "EdTech",
      src: Qt,
    },
    {
      title: "Qt Pet",
      category: "Transport",
      src: Qt,
    },
  ];
  return (
    <div>
      <Heading name={"Portfolio"} />
      <div className="container">
        <div className="row">
          {data?.map((item) => {
            return (
              <>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-2">
                  <div
                    className="card border-0 rounded-3"
                  
                  >
                  <img src={item?.src} alt=""  className="img-fluid rounded-2"/>
                    {/* Add content or text to describe each project here */}
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.category}</p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
