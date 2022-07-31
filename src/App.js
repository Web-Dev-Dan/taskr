import { useEffect, useInsertionEffect, useState, useSyncExternalStore } from 'react';
import Aside from './components/Aside/Aside';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import NotificationBar from './components/NotificationBar/NotificationBar';


function App() {
  // Notification Bar:
  const [notificationBarIsShown, setNotificationBarIsShown] = useState(true);
  function closeNotificationBar() {
    setNotificationBarIsShown(false);
  }

  // Placeholder Data:
  const [data, setData] = useState({
    "items": [
      {
        "id": 1,
        "name": "Portfolio",
        "dateCreated": 'Friday 29 July, 2022',
        "timeCreated": '10:20'
      }, {
        "id": 2,
        "name": "Mamoru",
        "dateCreated": 'Friday 29 July, 2022',
        "timeCreated": '10:20'
      }, {
        "id": 3,
        "name": "Taskr",
        "dateCreated": 'Friday 29 July, 2022',
        "timeCreated": '10:20'
      }, {
        "id": 4,
        "name": "Wordle Clone",
        "dateCreated": 'Friday 29 July, 2022',
        "timeCreated": '10:20'
      }, {
        "id": 5,
        "name": "JavaScript To-Do List",
        "dateCreated": 'Friday 29 July, 2022',
        "timeCreated": '10:20'
      }
    ]
  });

  // Get Current Date:
  function getCurrentDate() {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const date = new Date();
    return `${weekdays[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`;
  }

  // Get Current Time:
  function getCurrentTime() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    if (hours < 10) {
      hours = `${0}${hours}`;
    }

    if (minutes < 10) {
      minutes = `${0}${minutes}`;
    }

    return `${hours}:${minutes}`;
  }

  // Create New Project:
  function createNewProject(task) {
    console.log('Works: ' + task);

    setData(prev => {
      prev.items.push({
        "id": prev.items.length + 1,
        "name": task,
        "dateCreated": getCurrentDate(),
        "timeCreated": getCurrentTime()
      });
      return prev;
    })
    console.log(data);
  }

  // Main Area Display:
  const [projectIsShown, setProjectIsShown] = useState(true);
  const [projectId, setProjectId] = useState(1);
  const [ticketIsShown, setTicketIsShown] = useState(false);
  const [ticketId, setTicketId] = useState(1);

  const [currentProject, setCurrentProject] = useState(data.items);

  // Select Project:
  function projectOpened(id) {
    setCurrentProject(data.items.filter(project => project.id === projectId));
    setProjectId(id);

    console.log(`Current Project: ${currentProject[0]}`);
    console.log(`Current ID: ${projectId}`);
  }

  useEffect(() => {

  }, [currentProject]);

  return (
    <div className="App">
      <div className="container">
        {notificationBarIsShown && <NotificationBar handleClick={() => closeNotificationBar()} />}
        <Navbar />
        <div className="content">
          <Aside
            data={data}
            createNewProject={(task) => createNewProject(task)}
            projectOpened={(id) => projectOpened(id)}
          />
          <Main
            data={data}
            projectIsShown={projectIsShown}
            projectId={projectId}
            ticketIsShown={ticketIsShown}
            ticketId={ticketId}
            currentProject={currentProject[0]}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
