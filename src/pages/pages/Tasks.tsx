import React, { useEffect } from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MessageCircle } from "react-feather";
import dragula from "dragula";

import "react-dragula/dist/dragula.css";

import {
  Avatar,
  AvatarGroup as MuiAvatarGroup,
  Breadcrumbs as MuiBreadcrumbs,
  Button,
  Card as MuiCard,
  CardContent as MuiCardContent,
  Divider as MuiDivider,
  Grid,
  Link,
  Typography as MuiTypography,
} from "@mui/material";
import { spacing } from "@mui/system";
import { orange, green, blue } from "@mui/material/colors";
import { Add as AddIcon } from "@mui/icons-material";

const Card = styled(MuiCard)(spacing);

const CardContent = styled(MuiCardContent)<{ pb?: number }>`
  &:last-child {
    padding-bottom: ${(props) => props.theme.spacing(4)};
  }
`;

const AvatarGroup = styled(MuiAvatarGroup)`
  display: inline-flex;
`;

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const TaskWrapper = styled(Card)`
  border: 1px solid ${(props) => props.theme.palette.grey[300]};
  margin-bottom: ${(props) => props.theme.spacing(4)};
  cursor: grab;

  &:hover {
    background: ${(props) => props.theme.palette.background.default};
  }
`;

const TaskWrapperContent = styled(CardContent)`
  position: relative;

  &:last-child {
    padding-bottom: ${(props) => props.theme.spacing(4)};
  }
`;

const TaskAvatars = styled.div`
  margin-top: ${(props) => props.theme.spacing(1)};
`;

const MessageCircleIcon = styled(MessageCircle)`
  color: ${(props) => props.theme.palette.grey[500]};
  vertical-align: middle;
`;

const TaskBadge = styled.div`
  background: ${(props) => props.color};
  width: 40px;
  height: 6px;
  border-radius: 6px;
  display: inline-block;
  margin-right: ${(props) => props.theme.spacing(2)};
`;

const TaskNotifications = styled.div`
  display: flex;
  position: absolute;
  bottom: ${(props) => props.theme.spacing(4)};
  right: ${(props) => props.theme.spacing(4)};
`;

const TaskNotificationsAmount = styled.div`
  color: ${(props) => props.theme.palette.grey[500]};
  font-weight: 600;
  margin-right: ${(props) => props.theme.spacing(1)};
  line-height: 1.75;
`;

const Typography = styled(MuiTypography)(spacing);

const TaskTitle = styled(Typography)`
  font-weight: 600;
  font-size: 15px;
  margin-right: ${(props) => props.theme.spacing(10)};
`;
type LaneProps = {
  title: string;
  description: string;
  onContainerLoaded: (container: Element) => void;
};
const Lane: React.FC<LaneProps> = ({
  title,
  description,
  onContainerLoaded,
  children,
}) => {
  const handleContainerLoaded = (container: HTMLDivElement | null) => {
    if (container) {
      onContainerLoaded(container);
    }
  };

  return (
    <Card mb={6}>
      <CardContent pb={0}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" mb={4}>
          {description}
        </Typography>
        <div ref={handleContainerLoaded}>{children}</div>
        <Button color="primary" variant="contained" fullWidth>
          <AddIcon />
          Add new task
        </Button>
      </CardContent>
    </Card>
  );
};

type TaskProps = {
  content: DemoTasksElement;
  avatars: Array<number>;
};
const Task: React.FC<TaskProps> = ({ content, avatars }) => {
  return (
    <TaskWrapper mb={4}>
      <TaskWrapperContent>
        {content.badges &&
          content.badges.map((color, i) => <TaskBadge color={color} key={i} />)}

        <TaskTitle variant="body1" gutterBottom>
          {content.title}
        </TaskTitle>

        <TaskAvatars>
          <AvatarGroup max={3}>
            {avatars &&
              avatars.map((avatar, i) => (
                <Avatar
                  src={`/static/img/avatars/avatar-${avatar}.jpg`}
                  key={i}
                />
              ))}
          </AvatarGroup>
        </TaskAvatars>

        {content.notifications && (
          <TaskNotifications>
            <TaskNotificationsAmount>
              {content.notifications}
            </TaskNotificationsAmount>
            <MessageCircleIcon />
          </TaskNotifications>
        )}
      </TaskWrapperContent>
    </TaskWrapper>
  );
};

type DemoTasksElement = {
  title: string;
  badges?: Array<string>;
  notifications?: number;
};
const demoTasks = [
  {
    title: "Redesign the homepage",
    badges: [green[600], orange[600]],
    notifications: 2,
  },
  {
    title: "Upgrade dependencies to latest versions",
    badges: [green[600]],
    notifications: 1,
  },
  {
    title: "Google Adwords best practices",
  },
  {
    title: "Improve site speed",
    badges: [green[600]],
    notifications: 3,
  },
  {
    title: "Stripe payment integration",
    badges: [blue[600]],
  },
];

const containers: Array<Element> = [];

function Tasks() {
  const onContainerReady = (container: Element) => {
    containers.push(container);
  };

  useEffect(() => {
    dragula(containers);
  }, []);

  return (
    <React.Fragment>
      <Helmet title="Tasks" />
      <Typography variant="h3" gutterBottom display="inline">
        Tasks
      </Typography>

      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} to="/">
          Dashboard
        </Link>
        <Link component={NavLink} to="/">
          Pages
        </Link>
        <Typography>Tasks</Typography>
      </Breadcrumbs>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12} lg={4} xl={4}>
          <Lane
            title="Backlog"
            description="Nam pretium turpis et arcu. Duis arcu."
            onContainerLoaded={onContainerReady}
          >
            <Task content={demoTasks[0]} avatars={[1, 2, 3, 4]} />
            <Task content={demoTasks[2]} avatars={[2]} />
            <Task content={demoTasks[3]} avatars={[2, 3]} />
            <Task content={demoTasks[1]} avatars={[]} />
            <Task content={demoTasks[4]} avatars={[]} />
          </Lane>
        </Grid>
        <Grid item xs={12} lg={4} xl={4}>
          <Lane
            title="In Progress"
            description="Curabitur ligula sapien, tincidunt non."
            onContainerLoaded={onContainerReady}
          >
            <Task content={demoTasks[2]} avatars={[3, 1, 2]} />
            <Task content={demoTasks[4]} avatars={[2]} />
          </Lane>
        </Grid>
        <Grid item xs={12} lg={4} xl={4}>
          <Lane
            title="Completed"
            description="Aenean posuere, tortor sed cursus feugiat."
            onContainerLoaded={onContainerReady}
          >
            <Task content={demoTasks[3]} avatars={[1, 2]} />
            <Task content={demoTasks[2]} avatars={[4]} />
            <Task content={demoTasks[0]} avatars={[]} />
          </Lane>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Tasks;
