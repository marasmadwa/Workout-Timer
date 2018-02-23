import React from 'react';

export default class UserName extends React.Component {

    render() {
        return (
            <div className='athleteBox'>
                <div className='athleteInfo'>
                    <p>Athlete name:</p>
                    <input id='athlete' type="text" value={this.props.athlete} onChange={this.props.athleteName}/>

                </div>
                <div className='error'>
                    <p>{this.props.error}</p>
                </div>
            </div>
        )
    }
}