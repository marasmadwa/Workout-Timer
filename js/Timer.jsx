import React from 'react';

const houndredOfSeconds = (sec) => {
    const seconds = Math.floor(sec / 100);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    return <div className='StopWatch'>
    <span className='hours'>{(hours < 10 ? '0' + hours : hours) % 60}</span>  : <span className='minutes'>{(minutes < 10 ? '0' + minutes : minutes) % 60}</span> : <span className='seconds'>{(seconds < 10 ? '0' + seconds : seconds) % 60}</span> : <span className='hundredOfSeconds'>{('0' + sec % 100).slice(-2)}</span>
    </div>
};
// return (hours < 10 ? '0' + hours : hours) % 60 + ' : ' + (minutes < 10 ? '0' + minutes : minutes) % 60 + ' : ' + (seconds < 10 ? '0' + seconds : seconds) % 60 + ' : ' + ('0' + sec % 100).slice(-2);

export default class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hundredOfSecondsRun: 0,
            stopCounter: null
        };
        this.counter = null;
    }

    handleStartClick() {
        this.counter = setInterval(() =>
            this.setState({
                hundredOfSecondsRun: this.state.hundredOfSecondsRun + 1
            }), 10);
    }

    handleStopClick() {
        clearInterval(this.counter);
        this.setState({
            stopCounter: this.counter
        });
    }

    handleResetClick() {
        this.props.timer(this.state.hundredOfSecondsRun);
        clearInterval(this.counter);
        this.setState({
            hundredOfSecondsRun: 0,
        });
    }

    render() {
        return (
            <div className='timer'>
                    {houndredOfSeconds(this.state.hundredOfSecondsRun)}

                    {(this.state.hundredOfSecondsRun === 0 || this.counter === this.state.stopCounter ?
                            <button className='strBtn' onClick={this.handleStartClick.bind(this)}>Start!</button>
                            : <button className="stBtn" onClick={this.handleStopClick.bind(this)}>Stop!</button>
                    )}

                    {(this.state.hundredOfSecondsRun !== 0 && this.counter === this.state.stopCounter ?
                            <button className='resBtn' onClick={this.handleResetClick.bind(this)}>Reset</button> : null
                    )}
            </div>
        )
    }
}
