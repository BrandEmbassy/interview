import * as React from "react";
import '../styles/reset.css';
import '../styles/App.scss';

export default class App extends React.Component<undefined, undefined> {
    render() {
        return (
            <div className="App">
                {this.props.children}
            </div>
        );
    }
}
