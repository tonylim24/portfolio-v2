import "./HeroBanner.scss";
import pastryClassImage from "../../assets/images/pastryclass.jpg";

const HeroBanner = () => {
  return (
    <div className="hero-banner-component">
      <img
        className="hero-image"
        src={pastryClassImage}
        alt="PastryClass Inc."
      />
    </div>
  );
};

export default HeroBanner;
