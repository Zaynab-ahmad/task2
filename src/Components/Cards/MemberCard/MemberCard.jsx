import "./MemberCard.css";
import { IoIosMail } from "react-icons/io";

export default function MemberCard({ src, name, mail, qual, info }) {
  return (
    <div className="MemberCard SharedBorder SharedShadow">
      <div className="TeamCardTop">
        <div className="FlexRow ImgName">
          <div className="TeamImg SharedBorder">
            <img src={src} alt={name} />
          </div>
          <h2 className="TeamName">{name}</h2>
        </div>
        <div className="TeamNameAndMail">
          <a href={`mailto:${mail}`} className="MailBox SharedBorder">
            <IoIosMail />
          </a>
        </div>
      </div>

      <div className="TeamCardContent SharedBorder">
        <h2 className="Qualification">Qualification: {qual}</h2>
        <p className="Info SharedFont">{info}</p>
      </div>
    </div>
  );
}
