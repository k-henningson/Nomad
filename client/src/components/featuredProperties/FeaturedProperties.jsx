import "./featuredProperties.css";
import useFetch from "../../hooks/useFetch";

const FeaturedProperties = () => {
  const { data, loading } = useFetch(
    "/hotels/countByCity?cities=toronto,quebec city,montreal"
  );

  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt="featured properties"
          className="fpImg"
        />
        <span className="fpName">123 Property</span>
        <span className="fpCity">City</span>
        <span className="fpPrice">Starting from $250</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1"
          alt="featured properties"
          className="fpImg"
        />
        <span className="fpName">123 Property</span>
        <span className="fpCity">City</span>
        <span className="fpPrice">Starting from $250</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/117127036.webp?k=cfa1260e7772a9b73e2d7da559672a01a478b111b857e2893a5d2b7a4f7212bc&o=&s=1"
          alt="featured properties"
          className="fpImg"
        />
        <span className="fpName">123 Property</span>
        <span className="fpCity">City</span>
        <span className="fpPrice">Starting from $250</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=979587fd2ac8f7777a34758264d557eef57d0e98e58bdaeb121f5b968a20f810&o=&s=1"
          alt="featured properties"
          className="fpImg"
        />
        <span className="fpName">123 Property</span>
        <span className="fpCity">City</span>
        <span className="fpPrice">Starting from $250</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
