import { ChatEngine } from 'react-chat-engine';
import ScrollToBottom from 'react-scroll-to-bottom';
 import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID;

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
       <ToastContainer position='top-center' />
    </ScrollToBottom>
  );
};


export default App;
