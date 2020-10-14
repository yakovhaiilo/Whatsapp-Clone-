import React from 'react'
import './Sidebar.css';
import SidebarChat from './SidebarChat';

import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar__header">
                <Avatar />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div> 
            </div>
            <div className="sidebar__search">
                 <div className="sidebar__searchContainer">
                    <SearchIcon />
                    <input placeholder="search or start new chat" type='text' />
                 </div>
            </div>
            <div className="sidebar__chats">
                 <SidebarChat />
                 <SidebarChat />
                 <SidebarChat />
            </div>
          
        </div>
    )
}

export default Sidebar;
