import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './Timer.jsx';
import MainLayout from './MainLayout.jsx';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: 0,
            name: '',
            scores: []
        }
    }

    getWorkoutName = (name) => {
        this.setState({
            name: name
        })
    };

    getWorkoutTime = (time) => {
        this.setState({
            timer: time
        }, () => {
            const score = {
                name: this.state.name,
                timer: this.state.timer
            };
            this.setState({
                scores: [...this.state.scores, score]
            })
        })

    };


    render() {
        return (
            <section className='mainLayout'>
                <div className='container'>
                    <div className='workoutZone'>
                        <Timer timer={this.getWorkoutTime}/>
                        <MainLayout scores={this.state.scores} workoutName={this.getWorkoutName}/>
                    </div>
                </div>
            </section>
        )
    }
}


document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});