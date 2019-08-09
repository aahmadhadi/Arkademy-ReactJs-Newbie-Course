import React, { Component } from 'react';
import Coffee from './components/Coffee';
import Glass from './components/Glass';
import Saucer from './components/Saucer';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            number : 20,
        }
    }
    handleClick(){
        this.setState({ number : this.state.number + 2 })
    }
    render() {
        return (
            <div>
                <button onClick={()=> this.handleClick()}>
                    Increase Saucer !
                </button>
                <Coffee
                    waterVolume={1}
                    bean='Robusta'
                    type='expresso'
                />
                <Glass
                    color='#F1F1FF'
                />
                <Saucer
                    width={this.state.number}
                />
            </div>
        )
    }
}