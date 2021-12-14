import * as React from "react";
import SvgIcon from "@mui/material/SvgIcon";

function IBM() {
  return (
    <SvgIcon viewBox={"0 0 1000 400"}>
      <clipPath id="A">
        <path d="M0-1v83h55.9v236H1.5v82h195v-82h-55.9V82H195V-1zm554 1v82h55.9v236h-54.4v82h139V172l82.7 228 1.68.04 81.2-228v228h140v-82h-55.9v-236h54.4v-82h-156l-64.7 183-65.5-183z" />
        <path
          id="B"
          d="M222 0v82h55.9v130h215v-24.9s18-14 23.8-27.4l11.5-25.9s5.35-14.5 5.35-27.4l-2.3-25.9s-3.62-21.1-9.92-27.3l-22.3-25.9S470.73-.1 433.13-.1zm140 82h82v76h-82z"
        />
        <use transform="matrix(1 0 0 -1 0 400)" href="#B" />
      </clipPath>
      <path
        d="M0 13.7h1030v53.2H0m0 53.2h975v53.2H0v53.2h975v53.2H0m0 53.2h1030v53.2H0"
        clipPath="url(#A)"
        fill="none"
        stroke="#1f70c1"
        strokeWidth="27.4"
      />
    </SvgIcon>
  );
}

export default IBM;
