import React, { useContext } from "react";
import { Theme, Typography } from "@material-ui/core";
import Moment from "react-moment";

import { StyleRules, withStyles } from "@material-ui/styles";
import { EmailDto } from "../../generated/apolloComponents";
import { Store } from "../../stores";
import TaskItemMembers from "./TaskItemMembers";

interface Props {
  email: EmailDto;
  role: string;
}

const styles = (_: Theme): StyleRules => ({});

const TaskItemSecondary: React.FunctionComponent<Props> = ({ email, role }) => {
  const { userStore } = useContext(Store);

  const recipients = email.members.filter(
    (member: any) =>
      member.user.email !== userStore.Me.email && member.role !== "initiator"
  );

  return (
    <Typography variant="caption">
      <Moment fromNow>{email.payload.date}</Moment>
      {recipients.length > 0 && (
        <TaskItemMembers members={recipients} role={role} />
      )}
    </Typography>
  );
};

export default withStyles(styles)(TaskItemSecondary);
