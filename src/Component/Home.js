import React, { Component } from 'react';
import profile from '../Assets/profile.jpg';
import '../index.css';

class Home extends Component {
    render() {
        return (
         <div className='home'>
            <img className="img-responsive" src={profile} alt="profile"/>
                <p>
                    Hi I am Tadj and I am a software Engineer,
                    I like solving problems and building things. 
                </p>
         </div>
        );
    }
}



export default Home;