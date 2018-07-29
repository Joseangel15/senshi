import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import './About.css';


class About extends Component {





    render() {
        return (
            <div>

                <Navigation/>

                <div className='mainBody'>

                
                        <h1 className='whatIsSenshi'>What is SENSHI?</h1>
                    

                    <div className='middleSection'>
                        
                            <div className='paragraph'>

                                <h2>Our Mission</h2>

                                <p>
                                    Prepare for training! And make it double!
                                </p>

                                <p>
                                    To protect the world by creating warriors!
                                </p>

                                <p>
                                    To unite all peoples in discipline and self-mastery!
                                </p>

                                <p>
                                    To denounce the evils of passiveness and laziness!
                                </p>

                                <p>
                                    To extend our help to the weak of heart!
                                </p>
                                                
                                <p>
                                    Senshi blasts off at the speed of light!
                                </p>

                                <p>
                                    Start training now, or prepare to fight!
                                </p>
                            </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default About;