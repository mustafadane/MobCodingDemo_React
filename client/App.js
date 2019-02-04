import React, { Component } from 'react'
import axios from 'axios'

export class App extends Component {
    async componentDidMount() {
        const { data } = await axios.get('https://opentdb.com/api.php?amount=10')
        console.log(data)
    }
    render() {
        return (
            <div>
                <h1>Welcome to our trivia quiz!</h1>
                <span>
                    <h2>Question:</h2>
                    <h2>This is a question</h2>
                </span>
                <div className='choices'>
                    <button>Choice 1</button>
                    <button>Choice 2</button>
                    <button>Choice 3</button>
                    <button>Choice 4</button>
                </div>
            </div>
        )
    }
}

export default App
