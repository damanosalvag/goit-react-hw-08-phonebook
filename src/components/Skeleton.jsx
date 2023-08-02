import { ListItem, ListItemIcon, ListItemText, Skeleton } from "@mui/material";

const ListSkeleton = () => {
  return (
    <ListItem disableGutters>
      <ListItemIcon>
        <Skeleton height={24} width={24} variant="circular" />
      </ListItemIcon>
      <ListItemText>
        <Skeleton height={30} variant="text" />
      </ListItemText>
      <ListItemText sx={{ ml: 2 }}>
        <Skeleton height={30} variant="text" />
      </ListItemText>
      <ListItemIcon sx={{ ml: 3, minWidth: 30 }}>
        <Skeleton height={40} width={20} />
      </ListItemIcon>
    </ListItem>
  );
};
export default ListSkeleton;
