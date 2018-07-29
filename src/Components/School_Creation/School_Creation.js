import React, {Component} from 'react';
import Navigation from '../Navigation/Navigation';
import './School_Creation.css';
// import {Link} from 'react-router-dom';
import axios from 'axios';


class School_Creation extends Component {
    constructor(){
        super()

        this.state = {
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

    handleInputs = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    createSchool = () => {
        const { school_name, school_mastyle, school_address, school_city, school_state, school_zip, school_phone, school_email, school_info, school_instructor_name, school_instructor_rank, school_instructor_bio, school_instructor_picture, school_picture, } = this.state;
        
        if(!school_name || !school_mastyle || !school_address || !school_city || !school_state || !school_zip || !school_phone || !school_email || !school_info || !school_instructor_name || !school_instructor_rank || !school_instructor_bio) return;
        

        axios.post('/api/Schools', { school_name, school_mastyle, school_address, school_city, school_state, school_zip, school_phone, school_email, school_info, school_instructor_picture, school_picture, school_instructor_name, school_instructor_rank, school_instructor_bio }).then(res => {
            
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
        })

        // axios.post to send the created school to the mySchools table, where it needs to record the school name, school ID, userId and mySchools Id. 
    }
        

    render(){

        const style = {
            margin: '10px'
        }

        const inputMargin = {
            marginLeft: '20px',
            alignContent: 'center'
        }

        return(
            <div>
                <Navigation/>
                <div 
                    className='fullDiv'>

                    <div className='createSchool'>
                        Create School
                        <div style={style}>School Name
                            <input 
                                style = {inputMargin}
                                type="text" 
                                name='school_name' 
                                onChange={this.handleInputs} 
                                value={ this.state.school_name }/>
                        </div>
                        <div style={style}>Martial Art Style
                            <select 
                                style = {inputMargin}
                                type="text" 
                                name='school_mastyle' 
                                onChange={this.handleInputs}
                                value={ this.state.school_mastyle }>
                                 <option value="Select Style">Selecte Style</option>
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
                        <div style={style}>Picture
                            <input
                                style = {inputMargin} 
                                type="text" 
                                name='school_picture' 
                                onChange={this.handleInputs}
                                value={ this.state.school_picture }/>
                        </div>
                    </div>
                    <div className='contactInformation'>
                        Contact Information 
                        <div style={style}>Address
                            <input 
                                style = {inputMargin}
                                type="text" 
                                name='school_address' 
                                onChange={this.handleInputs}
                                value={ this.state.school_address }/>
                        </div>
                        <div style={style}>City
                            <input 
                                style = {inputMargin}
                                type="text" 
                                name='school_city' 
                                onChange={this.handleInputs}
                                value={ this.state.school_city }/>
                        </div>
                        <dir style={style}>state
                            <input 
                                style = {inputMargin}
                                type="text" 
                                name='school_state' 
                                onChange={this.handleInputs}
                                value={ this.state.school_state }/>
                        </dir>
                        <div style={style}>Zip Code
                            <input 
                                style = {inputMargin}
                                type="text" 
                                name='school_zip' 
                                onChange={this.handleInputs}
                                value={ this.state.school_zip }/>
                        </div>
                        <div style={style}>Phone
                            <input 
                                style = {inputMargin}
                                type="text" 
                                name='school_phone' 
                                onChange={this.handleInputs}
                                value={ this.state.school_phone }/>
                        </div>
                        <div style={style}>Email
                            <input 
                                style = {inputMargin}
                                type="text" 
                                name='school_email' 
                                onChange={this.handleInputs}
                                value={ this.state.school_email }/>
                        </div>
                        <div style={style}>School Info
                            <textarea
                                row='4'
                                cols='30'
                                style = {inputMargin}
                                type="text" 
                                name='school_info' 
                                onChange={this.handleInputs}
                                value={ this.state.school_info }/>
                        </div>
                    </div>
                    <div className='instructorInformation'>
                        Instructor Information
                        <div style={style}>Instructor Name
                            <input 
                                style = {inputMargin}
                                type="text" 
                                name='school_instructor_name' 
                                onChange={this.handleInputs}
                                value={ this.state.school_instructor_name }/>
                        </div>
                        <div style={style}>Rank
                            <input 
                                style = {inputMargin}
                                type="text" 
                                name='school_instructor_rank' 
                                onChange={this.handleInputs}
                                value={ this.state.school_instructor_rank }/>
                        </div>
                        <div style={style}>Picture
                            <input 
                                style = {inputMargin}
                                type="text" 
                                name='school_instructor_picture' 
                                onChange={this.handleInputs}
                                value={ this.state.school_instructor_picture }/>
                        </div>
                        <div style={style}>Bio
                            <textarea 
                                row='4'
                                cols='30'
                                className='bioInput'
                                style = {inputMargin}
                                type="text" 
                                name='school_instructor_bio' 
                                onChange={this.handleInputs}
                                value={ this.state.school_instructor_bio }/>
                        </div>
                    </div>
                    <div>
                        {/* <Link to='/Account_Page'> */}
                        <button 
                            onClick={ this.createSchool }
                            className='submitBtn'>Submit</button>
                        {/* </Link> */}
                    </div>
                </div>
                
            </div>
        )
    }
}

export default School_Creation;