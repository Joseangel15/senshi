import React, {Component} from 'react';
import Navigation from '../Navigation/Navigation';
import './Edit_School.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

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
            id:'',

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
                id: res.data[0].id,
                
            })
            console.log(this.state.school_name)
        })
        
    }

   

    handleSchoolEdit = () => {
        
        
        const { school_name, school_mastyle, school_address, school_city, school_state, school_zip, school_phone, school_email, school_info, school_instructor_name, school_instructor_rank, school_instructor_bio, school_instructor_picture, school_picture, id} = this.state;
        
        if(!school_name || !school_mastyle || !school_address || !school_city || !school_state || !school_zip || !school_phone || !school_email || !school_info || !school_instructor_name || !school_instructor_rank || !school_instructor_bio) return;

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
            
        
        });
        
        console.log(this.state.school_mastyle)
        console.log(this.state.school_name)

        const body = {
            school_name,
            school_mastyle,
            school_address,
            school_city,
            school_state,
            school_zip,
            school_phone,
            school_email,
            school_info,
            school_instructor_picture,
            school_picture,
            school_instructor_name,
            school_instructor_rank,
            school_instructor_bio
        }
        

        axios.put(`/api/School/${id}`, body)
        
        .then( user => {

        });

        alert('School information has been updated')
    }

    editConfirmation = ( ) => {

        let confirmation = window.confirm('Are you sure you want to update this School?')
    
        if (confirmation){
           this.handleSchoolEdit()
        } else {
            return
        }
    }


    handleChangeInfo = (event) => {
        this.setState({  

            [event.target.name]: event.target.value

        })
        console.log(event.target.value)
    }


    editAlert = () => {

        alert('School has been updated')

    }


    render(){

        const style = {
            margin: '10px',
            marginBottom: '10px'
        }

        const inputMargin = {
            marginLeft: '20px',
            alignContent: 'center'
        }
        

        return(
            <div>
                <Navigation/>
                <div className='backPic'>

                    Edit School 

                    <div className='createSchool'>
                        <div style={style}>
                            
                            School Name

                            <input 
                                style = {inputMargin}
                                name='school_name'
                                value={this.state.school_name}
                                onChange={this.handleChangeInfo}/>

                        </div>

                        <div style={style}>
                        
                            Martial Art Style

                            <select
                                style = {inputMargin}
                                name='school_mastyle'
                                value={this.state.school_mastyle}
                                onChange={this.handleChangeInfo}
                            >
                                 <option name="none" value="none"></option>
                                 <option name="Karate" value="Karate">Karate</option>
                                 <option name="Tai Chi" value="Tai Chi">Tai Chi</option>
                                 <option name="Kung Fu" value="Kung Fu">Kung Fu</option>
                                 <option name="Wing Chun" value="Wing Chun">Wing Chun</option>
                                 <option name="Krav Maga" value="Krav Maga">Krav Maga</option>
                                 <option name="Kickboxing" value="Kickboxing">Kickboxing</option>
                                 <option name="MMA" value="MMA">MMA</option>
                                 <option name="Tae Kwon Do" value="Tae Kwon Do">Tae Kwon Do</option>
                                 <option name="Muay Tai" value="Muay Tai">Muay Tai</option>
                                 <option name="Boxing" value="Boxing">Boxing</option>
                                 <option name="Kenjutsu" value="Kenjutsu">Kenjutsu</option>
                                 <option name="Kendo" value="Kendo">Kendo</option>
                            </select>

                        </div>

                        <div style={style}>
                        
                            Picture

                            <input 
                                style = {inputMargin}
                                name='school_picture'
                                value={this.state.school_picture}
                                onChange={this.handleChangeInfo}/>

                        </div>

                    </div>

                    <div className='contactInformation'>

                        Contact Information 

                        <div style={style}>Address
                            <input 
                                style = {inputMargin}
                                name='school_address'
                                value={this.state.school_address}
                                onChange={this.handleChangeInfo}/>
                        </div>
                        <div style={style}>City
                            <input 
                                style = {inputMargin}
                                name='school_city'
                                value={this.state.school_city}
                                onChange={this.handleChangeInfo}/>
                        </div>
                        <dir style={style}>state
                            <input 
                                style = {inputMargin}
                                name='school_state'
                                value={this.state.school_state}
                                onChange={this.handleChangeInfo}/>
                        </dir>
                        <div style={style}>Zip Code
                            <input 
                                style = {inputMargin}
                                name='school_zip'
                                value={this.state.school_zip}
                                onChange={this.handleChangeInfo}/>
                        </div>
                        <div style={style}>Phone
                            <input 
                                style = {inputMargin}
                                name='school_phone'
                                value={this.state.school_phone}
                                onChange={this.handleChangeInfo}/>
                        </div>
                        <div style={style}>Email
                            <input 
                                style = {inputMargin}
                                name='school_email'
                                value={this.state.school_email}
                                onChange={this.handleChangeInfo}/>
                        </div>
                        <div style={style}>School Info
                            <textarea 
                                style = {inputMargin}
                                row='4'
                                cols='30'
                                name='school_info'
                                value={this.state.school_info}
                                onChange={this.handleChangeInfo}/>
                        </div>
                    </div>
                    <div className='instructorInformation'>

                        Instructor Information

                        <div style={style}>Instructor Name
                            <input 
                                style = {inputMargin}
                                name='school_instructor_name'
                                value={this.state.school_instructor_name}
                                onChange={this.handleChangeInfo}/>
                        </div>
                        <div style={style}>Rank
                            <input 
                                style = {inputMargin}
                                name='school_instructor_rank'
                                value={this.state.school_instructor_rank}
                                onChange={this.handleChangeInfo}/>
                        </div>
                        <div style={style}>Picture
                            <input 
                                style = {inputMargin}
                                name='school_instructor_picture'
                                value={this.state.school_instructor_picture}
                                onChange={this.handleChangeInfo}/>
                        </div>
                        <div style={style}>Bio
                            <textarea 
                                style = {inputMargin}
                                row='4'
                                cols='30' 
                                name='school_instructor_bio'
                                value={this.state.school_instructor_bio}
                                onChange={this.handleChangeInfo}/>
                        </div>
                    </div>
                    <div>
                        <Link to='/Account_Page'>
                        <button onClick={ this.editConfirmation } className='secondSubmit'>Submit</button>
                        </Link>
                    </div>
                </div>
                
            </div>
        )
    }

}

export default Edit_School;