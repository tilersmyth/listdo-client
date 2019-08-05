import React from "react";
import { Theme, Typography } from "@material-ui/core";
import Moment from "react-moment";

import { StyleRules, withStyles } from "@material-ui/styles";
import { EmailDto, MeComponent } from "../../apollo/generated-components";
import TaskItemMembers from "./TaskItemMembers";

interface Props {
  email: EmailDto;
  role: string;
}

const styles = (_: Theme): StyleRules => ({});

const TaskItemSecondary: React.FunctionComponent<Props> = ({ email, role }) => {
  return (
    <MeComponent>
      {({ data }) => {
        const me = data && data.me;

        const recipients = email.members.filter(
          (member: any) =>
            member.user.email !== (me && me.email) &&
            member.role !== "initiator"
        );

        return (
          <Typography variant="caption">
            <Moment fromNow>{email.payload.date}</Moment>
            {recipients.length > 0 && (
              <TaskItemMembers members={recipients} role={role} />
            )}
          </Typography>
        );
      }}
    </MeComponent>
  );
};

export default withStyles(styles)(TaskItemSecondary);
