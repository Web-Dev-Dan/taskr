
import { useState } from 'react';
import EmptyListDisplay from './EmptyListDisplay';
import ListItem from './ListItem';
import './ProjectContainer.css';

function ProjectContainer({
    projectId,
    projectName,
    projectDateCreated,
    projectTimeCreated,
    projectToDo,
    projectInProgress,
    projectComplete,
    ticketOpened,
    updateProjectTitleInput,
    AddTaskBtnClicked
}) {

    console.log(`PROJECT ID IS ${projectId}!!!!`)
    console.log(projectToDo)

    return (
        <div className="project-container">
            {/* Project Title Information */}
            <div className="main__head">
                <div className="main__head-info">
                    <input onChange={(e) => updateProjectTitleInput(e, projectId)} className="head-info__title" value={projectName} placeholder="Add Project Name..." type="text" />
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
                            <p className="list-header__subtitle">{projectToDo.length} {projectToDo.length === 1 ? 'task' : 'tasks'} remaining</p>
                        </div>
                    </div>
                    {/* List Button */}
                    <button onClick={() => AddTaskBtnClicked(projectId, 'toDo')} className="list__add-btn btn">
                        <i className="list__add-btn--icon fa-solid fa-circle-plus"></i>
                        <p className="list__add-btn--text">Add Task</p>
                    </button>
                    {/* List */}
                    <div className="list list--to-do">
                        {/* List Items */}
                        {projectToDo.length === 0 && <EmptyListDisplay />}
                        {projectToDo.map(item => <ListItem
                            key={item.id}
                            id={item.id}
                            category='toDo'
                            title={item.name}
                            author={item.author}
                            timeCreated={item.dateCreated}
                            description={item.description}
                            tag={item.tag}
                            comments={item.comments}
                            ticketOpened={ticketOpened}
                        />)}
                    </div>
                </div>

                <div className="main__list">
                    {/* List Header */}
                    <div className="main__list-header">
                        <i className="main__list-header--icon fa-solid fa-trowel-bricks color-yellow"></i>
                        <div className="main__list-header--text">
                            <h3 className="list-header__title">In Progress</h3>
                            <p className="list-header__subtitle">{projectInProgress.length} {projectInProgress.length === 1 ? 'task' : 'tasks'} remaining</p>
                        </div>
                    </div>
                    {/* List Button */}
                    <button onClick={() => AddTaskBtnClicked(projectId, 'inProgress')} className="list__add-btn btn">
                        <i className="list__add-btn--icon fa-solid fa-circle-plus"></i>
                        <p className="list__add-btn--text">Add Task</p>
                    </button>
                    {/* List */}
                    <div className="list list--in-progress">
                        {/* List Items */}
                        {projectInProgress.length === 0 && <EmptyListDisplay />}
                        {projectInProgress.map(item => <ListItem
                            key={item.id}
                            id={item.id}
                            category='inProgress'
                            title={item.name}
                            author={item.author}
                            timeCreated={item.dateCreated}
                            description={item.description}
                            tag={item.tag}
                            comments={item.comments}
                            ticketOpened={ticketOpened}
                        />)}
                    </div>
                </div>

                <div className="main__list">
                    {/* List Header */}
                    <div className="main__list-header">
                        <i className="main__list-header--icon fa-solid fa-fire color-green"></i>
                        <div className="main__list-header--text">
                            <h3 className="list-header__title">Complete</h3>
                            <p className="list-header__subtitle">{projectComplete.length} {projectComplete.length === 1 ? 'task' : 'tasks'} remaining</p>
                        </div>
                    </div>
                    {/* List Button */}
                    <button onClick={() => AddTaskBtnClicked(projectId, 'complete')} className="list__add-btn btn">
                        <i className="list__add-btn--icon fa-solid fa-circle-plus"></i>
                        <p className="list__add-btn--text">Add Task</p>
                    </button>
                    {/* List */}
                    <div className="list list--complete">
                        {/* List Items */}
                        {projectComplete.length === 0 && <EmptyListDisplay />}
                        {projectComplete.map(item => <ListItem
                            key={item.id}
                            id={item.id}
                            category='complete'
                            title={item.name}
                            author={item.author}
                            timeCreated={item.dateCreated}
                            description={item.description}
                            tag={item.tag}
                            comments={item.comments}
                            ticketOpened={ticketOpened}
                        />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectContainer;