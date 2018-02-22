import React from 'react';

export default class UserName extends React.Component{

    render(){
        return(
            <div> Athlete name:
                <input className='userName' id='athlete' type="text" value={this.props.athlete} onChange={this.props.athleteName}/>
            </div>
        )
    }
}