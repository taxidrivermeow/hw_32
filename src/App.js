import './App.css';
import React, {Component} from "react";
import Block from "./components/Block";

const colors = ['red', 'green', 'blue', 'yellow'];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: '',
        };
    }

    setColor = (color = '') => {
        this.setState({color: color})
    };

    render() {
        if (this.state.color) {
            return <div className={"outerDiv"}>
                       <Block color={this.state.color} size={'large'} changeColor={this.setColor}/>
                   </div>
        } else {
            const blocks = colors.map((color, index) => <Block key={index} color={color} size={'small'} changeColor={this.setColor}/>);
            return <div className={"outerDiv"}>
                {blocks}
            </div>
        }
    }
}

export default App;
