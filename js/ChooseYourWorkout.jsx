import React from "react";

class BenchmarkGirlName extends React.Component {

    render() {
        return (
            <span onClick={this.props.show}>{this.props.name}</span>
        )
    }
}


class BenchmarkWorkout extends React.Component {
    render() {
        return this.props.isOpen && (
            <div>
                <ul>
                    <li>{this.props.workout.exercises[0]}</li>
                    <li>{this.props.workout.exercises[1]}</li>
                    <li>{this.props.workout.exercises[2]}</li>
                    <li>{this.props.workout.exercises[3]}</li>
                    <li>{this.props.workout.descritpion}</li>
                    <button className='thisWorkoutBtn' onClick={() => {
                        this.props.workoutName(this.props.workout.name)
                    }}>this one!
                    </button>
                </ul>
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
        if (this.state.open === false) {
            this.setState({
                open: true
            })
        } else {
            this.setState({
                open: false
            })
        }
    };

    render() {
        return (
            <li>
                <BenchmarkGirlName name={this.props.data.name} show={this.showWorkout}/>
                <BenchmarkWorkout workout={this.props.data} isOpen={this.state.open}
                                  workoutName={this.props.workoutName}/>
            </li>
        )
    }
}

class RandomWod extends React.Component {
    render() {
        return (
            <li>
                {this.props.data.name}
                {this.props.data.exercises}
            </li>
        )
    }
}

export default class ChooseYourWorkout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            workouts: [],
            randomWod: []
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
                // console.log(data);
                this.setState({
                    workouts: data
                })
            });

        // fetch(`http://localhost:3000/randomWod`)
        //     .then(response => {
        //         // console.log(response);
        //         if (response.ok) {
        //             return response.json();
        //         } else {
        //             throw new Error('err');
        //         }
        //     })
        //     .then(data => {
        //         console.log(data);
        //         this.setState({
        //             randomWod: data
        //         })
        //     })
    }

    render() {
        const workouts = this.state.workouts.map(workout => {
            return <Workout key={workout.name} data={workout} workoutName={this.props.workoutName}/>
        });
        const randomWod = this.state.randomWod.map(randomWod => {
            return <RandomWod key={randomWod.name} data={randomWod}/>
        });
        return (
            <div className="workoutBox">
                <h1>choose your workout!</h1>
                <h2> > the benchmark girls:</h2>
                <ul className='workoutList'>
                    <li>{workouts}</li>
                </ul>
                {/*<h2> > Random WOD:</h2>*/}
                {/*<button className='randomWodBtn'>Get Random WOD!</button>*/}
                <ul className='randomWod'>
                    <li>{randomWod}</li>
                </ul>
            </div>
        )
    }
}