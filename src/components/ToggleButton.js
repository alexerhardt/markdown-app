import React from 'react';

class ToggleButton extends React.Component 
{
    render()
    {
        return (
            <button 
                onClick={this.props.handleToggleClick}
                className="toggle-btn">Toggle Pane
            </button>
        )
    }
}
 export default ToggleButton;
