import "./HeroImage.css";

export default function HeroImage({ mainImage, coverImage }) {
  return (
    <div className="HeroImage">
      {mainImage && (
        <img src={mainImage} className="MainHeroImage" alt="Main Hero" />
      )}
      {coverImage && <img src={coverImage} className="Bubbles" alt="Bubbles" />}
    </div>
  );
}
