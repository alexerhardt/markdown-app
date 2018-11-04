import React from 'react';
import ToggleButton from './ToggleButton';
const marked = require('marked');


const defaultText = `
# Welcome to tiny.md!

tiny.md is a simple markdown editor and previewer made with React.

## Features

tiny.md supports all common Markdown tags.

### Bulletpoints

Make original lists with bulletpoints:

* Item 1
* Item 2
* Item 3

Never forget a thing again!

### Code Inlining and Code Blocks

You can inline code:

\`console.log("World, hello!")\`

And create code blocks:

\`\`\`
for(i = 0; i < 100; i++) {
    console.log("World, hello!");
}
\`\`\`

`

class MainPane extends React.Component
{
    FIRST_TIME = 1;

    state = {
        editorValue: defaultText,
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

MainPane.defaultText = `
    # Welcome to tiny.md!

    tiny.md is a simple markdown editor and previewer made with React.

    ## Features

    tiny.md supports all common Markdown tags.

    ### Bulletpoints

    Make original lists with bulletpoints:

    * Item 1
    * Item 2
    * Item 3
    
    Never forget a thing again!
`

export default MainPane;