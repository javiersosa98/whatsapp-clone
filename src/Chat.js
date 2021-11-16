import React, { useEffect, useState } from 'react';
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import AttachFile from "@material-ui/icons/AttachFile";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import { useParams } from "react-router-dom";
import db from "./firebase";
import { doc, onSnapshot, collection, query, orderBy, addDoc } from "./firebase";
import { useStateValue } from "./StateProvider";
import { serverTimestamp } from '@firebase/firestore'
import "./Chat.css";


function Chat() {
    const [input, setInput] = useState("");
    const [seed, setSeed] = useState("");
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState("");
    const [messages, setMessages] = useState([]);
    const [{ user }, dispatch] = useStateValue();

    useEffect(() => {

        if (roomId) {
            onSnapshot(doc(db, "rooms", `${roomId}`), (snapshot) => {
                setRoomName(snapshot.data().name);
            });

            const messagesCollection = query(collection(db, "rooms", `${roomId}`, "messages"), orderBy("timestamp", "asc"));
            onSnapshot(messagesCollection, (snapshot) => {
                setMessages(snapshot.docs.map((doc) => 
                    doc.data()
                ))
            });
        }
    }, [roomId]);

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [roomId]);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log("You type >>> ", input);

        addDoc(collection(db, "rooms", `${roomId}`, "messages"), {
            message: input,
            name: user.displayName,
            timestamp: serverTimestamp()
        });

        setInput('');
    };

    const lastSeen = () => {

        if (messages.length > 0) {
            return new Date(messages[messages.length - 1]?.timestamp?.toDate()).toLocaleString();
        } else {
            return "...";
        }
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                
                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
                    <p>Last seen {" "} {lastSeen()}</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                {messages.map((message) => (
                    <p className={`chat__message ${message.name === user.displayName && "chat__reciever"}`}>
                        <span className="chat__name">{message.name}</span>
                            {message.message}
                        <span className="chat__timestamp">{new Date(message.timestamp?.toDate()).toLocaleString()}</span>
                    </p>
                ))}
                
            </div>

            <div className="chat__footer">
                <IconButton>
                    <InsertEmoticonIcon />
                </IconButton>
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message" type="text" />
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <IconButton>
                    <MicIcon />
                </IconButton>
            </div>
        </div>
    );
}

export default Chat
