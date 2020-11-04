import { getStrapiMedia } from "../lib/media";

const Hero = ({ heroImage, style, textClass, title, subtitle }) => {
  const imageUrl = heroImage;

  const styling = {
    backgroundImage: `url('${imageUrl}')`,
  };

  return (
    <section className="hero" style={styling}>
    <div className="hero-body">
      <div className="container">
        <h1 className={"title " + textClass}>{title}</h1>
        <h2 className={"subtitle " + textClass}>{subtitle}</h2>
      </div>
    </div>
  </section>
  );
};

export default Hero;
