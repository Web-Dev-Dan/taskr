
import { useState } from 'react';
import ListItem from './ListItem';
import './ProjectContainer.css';

function ProjectContainer({
    projectName,
    projectDateCreated,
    projectTimeCreated,
    projectToDo,
    projectInProgress,
    projectComplete
}) {

    console.log(projectToDo)

    return (
        <div className="project-container">
            {/* Project Title Information */}
            <div className="main__head">
                <div className="main__head-info">
                    <input className="head-info__title" value={projectName} placeholder="Add Project Name..." type="text" />
                    <p className="head-info__date">Created on {projectDateCreated} at {projectTimeCreated}.</p>
                </div>
            </div>
            {/* Project List Content */}
            <div className="main__content">
                <div className="main__list">
                    {/* List Header */}
                    <div className="main__list-header">
                        <i className="main__list-header--icon fa-solid fa-layer-group color-primary"></i>
                        <div className="main__list-header--text">
                            <h3 className="list-header__title">To Do</h3>
                            <p className="list-header__subtitle">2 tasks remaining</p>
                        </div>
                    </div>
                    {/* List Button */}
                    <button className="list__add-btn btn">
                        <i className="list__add-btn--icon fa-solid fa-circle-plus"></i>
                        <p className="list__add-btn--text">Add Task</p>
                    </button>
                    {/* List */}
                    <div className="list">
                        {/* List Items */}
                        {projectToDo.map(item => <ListItem key={item.id} />)}
                    </div>
                </div>

                <div className="main__list">
                    {/* List Header */}
                    <div className="main__list-header">
                        <i className="main__list-header--icon fa-solid fa-trowel-bricks color-yellow"></i>
                        <div className="main__list-header--text">
                            <h3 className="list-header__title">In Progress</h3>
                            <p className="list-header__subtitle">2 tasks remaining</p>
                        </div>
                    </div>
                    {/* List Button */}
                    <button className="list__add-btn btn">
                        <i className="list__add-btn--icon fa-solid fa-circle-plus"></i>
                        <p className="list__add-btn--text">Add Task</p>
                    </button>
                    {/* List */}
                    <div className="list">
                        {/* List Items */}
                        {projectInProgress.map(item => <ListItem key={item.id} />)}
                    </div>
                </div>

                <div className="main__list">
                    {/* List Header */}
                    <div className="main__list-header">
                        <i className="main__list-header--icon fa-solid fa-fire color-green"></i>
                        <div className="main__list-header--text">
                            <h3 className="list-header__title">Complete</h3>
                            <p className="list-header__subtitle">2 tasks remaining</p>
                        </div>
                    </div>
                    {/* List Button */}
                    <button className="list__add-btn btn">
                        <i className="list__add-btn--icon fa-solid fa-circle-plus"></i>
                        <p className="list__add-btn--text">Add Task</p>
                    </button>
                    {/* List */}
                    <div className="list">
                        {/* List Items */}
                        {projectComplete.map(item => <ListItem key={item.id} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectContainer;