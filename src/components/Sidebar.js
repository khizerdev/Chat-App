import { Avatar, IconButton } from '@material-ui/core'
import { Chat, DonutLarge } from '@material-ui/icons'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React , {useState , useEffect} from 'react'
import './Sidebar.css'
import SearchIcon from '@material-ui/icons/Search';
import SidebarChat from './SidebarChat';
import ToogleDarkMode from './ToogleDarkMode';
import db from '../firebase'
import { useStateValue } from '../StateProvider';

function Sidebar() {

    const [rooms, setRooms] = useState([]);
    const [{user} , dispatch] = useStateValue()

    useEffect(() => {

       const unsubscribe =  db.collection("rooms").onSnapshot(snapshot => {
            setRooms(snapshot.docs.map(doc => ({
                id:doc.id,
                data: doc.data()
            })
            ))
        })
        return () => {
            unsubscribe()
        }
    }, []);

    return (
        
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src={user?.photoURL}/>
                <div className="sidebar__headerRight">
                
                <ToogleDarkMode/> 
                    <IconButton>
                        <DonutLarge/>
                    </IconButton>
                    <IconButton>
                        <Chat/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">    
                    <SearchIcon/>
                    <input type="text" placeholder="Search or start new chat"/>
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat addNewChat/>
                {
                    rooms.map(room => (
                        <SidebarChat key={room.id} id={room.id} name={room.data.name}/>
                    ))
                }
            </div>
        </div>
        
    )
}

export default Sidebar
