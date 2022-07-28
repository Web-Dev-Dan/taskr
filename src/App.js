import { useState, useSyncExternalStore } from 'react';
import Aside from './components/Aside/Aside';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import NotificationBar from './components/NotificationBar/NotificationBar';


function App() {
  const [notificationBarIsShown, setNotificationBarIsShown] = useState(true);
  function closeNotificationBar() {
    setNotificationBarIsShown(false);
  }

  const data = {
    "items": [
      {
        "id": 1,
        "name": "Ticket 1"
      }, {
        "id": 2,
        "name": "Ticket 2"
      }
    ]
  }

  return (
    <div className="App">
      <div className="container">
        {notificationBarIsShown && <NotificationBar handleClick={() => closeNotificationBar()} />}
        <Navbar />
        <div className="content">
          <Aside
            data={data}
          />
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
