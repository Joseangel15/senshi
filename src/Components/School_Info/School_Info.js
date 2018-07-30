import React, {Component} from 'react';
import Navigation from '../Navigation/Navigation';
import './School_Info.css';
// import {connect} from 'react-redux';
// import {getSchoolData} from '../../ducks/reducer';
import axios from 'axios';
import {Link} from 'react-router-dom';



class School_Info extends Component {
    constructor(){
        super()

        this.state ={
            school: [],
            editing: false,
            school_name: '',
            school_info: '',
            school_picture: '',
            school_instructor_name: '',
            school_instructor_rank: '',
            school_instructor_picture: '',
            school_phone: '',
            school_email: '',
            school_mastyle: '',
            id: ''


        }
    }


   
    componentDidMount() {
        console.log(this.props.match.params.id)
        axios.get(`/api/School/${this.props.match.params.id}`).then(res => {
            console.log(res.data)
            this.setState({ 
                school_name: res.data[0].school_name,
                school_info: res.data[0].school_info,
                school_picture: res.data[0].school_picture,
                school_instructor_name: res.data[0].school_instructor_name,
                school_instructor_rank: res.data[0].school_instructor_rank,
                school_phone: res.data[0].school_phone,
                school_email: res.data[0].school_email,
                school_mastyle: res.data[0].school_mastyle,
                school_instructor_picture: res.data[0].school_instructor_picture,
                id: res.data[0].id,
                school: res.data[0]
            

            })
            console.log(this.state.id)
        })
        
    }

    getInstructorData = () => {
        // const id = this.state.id
        
        axios.get(`/api/School/${this.state.id}`).then(res => {
            this.setState({
                
                school: res.data
                
            });
            console.log(this.state.id)
            console.log(this.state.school)
        });
    };

    

    render() {

        const divMargin = {
            margin: '10px'
        }

        


        return (
            <div className='fullPage'>

                <Navigation/>

                <div className='japanBack'>

                    <div className='schoolPicture'>
                        <img src={this.state.school_picture} alt="school" className='picture2'/>
                    </div>

                    <div className='schoolContainer'>
                        School Information

                        <div className='upperContainer'>

                            <div className='schoolName'>
                                {this.state.school_name}
                            </div>

                            
                            <div className='superDiv'>
                                <Link 
                                to={`/Instructor_Info/${this.state.id}`}
                                >
                                <div
                                    value={this.state.school}
                                    className='instrucPicture'
                                    onClick={ () => this.getInstructorData(this.state.id) }
                                    >

                                    <img src={this.state.school_instructor_picture} alt="instructor" className='instructor'/>

                                </div></Link>
                           
                            <div>

                                <div className='instrNameAndRank' style={divMargin} className='instructorPicture'>

                                    <div className='instructorName'>{this.state.school_instructor_name}</div>
                                    
                                    <div> Rank {this.state.school_instructor_rank} </div>

                                </div>

                                <div className='schoolMaStyle'>

                                    School MA Style

                                    <div style={divMargin}>

                                        {this.state.school_mastyle}

                                    </div>
                                </div>

                            </div>

                            </div>

                        </div>

                        <div className='lowerContainer'>

                            <div className='schoolInformation'>
                                    {this.state.school_info}

                                <div style={divMargin}>
                                    Contact Info

                                    <div style={divMargin}>
                                        {this.state.school_phone}
                                    </div>

                                    <div style={divMargin}>
                                        {this.state.school_email}
                                    </div>

                                </div>

                            </div>


                        </div>

                    </div>

                    
                </div>
            </div>
        )
    }
} 




export default  School_Info;