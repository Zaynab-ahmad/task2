import "./FeatureCard.css";

export default function FeatureCard({ src, title, content }) {
  return (
    <div className="FeatureCard SharedBorder SharedShadow Flex">
      <div className="Tape SharedBorder"></div>
      <div className="ImageWrapper SharedBorder">
        <img src={src} alt="" className="FeatureCardImg" />
      </div>
      <div className="FeatureCardContent Flex">
        <h3 className="FeatureCardContentH">{title}</h3>
        <p className="SharedFont FeatureCardP">{content}</p>
      </div>
    </div>
  );
}
