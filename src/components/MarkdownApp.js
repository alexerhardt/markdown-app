import React from 'react';
import NavBar from './NavBar';
import MainPane from './MainPane';

class MarkdownApp extends React.Component
{
    render()
    {
        return (
            <div className="wrapper-outermost">
                <NavBar />
                <MainPane />
            </div>
        )
    }
}

export default MarkdownApp;