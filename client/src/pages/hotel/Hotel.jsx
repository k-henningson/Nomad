import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const photos = [
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/427043023.jpg?k=523c649e32167fcf5d6181726bd0b83ab46fba6567f8e1aaee38969e2bf42658&o=&hp=1",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/427043036.jpg?k=57ec0dd4f0babcffb4d4f4b223c1d7b17795a0a95f637a3291ec8aed9ce7bf30&o=&hp=1",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/427043138.jpg?k=583b592bb52e66426fc17a9436cc0a1ce9c4d47c712c1e753dd69da0a56ae140&o=&hp=1",
  "https://cf.bstatic.com/xdata/images/hotel/max1280x900/427043080.jpg?k=6af4ad86c875a6497629565fbf7f36196fd207f3fd7f0677319091ca2863c199&o=&hp=1",
]

const Hotel = () => {
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
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
            {photos.map(photo=>(
              <div className="hotelImgWrapper">
                <img src={photo.src} alt="hotel photos" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of New York</h1>
              <p className="hotelDesc">Located adjacent to Grand Central Terminal, this Manhattan hotel features onsite dining and the 24/7 StayFit fitness center. Rooms include a flat-screen TV and an iPod docking station.

All rooms at the Hyatt Grand Central New York offer a work desk and seating area.

The hotel’s New York Central Bar is open for all meals and serves European cuisine. There is a 24/7 on-site Market offering on-the-go meals.

The hotel’s concierge staff is available to assist with sightseeing planning and procure tickets to Broadway shows.

Times Square is less than 0.6 mi away and a train shuttle service is available from Grand Central to Times Square subway station. Bryant Park is 645 m away.

This is our guests' favorite part of New York, according to independent reviews.</p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 5-night stay!</h1>
              <span>Located in the heart of New York, this hotel has an excellent location score of 9.1</span>
              <h2>
                <b>$2345</b> (5 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
