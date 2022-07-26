import { useState, useSyncExternalStore } from 'react';
import Navbar from './components/Navbar/Navbar';
import NotificationBar from './components/NotificationBar/NotificationBar';

function App() {
  const [notificationBarIsShown, setNotificationBarIsShown] = useState(true);
  function closeNotificationBar() {
    setNotificationBarIsShown(false);
  }

  return (
    <div className="App">
      <div className="container">
        {notificationBarIsShown && <NotificationBar handleClick={() => closeNotificationBar()} />}
        <Navbar />
      </div>
    </div>
  );
}

export default App;
