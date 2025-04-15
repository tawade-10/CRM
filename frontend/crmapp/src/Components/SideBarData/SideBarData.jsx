import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import StorageIcon from '@mui/icons-material/Storage';
import DeleteIcon from '@mui/icons-material/Delete';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import EditIcon from '@mui/icons-material/Edit';

const SideBarData = [
    {
        title: "Dashboard",
        icon: <HomeIcon />,
        link: "/dashboard",
    },
    {
        title: "Connections",
        icon: <GroupsIcon />,
        link: "/connections",
    },
    {
        title: "Leads",
        icon: <HomeIcon />,
        link: "/leads",
    },
    {
        title: "Customers",
        icon: <PeopleAltIcon />,
        link: "/customers",
    },
    {
        title: "Tickets",
        icon: <LocalActivityIcon />,
        link: "/tickets",
    },
    {
        title: "Meeting Records",
        icon: <CalendarMonthIcon />,
        link: "/meeting-records",
    },
    {
        title: "Master Database",
        icon: <StorageIcon />,
        link: "/master-database",
    },
    {
        title: "Deleted Records",
        icon: <DeleteIcon />,
        link: "/deleted-records",
    },
    {
        title: "Reports",
        icon: <AssessmentIcon />,
        link: "/reports",
    },
    {
        title: "Notifications",
        icon: <NotificationsActiveIcon />,
        link: "/notifications",
    },
    {
        title: "Edit Profile",
        icon: <EditIcon />,
        link: "/edit-profile",
    },
];

export default SideBarData;