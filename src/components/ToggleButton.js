import React from 'react';

class ToggleButton extends React.Component 
{
    render()
    {
        return (
            <button 
                onClick={this.props.handleToggleClick}
                className="toggle-btn"
            >
                Switch Editor Mode
            </button>
        )
    }
}
 export default ToggleButton;
