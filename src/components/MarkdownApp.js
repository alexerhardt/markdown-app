import React from 'react';
import NavBar from './NavBar';
import MainPane from './MainPane';
const marked = require('marked');

class MarkdownApp extends React.Component
{
    state = {
        windowPosition: MainPane.windowStates.INIT,
    }

    handleToggleClick = () => {
        const wstates = MainPane.windowStates;
        const oldPos = this.state.windowPosition;
        const newPos = oldPos ==  wstates.LEFT ? wstates.RIGHT : wstates.LEFT;
    
        this.setState(() => ({
            windowPosition: newPos
        }));
    }

    render()
    {
        return (
            <div className="wrapper-outermost">
                <NavBar />
                <MainPane 
                    windowPosition={this.state.windowPosition} 
                    handleToggleClick={this.handleToggleClick}
                />
            </div>
        )
    }
}

export default MarkdownApp;