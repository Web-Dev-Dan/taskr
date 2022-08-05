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
        "timeCreated": '10:20',
        "toDo": [{
          "id": 1,
          "name": "Create New Wireframe",
          "author": "Dan",
          "dateCreated": "5 Aug '22",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "tag": "UIDesign",
          "comments": ["This is a nice project!", "Good job!", "This is a nice project!", "Good job!"]
        },
        {
          "id": 2,
          "name": "Update Email Form",
          "author": "Mike",
          "dateCreated": "1 day ago",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolore magna aliqua.",
          "tag": "Frontend",
          "comments": ["This is a nice project!", "Good job!"]
        }],
        "inProgress": [{
          "id": 1,
          "name": "Add New Projects",
          "author": "Dan",
          "dateCreated": "2 days ago",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "tag": "Frontend",
          "comments": ["This is a nice project!", "Good job!"]
        }],
        "complete": [{
          "id": 1,
          "name": "Publish Website",
          "author": "Dan",
          "dateCreated": "6h ago",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "tag": "Frontend",
          "comments": []
        }]
      }, {
        "id": 2,
        "name": "Taskr",
        "dateCreated": 'Friday 29 July, 2022',
        "timeCreated": '10:20',
        "toDo": [{
          "id": 1,
          "name": "Update Task Cards",
          "author": "Steve",
          "dateCreated": "3 days ago",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "tag": "Frontend",
          "comments": ["This is a nice project!", "Good job!", "This is a nice project!", "Good job!", "This is a nice project!", "Good job!", "This is a nice project!"]
        },
        {
          "id": 2,
          "name": "Create Dark Mode",
          "author": "Mike",
          "dateCreated": "Just Now",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "tag": "UIDesign",
          "comments": []
        }],
        "inProgress": [{
          "id": 1,
          "name": "Create List Component",
          "author": "Dan",
          "dateCreated": "2h ago",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "tag": "Frontend",
          "comments": []
        }],
        "complete": [{
          "id": 1,
          "name": "Create Item Card",
          "author": "Dan",
          "dateCreated": "1 day ago",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "tag": "Frontend",
          "comments": ["Good job!"]
        }]
      }, {
        "id": 3,
        "name": "Wordle Clone",
        "dateCreated": 'Friday 29 July, 2022',
        "timeCreated": '10:20',
        "toDo": [{
          "id": 1,
          "name": "Create Word Database",
          "author": "Mike",
          "dateCreated": "1 day ago",
          "description": "Lorem ipsum dolor sit amet.",
          "tag": "Backend",
          "comments": ["This is a nice project!", "Good job!"]
        }],
        "inProgress": [{
          "id": 1,
          "name": "Update Display Colour Palette",
          "author": "Dan",
          "dateCreated": "8h ago",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "tag": "UIDesign",
          "comments": ["This is a nice project!", "Good job!"]
        },
        {
          "id": 2,
          "name": "Create Results Modal",
          "author": "Dan",
          "dateCreated": "5h ago",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "tag": "Frontend",
          "comments": ["This is a nice project!", "Good job!"]
        }],
        "complete": [{
          "id": 1,
          "name": "Update Keyboard Colours",
          "author": "Dan",
          "dateCreated": "2 days ago",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "tag": "UIDesign",
          "comments": ["This is a nice project!", "Good job!"]
        }]
      }, {
        "id": 4,
        "name": "JavaScript To-Do List",
        "dateCreated": 'Friday 29 July, 2022',
        "timeCreated": '10:20',
        "toDo": [{
          "id": 1,
          "name": "Create New Item Cards",
          "author": "Dan",
          "dateCreated": "15h ago",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing ipsum dolor sit amet, consectetur adipiscing.",
          "tag": "Frontend",
          "comments": ["This is a nice project!", "Good job!"]
        },
        {
          "id": 2,
          "name": "Check Colour Palette",
          "author": "Mike",
          "dateCreated": "1h ago",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "tag": "UIDesign",
          "comments": ["This is a nice project!", "Good job!"]
        }],
        "inProgress": [{
          "id": 1,
          "name": "Fix Padding",
          "author": "Dan",
          "dateCreated": "5m ago",
          "description": "Lorem consectetur adipiscing elit ut labore et dolore magna aliqua.",
          "tag": "Frontend",
          "comments": ["This is a nice project!", "Good job!"]
        }],
        "complete": [{
          "id": 1,
          "name": "Update User Information Display",
          "author": "Dan",
          "dateCreated": "12h ago",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "tag": "UIDesign",
          "comments": ["This is a nice project!"]
        },
        {
          "id": 2,
          "name": "Add Link To Portfolio Website",
          "author": "Dan",
          "dateCreated": "1h ago",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "tag": "Frontend",
          "comments": ["This is a nice project!", "Good job!"]
        }]
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
    // console.log('Works: ' + task);

    setData(prev => {
      prev.items.push({
        "id": prev.items.length + 1,
        "name": task,
        "dateCreated": getCurrentDate(),
        "timeCreated": getCurrentTime(),
        "toDo": [],
        "inProgress": [],
        "complete": []
      });
      return prev;
    })

    // console.log(data);
  }

  // Main Area Display:
  const [projectIsShown, setProjectIsShown] = useState(true);
  const [projectId, setProjectId] = useState(1);
  const [ticketIsShown, setTicketIsShown] = useState(false);
  const [ticketId, setTicketId] = useState(1);

  // Select Project:
  function projectOpened(id) {
    setProjectId(id);
    setProjectIsShown(true);
    setTicketIsShown(false);
  }

  function ticketOpened(id, category) {
    setProjectIsShown(false);
    setTicketIsShown(true);
    setTicketId(id);
    // console.log(`Project ID: ${projectId} (${category} ${id})`)
  }

  return (
    <div className="App">
      <div className="container">
        {notificationBarIsShown && <NotificationBar handleClick={() => closeNotificationBar()} />}
        {/* <Navbar /> */}
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
            ticketOpened={(id, category) => ticketOpened(id, category)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
