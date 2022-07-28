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

  const [data, setData] = useState({
    "items": [
      {
        "id": 1,
        "name": "Portfolio"
      }, {
        "id": 2,
        "name": "Mamoru"
      }, {
        "id": 3,
        "name": "Taskr"
      }, {
        "id": 4,
        "name": "Wordle Clone"
      }, {
        "id": 5,
        "name": "JavaScript To-Do List"
      }
    ]
  });

  function createNewProject(task) {
    console.log('Works: ' + task);

    setData(prev => {
      prev.items.push({ "id": prev.items.length + 1, "name": task });
      return prev;
    })
    console.log(data);
  }

  return (
    <div className="App">
      <div className="container">
        {notificationBarIsShown && <NotificationBar handleClick={() => closeNotificationBar()} />}
        <Navbar />
        <div className="content">
          <Aside
            data={data}
            createNewProject={(task) => createNewProject(task)}
          />
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
