import React from "react";


export default class DashBoard extends React.Component {

    render() {
        const choosenWorkouts = this.props.scores.map(scores => {
            console.log(scores);
            const formatedTime = scores.timer * 0.01 //pouszkać metody patch
            return <li key={scores.name}>your workout: {scores.name} <br/>
                your time: {scores.timer}</li>
        });
        return (
            <div className='dashboard'>
                <h2>dashboard :</h2>
                <ul>
                    {choosenWorkouts}
                </ul>
            </div>
        )
    }
}