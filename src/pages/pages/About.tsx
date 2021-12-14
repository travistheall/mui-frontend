import * as React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
// Mui Components
import { spacing } from "@mui/system";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import {
  // CardContent,
  Grid,
  Link,
  Breadcrumbs as MuiBreadcrumbs,
  // Card as MuiCard,
  Divider as MuiDivider,
  Typography,
} from "@mui/material";
// Icons
//import BiotechIcon from "@mui/icons-material/Biotech";
// import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
// import FastfoodIcon from "@mui/icons-material/Fastfood";
// import HotelIcon from "@mui/icons-material/Hotel"; // Sleep
// import RepeatIcon from "@mui/icons-material/Repeat";
import LSU from "../../components/svgicons/LSU";
import PB from "../../components/svgicons/PB";
import IBM from "../../components/svgicons/IBM";
// Styled imports
// const Card = styled(MuiCard)(spacing);
const Divider = styled(MuiDivider)(spacing);
const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

function EmptyCard() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
        >
          Current
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <IBM />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            IBM
          </Typography>
          <Typography>Because it&apos;s awesome!</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <PB />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            PBRC
          </Typography>
          <Typography>Talk about job at Pennington</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <FitnessCenterIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Fitness Jobs
          </Typography>
          <Typography>Talk about jobs</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <LSU />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            LSU
          </Typography>
          <Typography>Talk about LSU</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

function About() {
  return (
    <React.Fragment>
      <Helmet title="Blank" />
      <Typography variant="h3" gutterBottom display="inline">
        About Me
      </Typography>

      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} to="/">
          Dashboard
        </Link>
        <Link component={NavLink} to="/">
          Pages
        </Link>
        <Typography>About Me</Typography>
      </Breadcrumbs>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12}>
          <EmptyCard />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default About;
