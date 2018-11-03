import React from 'react';
import ToggleButton from './ToggleButton';

class MainPane extends React.Component
{
    render()
    {
        return (
            <div className="main-pane-wrapper">
                <div className="sub-pane-wrapper sub-pane-editor">
                    <div id="editor">Editor</div>
                </div>
                <div className="sub-pane-wrapper sub-pane-preview">
                    <div id="preview"></div>
                </div>
                <div className="sub-pane-wrapper sub-pane-button">
                    <ToggleButton />
                </div>
            </div>
        )
    }
}

export default MainPane;