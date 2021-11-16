import React, { useEffect, useState } from 'react';
import { Avatar } from "@material-ui/core";
import db from "./firebase";
import { onSnapshot, collection, query, orderBy, addDoc } from "./firebase";
import { Link } from "react-router-dom";
import './SidebarChat.css';



function SidebarChat({ id, name, addNewChat }) {
    const [seed, setSeed] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() =>{
        if (id) {
            const messagesCollection = query(collection(db, "rooms", `${id}`, "messages"), orderBy("timestamp", "desc"));
            onSnapshot(messagesCollection, (snapshot) => {
                setMessages(snapshot.docs.map((doc) => 
                    doc.data()
                ))
            });
        }
    }, [id]);

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const createChat = () => {
        const roomName = prompt("Please enter name for chat room");

        if (roomName) {
            addDoc(collection(db, "rooms"), {
                name: roomName
            });
        }
    };

    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className="sidebarChat">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="sidebarChat__info">
                    <h2>{name}</h2>
                    <p>{messages[0]?.message}</p>
                </div>
            </div>
        </Link>
        
    ): (
        <div onClick={createChat} className="sidebarChat">
            <h2>Add new chat</h2>
        </div>
    );
}

export default SidebarChat
