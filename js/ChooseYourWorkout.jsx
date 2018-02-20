import React from "react";

class WorkoutName extends React.Component {
    render() {
        return (
            <h3 onClick={this.props.show}>{this.props.name}</h3>
        )
    }
}

class Exercises extends React.Component {
    render() {
        return this.props.isOpen && (
            <div>
                {this.props.exercises}
                {this.props.description}
            </div>
        )
    }
}


class Workout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    showWorkout = () => {
        this.setState({
            open: true
        })
    };

    render() {
        return (
            <li>
                <WorkoutName name={this.props.data.name} show={this.showWorkout}/>
                <Exercises exercises={this.props.data.exercises} description={this.props.data.description} isOpen={this.state.open}/>
            </li>
        )
    }
}


export default class ChooseYourWorkout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            workouts: []
        };

        fetch(`http://localhost:3000/workouts`)
            .then(response => {
                // console.log(response);
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('err');
                }
            })
            .then(data => {
                console.log(data);
                this.setState({
                    workouts: data
                })
            })
    }

    render() {
        // console.log(this.state)
        const workouts = this.state.workouts.map(workout => {
            return <Workout key={workout.id} data={workout}/>
        });
        return (
            <div className='workoutList'>
                <h1>choose your workout!</h1>
                <ul>
                    <li>the benchmark girls
                        <ul>
                            {workouts}
                        </ul>
                    </li>
                    <li>hero wods</li>
                    <li>tabata</li>
                    <li>stopwatch</li>
                </ul>
            </div>
        )
    }
}