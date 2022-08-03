
import { useState } from 'react';
import './ProjectContainer.css';

function ProjectContainer({
    projectName,
    projectDateCreated,
    projectTimeCreated
}) {

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
                        <div className="list-item">
                            <button className="list-item__button btn btn-transparent">
                                <h4 className="list-item__title">Create New Wireframe</h4>
                                <p className="list-item__info">Dan, 6h ago</p>
                                <p className="list-item__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </button>
                            <div className="list-item__footer">
                                <p className="list-item__tag">#UIDesign</p>
                                <button className="list-item__comments-btn btn btn-transparent">
                                    <i className="fa-solid fa-message"></i>
                                    <p>12</p>
                                </button>
                            </div>
                        </div>

                        <div className="list-item">
                            item
                        </div>

                        <div className="list-item">
                            item
                        </div>

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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectContainer;