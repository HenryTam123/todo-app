import React, {useState} from 'react'
import {Avatar, IconButton, ListItem, ListItemIcon, ListItemLink, ListItemText} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import SettingsIcon from '@material-ui/icons/Settings';
import InboxIcon from '@material-ui/icons/Inbox';
import SearchIcon from '@material-ui/icons/Search';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import TodayIcon from '@material-ui/icons/Today';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';


const Sidebar = () => {

    const [display, setDisplay] = useState(true)

    return (
        <div className="sidebar-container" style={{flex: display? "1" : '0.2', minWidth: display? "200px": "100px"}}>
          <div className="sidebar-wrapper" style={{flex: display? "1" : '0.2', minWidth: display? "200px": "100px"}}>
          <div className="sidebar-header">
            <IconButton  color="inherit" aria-label="menu">
                <MenuIcon onClick={()=> setDisplay(!display)}/>
            </IconButton>
            {
                display ? <div>
                <IconButton>            
                    <Avatar></Avatar>
                </IconButton> 
                 </div>: ""
            }
            </div>
            <div className="sidebar-list">
            <ListItem button className="list-button">
                <ListItemIcon style={{"color":"#eeeeee"}}>
                  <HomeIcon />
                </ListItemIcon>
                {display ? <ListItemText className="list-text "primary="Home" style={{"color":"#eeeeee"}}/> :""}
            </ListItem>
            <ListItem button className="list-button">
                <ListItemIcon style={{"color":"#eeeeee"}}>
                  <InboxIcon />
                </ListItemIcon>
                {display ? <ListItemText primary="Inbox" style={{"color":"#eeeeee"}}/> :""}

            </ListItem>
            <ListItem button className="list-button" >
                <ListItemIcon style={{"color":"#eeeeee"}}>
                  <TodayIcon />
                </ListItemIcon>
                {display ? <ListItemText primary="Today" style={{"color":"#eeeeee"}}/> :""}
            </ListItem> 
            <ListItem button className="list-button">
                <ListItemIcon style={{"color":"#eeeeee"}}>
                  <SendIcon />
                </ListItemIcon>
                {display ? <ListItemText primary="Mail" style={{"color":"#eeeeee"}}/> :""}
            </ListItem>
            <ListItem button className="list-button">
                <ListItemIcon style={{"color":"#eeeeee"}}>
                  <PeopleAltIcon />
                </ListItemIcon>
                {display ? <ListItemText primary="Friends" style={{"color":"#eeeeee"}}/> :""}
            </ListItem>  
            <ListItem button className="list-button">
                <ListItemIcon>
                  <CalendarTodayIcon style={{"color":"#eeeeee"}}/>
                </ListItemIcon>
                {display ? <ListItemText primary="Calendar" style={{"color":"#eeeeee"}}/> :""}
            </ListItem>      
            <ListItem button className="list-button">
                <ListItemIcon style={{"color":"#eeeeee"}}>
                  <SettingsIcon />
                </ListItemIcon>
                {display ? <ListItemText primary="Settings" style={{"color":"#eeeeee"}}/> :""}
            </ListItem>      
            <ListItem button className="list-button">
                <ListItemIcon style={{"color":"#eeeeee"}}>
                  <SearchIcon />
                </ListItemIcon>
                {display ? <ListItemText primary="Search" style={{"color":"#eeeeee"}}/> :""}
            </ListItem>
            <ListItem button className="list-button">
                <ListItemIcon style={{"color":"#eeeeee"}}>
                  <AnnouncementIcon />
                </ListItemIcon>
                {display ? <ListItemText primary="News" style={{"color":"#eeeeee"}}/> :""}
            </ListItem>
            <ListItem button className="list-button">
                <ListItemIcon style={{"color":"#eeeeee"}}>
                  <ExitToAppIcon />
                </ListItemIcon>
                {display ? <ListItemText primary="Logout" style={{"color":"#eeeeee"}}/> :""}
            </ListItem>          
            </div>
          </div>
            
        </div>
    )
}

export default Sidebar
