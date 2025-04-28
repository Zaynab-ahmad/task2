import MediaBox from "../MediaBox/MediaBox";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import MainFooter from "../MainFooter/MainFooter";

export default function Footer() {
  return (
    <div className="NavContainer">
      <div className="Footer SharedBorder SharedShadow">
        <MainFooter />
        <div className="FooterLinks FlexRow">
          <div className="FlexRow">
            <a href="" className="LinksItem border-right PR">
              Terms of Service
            </a>
            <a href="" className="LinksItem border-right PL PR">
              Privacy Policy
            </a>
            <a href="" className="LinksItem PL">
              Cookie Policy
            </a>
          </div>
          <div className="FlexRow MediaCon">
            <MediaBox icon={<FaFacebook />} />
            <MediaBox icon={<FaTwitter />} />
            <MediaBox icon={<FaLinkedin />} />
          </div>
        </div>
        <div className="CopyRightSec Flex">
          Copyright © [2025] Little Learners Academy. All rights reserved.
        </div>
      </div>
    </div>
  );
}
