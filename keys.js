import React, {Component} from 'react';
import './calculator.css';
class KeyPadComponent extends Component {

    render() {
        return (
            <div class="button">
                <button id="key" name="AC" onClick={e => this.props.onClick(e.target.name)}>AC</button>
                <button id="key" name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button>
                <button id="key" name="/" onClick={e => this.props.onClick(e.target.name)}>÷</button>
                <br/>
                <button id="key" name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button id="key" name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button id="key" name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
                <button id="key" name="*" onClick={e => this.props.onClick(e.target.name)}>x</button>
                <br/>
                <button id="key" name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button id="key" name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button id="key" name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
                <button id="key" name="-" onClick={e => this.props.onClick(e.target.name)}>-</button>
                <br/>
                <button id="key" name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button id="key" name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button id="key" name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
                <button id="key" name="+" onClick={e => this.props.onClick(e.target.name)}>+</button>
                <br/>
                <button id="key" name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
                <button id="key" name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
                <button id="key" name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
                
            </div>
        );
    }
}


export default KeyPadComponent;