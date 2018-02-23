import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './Timer.jsx';
import MainLayout from './MainLayout.jsx';
import UserName from './UserName.jsx';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: 0,
            name: '',
            scores: [],
            athlete: '',
            error: ""
        }
    }

    setError = (error) =>{
        this.setState({
            error: error
        })
    };

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
                timer: this.state.timer,
                athlete: this.state.athlete
            };
            this.setState({
                scores: [...this.state.scores, score]
            })
        });

    };

    getAthleteName = (event) => {
        this.setState({
            error: this.state.error,
            [event.target.id]: event.target.value
        });
    };


    render() {
        return (
            <section className='mainLayout'>
                <div className='container'>
                    <div className='workoutZone'>
                        <UserName athleteName={this.getAthleteName} error = {this.state.error} />
                        <Timer timer={this.getWorkoutTime} athlete={this.state.athlete} error={this.setError}/>
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