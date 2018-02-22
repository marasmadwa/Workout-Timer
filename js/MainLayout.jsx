import React from "react";
import ChooseYourWorkout from './ChooseYourWorkout.jsx'
import DashBoard from './DashBoard.jsx'


export default class MainLayout extends React.Component {
    render() {
        return (
            <div className='row'>
                <DashBoard scores ={this.props.scores}/>
                <ChooseYourWorkout workoutName = {this.props.workoutName}/>
            </div>
        )
    }
}