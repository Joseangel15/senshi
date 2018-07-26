import React, {Component} from 'react';
import Navigation from '../Navigation/Navigation';
import './Edit_School.css';
import axios from 'axios';

class Edit_School extends Component {
    constructor(){
        super()

        this.state = {
            school: [],
            school_name: '',
            school_mastyle: '',
            school_picture: '',
            school_address: '',
            school_city: '',
            school_state: '',
            school_zip: '',
            school_phone: '',
            school_email: '',
            school_info: '',
            school_instructor_name: '',
            school_instructor_rank: '',
            school_instructor_picture: '',
            school_instructor_bio: '',

        }
        
        
    }
    
    componentDidMount = () => {
        
        axios.get(`/api/School/${this.props.match.params.id}`).then(res => {
            this.setState({ 
                
                school: res.data,
                school_name: res.data[0].school_name,
                school_mastyle: res.data[0].school_mastyle,
                school_picture: res.data[0].school_picture,
                school_address: res.data[0].school_address,
                school_city: res.data[0].school_city,
                school_state: res.data[0].school_state,
                school_zip: res.data[0].school_zip,
                school_phone: res.data[0].school_phone,
                school_email: res.data[0].school_email,
                school_info: res.data[0].school_info,
                school_instructor_name: res.data[0].school_instructor_name,
                school_instructor_rank: res.data[0].school_instructor_rank,
                school_instructor_picture: res.data[0].school_instructor_picture,
                school_instructor_bio: res.data[0].school_instructor_bio,
                
            })
            console.log(this.state.school_name)
        })
        
    }

    handleSchoolEdit = () => {
        axios.put('/api/School/:id').then( response => {
            this.setState({ 
                
                messages: response.data 
            
            });
        });
    }

    handleChangeInfo = () => {
        this.setState({

            school_name: '',
            school_mastyle: '',
            school_picture: '',
            school_address: '',
            school_city: '',
            school_state: '',
            school_zip: '',
            school_phone: '',
            school_email: '',
            school_info: '',
            school_instructor_name: '',
            school_instructor_rank: '',
            school_instructor_picture: '',
            school_instructor_bio: '',

        })
    }


    render(){

        const style = {
            margin: '10px'
        }
        

        return(
            <div>
                <Navigation/>
                <div style={style}>

                    Edit School 

                    <div className='createSchool'>
                        Create School
                        <div style={style}>
                            
                            School Name

                            <input 
                                value={this.state.school_name}/>

                        </div>

                        <div style={style}>
                        
                            Martial Art Style

                            <select >
                                 <option value="Select Style">{this.state.school_mastyle}</option>
                                 <option value="Karate">Karate</option>
                                 <option value="Tai Chi">Tai Chi</option>
                                 <option value="Kung Fu">Kung Fu</option>
                                 <option value="Wing Chun">Wing Chun</option>
                                 <option value="Krav Maga">Krav Maga</option>
                                 <option value="Kickboxing">Kickboxing</option>
                                 <option value="MMA">MMA</option>
                                 <option value="Tae Kwon Do">Tae Kwon Do</option>
                                 <option value="Muay Tai">Muay Tai</option>
                                 <option value="Boxing">Boxing</option>
                                 <option value="Kenjutsu">Kenjutsu</option>
                                 <option value="Kendo">Kendo</option>
                            </select>

                        </div>

                        <div style={style}>
                        
                            Picture

                            <input 
                                value={this.state.school_name}/>

                        </div>

                    </div>

                    <div className='contactInformation'>

                        Contact Information 

                        <div style={style}>Address
                            <input 
                                value={this.state.school_address}
                                onChange={this.handleChangeInfo}/>
                        </div>
                        <div style={style}>City
                            <input 
                                value={this.state.school_city}/>
                        </div>
                        <dir style={style}>state
                            <input 
                                value={this.state.school_state}/>
                        </dir>
                        <div style={style}>Zip Code
                            <input 
                                value={this.state.school_zip}/>
                        </div>
                        <div style={style}>Phone
                            <input 
                                value={this.state.school_phone}/>
                        </div>
                        <div style={style}>Email
                            <input 
                                value={this.state.school_email}/>
                        </div>
                        <div style={style}>School Info
                            <input 
                                value={this.state.school_info}/>
                        </div>
                    </div>
                    <div className='instructorInformation'>
                        Instructor Information
                        <div style={style}>Instructor Name
                            <input 
                                value={this.state.school_instructor_name}/>
                        </div>
                        <div style={style}>Rank
                            <input 
                                value={this.state.school_instructor_rank}/>
                        </div>
                        <div style={style}>Picture
                            <input 
                                value={this.state.school_instructor_picture}/>
                        </div>
                        <div style={style}>Bio
                            <input 
                                value={this.state.school_instructor_bio}/>
                        </div>
                    </div>
                    <div>
                        {/* <Link to='/Account_Page'> */}
                        <button onClick={ this.createSchool }>Submit</button>
                        {/* </Link> */}
                    </div>
                </div>
                <div className='lowerDiv'>

                </div>
            </div>
        )
    }

}

export default Edit_School;