import React from 'react';

interface Props {};
interface State {
    text : string
}

class App extends React.Component<Props, State>
{
    constructor(props){
        super(props);
        this.state = {
            text : 'Server-Side Rendering'
        };
    }
    render(){
        return (
            <div>
                <h1>{this.state.text}</h1>
            </div>
        )
    }
}

export default App;