import { useState } from "react";
import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const photos = [
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/427043023.jpg?k=523c649e32167fcf5d6181726bd0b83ab46fba6567f8e1aaee38969e2bf42658&o=&hp=1",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/427043138.jpg?k=583b592bb52e66426fc17a9436cc0a1ce9c4d47c712c1e753dd69da0a56ae140&o=&hp=1",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/427043080.jpg?k=6af4ad86c875a6497629565fbf7f36196fd207f3fd7f0677319091ca2863c199&o=&hp=1",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/427043094.jpg?k=cf6b349704bc99a94dad12b965854853e9349d52e67cf94f0b443e8d953cd0b7&o=&hp=1",
  },
];

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = (index) => {
    setSlideNumber(index);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "left") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("left")}
            />
            <div className="sliderWrapper">
              <img
                src={photos[slideNumber].src}
                alt="hotel images"
                className="sliderImg"
              />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("right")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $235 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, index) => (
              <div className="hotelImgWrapper">
                <img
                  onClick={() => handleOpen(index)}
                  src={photo.src}
                  alt="hotel photos"
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of New York</h1>
              <p className="hotelDesc">
                Located adjacent to Grand Central Terminal, this Manhattan hotel
                features onsite dining and the 24/7 StayFit fitness center.
                Rooms include a flat-screen TV and an iPod docking station. All
                rooms at the Hyatt Grand Central New York offer a work desk and
                seating area. The hotel’s New York Central Bar is open for all
                meals and serves European cuisine. There is a 24/7 on-site
                Market offering on-the-go meals. The hotel’s concierge staff is
                available to assist with sightseeing planning and procure
                tickets to Broadway shows. Times Square is less than 0.6 mi away
                and a train shuttle service is available from Grand Central to
                Times Square subway station. Bryant Park is 645 m away. This is
                our guests' favorite part of New York, according to independent
                reviews.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 5-night stay!</h1>
              <span>
                Located in the heart of New York, this hotel has an excellent
                location score of 9.1
              </span>
              <h2>
                <b>$2345</b> (5 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
