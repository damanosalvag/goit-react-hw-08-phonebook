import { useSelector, useDispatch } from "react-redux";
import { operations } from "../app/contacts/operations";
import ListSkeleton from "./Skeleton";

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";

export const ContactList = () => {
  const token = useSelector((state) => state.auth.token);
  const contacts = useSelector((state) => state.contacts.list);
  const query = useSelector((state) => state.contacts.filter);
  const isLoading = useSelector((state) => state.contacts.isLoading);
  const modificator = useSelector((state) => state.contacts.modificator);
  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    const dataDelete = { id: id, token: token}
    await dispatch(operations.deleteContact(dataDelete));
    dispatch(operations.getContacts(token));
  };
  const filteredContacts = contacts[0] ? contacts.filter((contact) =>
    contact.name.toLowerCase().includes(query.toLowerCase())) : [];
  
  const skeletonList = () => {
    let arr = [];
    const length = contacts.length == 0 ? 10 : contacts.length + modificator;
    for (let i = 0; i < length; i++) {
      arr.push(<ListSkeleton key={i} />);
    }
    return arr;
  };
  return (
    <List>
      {!isLoading
        ? filteredContacts
            .map((contact) => (
              <ListItem
                key={contact.id}
                disableGutters
                secondaryAction={
                  <Tooltip title="Delete" placement="right">
                    <IconButton onClick={() => handleDelete(contact.id)}>
                      <DeleteIcon color="error" />
                    </IconButton>
                  </Tooltip>
                }
              >
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="h6" align="left">
                      {`${contact.name}`}
                    </Typography>
                  }
                />
                <ListItemText
                  primary={
                    <Typography variant="string" align="left">
                      {`${contact.number}`}
                    </Typography>
                  }
                  sx={{ textAlign: "right", pr: 2 }}
                />
              </ListItem>
            ))
            .reverse()
        : skeletonList()}
    </List>
  );
};
