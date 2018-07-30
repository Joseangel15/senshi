import React, {Component} from 'react';
import Navigation from '../Navigation/Navigation';
import './Instructor_Info.css';
import axios from 'axios';


class Instructor_Info extends Component {
    constructor(){
        super()

        this.state = {

            school_instructor_name: '',
            school_instructor_rank: '',
            school_instructor_picture: '',
            school_instructor_bio: '',
            

        }
    }
    
    componentDidMount() {

        console.log(this.props.match.params.id)
        axios.get(`/api/School/${this.props.match.params.id}`).then(res => {
            console.log(res.data)
            this.setState({ 
                
                school_instructor_name: res.data[0].school_instructor_name,
                school_instructor_rank: res.data[0].school_instructor_rank,
                school_instructor_picture: res.data[0].school_instructor_picture,
                school_instructor_bio: res.data[0].school_instructor_bio,
                

                
            })
        })
        
    }

    

    render(){
        return (
            <div >
                <Navigation />

                <div className='wholeBody'>

                    <h3>Instructor Information</h3>

                    <div className='upperBox3'>
                        <div className='instructPic'>
                            <img src={this.state.school_instructor_picture} alt="instructor" className='toshiro'/>
                        </div>
                        <div className='nameAndRank'>
                            <div className='instName'>
                                {this.state.school_instructor_name}
                            </div>
                            <div className='instRank'>
                                {this.state.school_instructor_rank}
                            </div>
                        </div>
                    </div>
                    <div className='lowerBox3'>

                        <div className='bio'>
                            {this.state.school_instructor_bio}
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Instructor_Info;


