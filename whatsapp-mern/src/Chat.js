
import React from 'react'
import './Chat.css'

import { Avatar,IconButton} from '@material-ui/core'
import {MoreVert, AttachFile, SearchOutlined ,InsertEmoticon,MicOutlined} from '@material-ui/icons';




function Chat() {
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>last seen at ...</p>
                </div>

                <div className="chat__headerRight">
                   <IconButton>
                        < SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>      
            </div>
            <div className="chat__body">
                <p className="chat__meesage">
                    <span className="chat__name">Yakov</span>
                    this is a message
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat__meesage chat__reciever">
                    <span className="chat__name">Yakov</span>
                    this is a message
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
            </div>
            <div className="chat__footer">
               <InsertEmoticon />
               <form>
                   <input type="text" placeholder="Type A meesage"/>
                   <button type="submit">send a meesage</button>  
               </form>
               <MicOutlined />
            </div>
           
        </div>
    )
}

export default Chat
