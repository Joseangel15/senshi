import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import './About.css';


class About extends Component {





    render() {
        return (
            <div className='mainBody'>
                <Navigation/>
                <div>
                    <h1>What is SENSHI?</h1>
                </div>

                <div className='middleSection'>
                    <div className='picture'>
                        <div className='paragraph'>

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

                <div className='aboutLowerPart'>

                </div>

            </div>
        )
    }
}

export default About;