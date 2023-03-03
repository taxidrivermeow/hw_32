import React, {Component} from 'react';

class Block extends Component {
    changeColorFun = () => {
        if (this.props.size === 'large') {
            this.props.changeColor();
        } else {
            this.props.changeColor(this.props.color);
        }
    }

    render() {
        return (
            <div className={`${this.props.color} ${this.props.size}`}
                 onClick={this.changeColorFun}>
            </div>
        );
    }
}

export default Block;