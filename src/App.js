import { ChatEngine } from 'react-chat-engine';
import ScrollToBottom from 'react-scroll-to-bottom';
 import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = process.env.REACT_CHAT_ENGINE_PROJECTID

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ScrollToBottom>
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
      <ToastContainer />
    </ScrollToBottom>
  );
};

// infinite scroll, logout, more customizations...

export default App;
