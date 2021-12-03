import React from "react";
import "./index.scss";
import {
  handleOnFacebookShare,
  handleOnLinkedShare,
  handleOnTwitterShare,
} from "./function";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Button } from "react-bootstrap";

export default function SocialShare({
  iconWidth,
  iconHeight,
  title,
  titleClass,
  iconCLass,
}) {
  return (
    <React.Fragment>
      <div
        id="social"
        className={`
           d-flex flex-row`}
      >
        <p className="me-2">Share</p>
        <Button
          onClick={handleOnFacebookShare}
          style={{
            backgroundColor: `#1877f2`,
            width: iconWidth,
            height: iconHeight,
          }}
          className={" rounded-circle p-0 mb-0 mb-lg-2 me-2"}
        >
          <FaFacebookF width={16} height={16} color="#fff" />
        </Button>
        <Button
          onClick={handleOnTwitterShare}
          style={{
            backgroundColor: `#1da1f2`,
            width: iconWidth,
            height: iconHeight,
          }}
          className={" rounded-circle p-0 mb-0 mb-lg-2 me-2"}
        >
          <FaTwitter width={16} height={16} color="#fff" />
        </Button>
        <Button
          onClick={handleOnLinkedShare}
          style={{
            backgroundColor: `#0077b5`,
            width: iconWidth,
            height: iconHeight,
          }}
          className={" rounded-circle p-0 mb-0 mb-lg-2 me-2"}
        >
          <FaLinkedinIn width={16} height={16} color="#fff" />
        </Button>
      </div>
    </React.Fragment>
  );
}
