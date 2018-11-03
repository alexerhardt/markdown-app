import React from 'react';
import ToggleButton from './ToggleButton';

class MainPane extends React.Component
{
    render()
    {
        return (
            <div className="main-pane-wrapper">
                <div className="sub-pane-text sub-pane-editor">
                    <div id="editor" className="slide-in-left">Editor</div>
                </div>
                <div className="sub-pane-text sub-pane-preview">
                    <div id="preview" className="slide-up">Preview</div>
                </div>
                <div className="sub-pane-button">
                    <ToggleButton />
                </div>
            </div>
        )
    }
}

export default MainPane;