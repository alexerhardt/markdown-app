import React from 'react';
import Defaults from '../data/Defaults';
const marked = require('marked');

class MainPane extends React.Component
{
    FIRST_TIME = 1;

    state = {
        editorValue: Defaults.editorText,
    }

    createMarkup = (string) => {
        return {__html: marked(string)};
    }

    handleEditorFocus = () => {
        if (this.FIRST_TIME) {
            this.FIRST_TIME = 0;
            this.setState(() => ({
                editorValue: ""
            }));
        }
    }

    handleEditorChange = (event) => {
        this.setState({editorValue: event.target.value});
    }

    render()
    {
        return (
            <div className="main-pane-wrapper">
                <div id="sliding-window" className={this.props.windowPosition}>
                    <div className="sub-pane-text sub-pane-editor">
                        <textarea 
                            id="editor"
                            value={this.state.editorValue}
                            onFocus={this.handleEditorFocus}
                            onChange={this.handleEditorChange}
                        >
                        </textarea>
                    </div>
                    <div className="sub-pane-text sub-pane-preview">
                        <div id="preview" 
                             dangerouslySetInnerHTML={this.createMarkup(this.state.editorValue)}>
                        </div>
                    </div>
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