import React from 'react';
import ToggleButton from './ToggleButton';

class NavBar extends React.Component 
{
    render()
    {
        return (
            <div className="nav-bar">
                <p className="logo mt-0">tiny.md</p>
                <p className="sub-title">A simple Markdown editor, by Alex Erhardt</p>
                <ToggleButton 
                    handleToggleClick={this.props.handleToggleClick}
                />
            </div>
        )
    }
}

export default NavBar;