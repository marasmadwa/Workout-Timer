import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './Timer.jsx';
import MainLayout from './MainLayout.jsx';


class App extends React.Component {
    render() {
        return (
            <div className='container'>
                <Timer/>
                <MainLayout/>
            </div>
        )
    }
}


document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});