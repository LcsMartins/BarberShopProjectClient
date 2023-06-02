/* eslint-disable @typescript-eslint/ban-types */
import React, {
    createContext,
    useContext,
    useState,
    useMemo,
    useEffect,
  } from 'react';
  
  interface SocketContextProps {
    // socket: Socket;
    ws: WebSocket;
    username?: string;
    setUsername: Function;
    messages?: Message[];
    setMessages: Function;
    roomId?: string;
    setRoomId: Function;
    clientId?: string;
    rooms: any;
  }
  
  const SocketContext = createContext<SocketContextProps>({
    user,
    setUser: () => false,
    //tipar interface e dps passar igual children abaixo
    clientId: '',
    setUsername: () => false,
    setMessages: () => false,
    setRoomId: () => '',
    rooms: {},
    messages: [],
  });
  
  export const SocketsProvider: React.FC = ({ children }) => {
    const [username, setUsername] = useState('');
    const [roomId, setRoomId] = useState('');
    const [rooms, setRooms] = useState({});
    const [clientId, setClientId] = useState('');
    const [messages, setMessages] = useState<Message[]>([]);
  
    const value = useMemo(
      () => ({
        // socket,
        user, // tipo isso
        username,
        setUsername,
        roomId,
        setRoomId,
        rooms,
        messages,
        setMessages,
      }),
      [clientId, messages, roomId, rooms, username],
    );
    return (
      <SocketContext.Provider value={value}>{children}</SocketContext.Provider>
    );
  };
  
  //alterar aqui
  export const useSocket = () => {
    const context = useContext(SocketContext);
  
    if (!context) {
      throw new Error('useSocket must be used within a SocketsProvider');
    }
    return context;
  };