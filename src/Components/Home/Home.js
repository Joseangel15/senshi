import React, {Component} from 'react';
import Navigation from '../Navigation/Navigation';
import './Home.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
// import { connect } from 'react-redux';
// import { getSchoolData } from '../../ducks/reducer';



class Home extends Component{
    constructor(){
        super()

        this.state = {
            maStyle: [],
            searchMa: [],
            school: []
        }
        
    }
    
    handleInputs = (event) => {
        let output = event.target.name
        const api = `api/Schools/${output}`
        
        axios.get(api).then(res => {
            this.setState({
                
                maStyle: res.data
            });
            console.log(this.state.maStyle)
        });
        
    };
    
    getSchoolData = (id) => {
        
        axios.get(`/api/School/${id}`).then(res => {
            this.setState({
                school: res.data
                
            });
            
        });
        console.log(this.state.school)
    };


    render(){
        

        const buttonStyling = {
            border: '2px solid white',
            backgroundColor: 'rgba(0, 0, 0, 0.658)',
            margin: '5px',
            padding: '10px',
            height: '100%',
            width: '100%',
            color: 'white',
            textAlign: 'center',
            fontFamily: 'Donegal One, serif',
            letterSpacing: '.4rem',
            cursor: 'pointer',
            borderRadius: '10px',
            fontSize: '20px',
            
            
        }    
      
        
        const schools = this.state.maStyle.map( el => {
            console.log(this.state.maStyle)
                return (

            <div key={el.id} >
                    
                <div className='listOfResults'>
                    <div>

                        <Link to={`./School_Info/${el.id}`}><h4 
                            className='schoolName' 
                            name= 'school'
                            value={el.id}
                            onClick={ () => { this.getSchoolData(el.id) } }>
                            {el.school_name}
                        </h4></Link>

                        <h6>
                            Phone = {el.school_phone}, Address = {el.school_address}
                        </h6> 
                    </div>          
                </div>    
            </div> 
            )
            
        });

       
        return(
            
            <div className='test'>
                <Navigation/>

                <div className='title'>
                    <div className='searchInput'>
                        <h1 className='homeTitle'>FIND YOUR PATH</h1>

                    </div>
                </div>

                <div className='maStyles'>

                    <button 
                        className='karate'
                        style={buttonStyling}
                        name='karate'                        
                        onClick={ (e) => {this.handleInputs(e)}} 
                        >KARATE</button>

                    <button 
                        className='tai_chi'
                        style={buttonStyling}
                        name='tai chi'                        
                        onClick={(e) => {this.handleInputs(e)}} 
                        >TAI CHI</button>

                    <button 
                        className='kung_fu'
                        style={buttonStyling}
                        name='kung fu'
                        onClick={(e) => {this.handleInputs(e)}}
                        >KUNG FU</button>

                    <button 
                        className='wingchun'
                        style={buttonStyling}
                        name='wing chun'
                        onClick={ (e) => {this.handleInputs(e)}}
                        >WING CHUN</button>

                    <button 
                        className='krav_maga'
                        style={buttonStyling}
                        name='krav maga'
                        onClick={ (e) => {this.handleInputs(e)}}
                        >KRAV MAGA</button>

                    <button 
                        className='kickboxing'
                        style={buttonStyling}
                        name='kickboxing'
                        onClick={ (e) => {this.handleInputs(e)}}
                        >KICKBOXING</button>

                    <button 
                        className='mma'
                        style={buttonStyling}
                        name='mma'
                        onClick={ (e) => {this.handleInputs(e)}}
                        >MMA</button>

                    <button 
                        className='tae_kwon_do'
                        style={buttonStyling}
                        name='tae kwon do'
                        onClick={ (e) => {this.handleInputs(e)}}
                        >TAE KWON DO</button>

                    <button 
                        className='muay_tai'
                        style={buttonStyling}
                        name='muay tai'
                        onClick={ (e) => {this.handleInputs(e)}}
                        >MUAY TAI</button>

                    <button 
                        className='boxing'
                        style={buttonStyling}
                        name='boxing'
                        onClick={ (e) => {this.handleInputs(e)}}
                        >BOXING</button>

                    <button 
                        className='kenjutsu'
                        style={buttonStyling}
                        name='kenjutsu'
                        onClick={ (e) => {this.handleInputs(e)}}
                        >KENJUTSU</button>

                    <button 
                        className='kendo'
                        style={buttonStyling}
                        name='kendo'
                        onClick={ (e) => {this.handleInputs(e)}}
                        >KENDO</button>

                    
                </div>
                <div>

                    {/* Fix Search All to serach only for maStyles */}
                <div className='searchAllBox'>
                    <button 
                        style={buttonStyling}
                        className='nameAll'
                        name='find_all'
                        onClick={ (e) => {this.handleInputs(e)}}
                        >SEARCH ALL</button>
                </div>

                </div>

               

                <div className='results'>
                    
                    {schools} 
                </div>

                <div className='lowerPart2'>

                </div>

                
            </div>
        )
    }
}





export default  Home ;