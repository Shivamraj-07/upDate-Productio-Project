import React from "react";
import { List, Datagrid, TextField, EditButton, DeleteButton } from "react-admin";

const JobsList = () => (
  <List>
    <Datagrid>
      <TextField source="title" label="Job Title" />
      <TextField source="company" label="Company Name" />
      <TextField source="location" label="Location" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export default JobsList;
