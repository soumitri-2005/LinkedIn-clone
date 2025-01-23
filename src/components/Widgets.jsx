import React from "react";
import "../componentsCss/Widgets.css";
import crossClimb from "../assets/crossclimb-img.jpg";
import queens from "../assets/queens-img.jpg";
import pinPoint from "../assets/pinpoint-img.jpg";
import linkedIn from "../assets/Linkedin-img.png";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets-top">
        <div className="top-one">
          <h2>
            Trending Now
            <br />
            <span>curated by LinkedIn News</span>
          </h2>
          <p>
            India’s 25 fastest-growing jobs
            <br />
            <span>8d ago • 22,894 readers</span>
          </p>
          <p>
            Global CEOs upbeat on India
            <br />
            <span>23h ago • 1,362 readers</span>
          </p>
          <p>
            IT firms score deal wins
            <br />
            <span>23h ago • 986 readers</span>
          </p>
          <p>
            Gender gap takes root in realty
            <br />
            <span>23h ago • 894 readers</span>
          </p>
          <p>
            Local FMCG players face sales slump
            <br />
            <span>23h ago • 665 readers </span>
          </p>
        </div>
        <div className="top-two">
          <h2>Today's puzzles</h2>
          <div className="game">
            <img src={pinPoint} alt="" />
            <p>
              Pinpont <br /> <span>Guess the catagory</span>{" "}
            </p>
            <KeyboardArrowRightIcon className="arrow-icon" />
          </div>
          <div className="game">
            <img src={crossClimb} alt="" />
            <p>
              Crossclimb <br /> <span>Unlock trivia ladder</span>{" "}
            </p>
            <KeyboardArrowRightIcon className="arrow-icon" />
          </div>
          <div className="game">
            <img src={queens} alt="" />
            <p>
              Queens <br /> <span>Crown each region</span>{" "}
            </p>
            <KeyboardArrowRightIcon className="arrow-icon" />
          </div>
        </div>
      </div>

      <div className="widgets-bottom">
        <div className="bottom-about">
          <p>
            <span>About</span> <span>Accessibility</span>{" "}
            <span>Help Center</span>
          </p>
          <p>
            <span>Privacy & Terms</span>
            <span>Ad Choices</span>
          </p>
          <p>
            <span>Advertising</span>
            <span>Business Services</span>
          </p>
          <p>
            <span>Get the LinkedIn app</span>
            <span>More</span>
          </p>
        </div>
        <div className="bottom-footer">
          <img src={linkedIn} alt="" />
          <p>LinkedIn Corporation © 2025</p>
        </div>
      </div>
    </div>
  );
}

export default Widgets;
