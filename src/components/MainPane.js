import React from 'react';
import ToggleButton from './ToggleButton';

class MainPane extends React.Component
{
    render()
    {
        return (
            <div className="main-pane-wrapper">
                <div id="sliding-window" className={this.props.windowPosition}>
                    <div className="sub-pane-text sub-pane-editor">
                        <textarea id="editor">
                            Editor
                            Hello world
                        </textarea>
                    </div>
                    <div className="sub-pane-text sub-pane-preview">
                        <div id="preview">Preview</div>
                    </div>
                </div>
                <div className="sub-pane-button">
                    <ToggleButton 
                        handleToggleClick={this.props.handleToggleClick}
                    />
                </div>
            </div>
        )
    }
}

const windowStates = {
    INIT: "",
    LEFT: "slide-left",
    RIGHT: "slide-right"
};
MainPane.windowStates = windowStates;

export default MainPane;