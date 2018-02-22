import React from "react";


export default class DashBoard extends React.Component {

    render() {
        const choosenWorkouts = this.props.scores.map(scores => {
            // console.log(scores);
            // const formatedTime = scores.timer * 0.01;

            const formatedTime = (scores) => {
                scores = Number(scores);
                let h = Math.floor(scores / 360000);
                let m = Math.floor(scores / 6000 % 60 );
                let s = Math.floor(scores / 100 % 60);
                let ms = Math.floor(scores % 100);

                let hDisplay = h > 0 ? h + (h === 1 ? "h : " : "h : ") : "";
                let mDisplay = m > 0 ? m + (m === 1 ? " min : " : " min : ") : "";
                let sDisplay = s > 0 ? s + (s === 1 ? " s : " : " s : ") : "";
                let msDisplay = ms > 0 ? ms + (ms === 1 ? " cs : " : " cs ") : "";
                return hDisplay + mDisplay + sDisplay + msDisplay;
            };


            return <li key={scores.name}>your workout: {scores.name} <br/>
                your time: {formatedTime(scores.timer)}</li>
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

// {scores.timer} to do your time jak coś!