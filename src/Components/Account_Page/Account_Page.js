import React, {Component} from 'react';
import Navigation from '../Navigation/Navigation';
import './Account_Page.css';
import {Link} from 'react-router-dom';
import {getUserData} from '../../ducks/reducer';
import axios from 'axios';
import {connect} from 'react-redux';



class Account_Page extends Component {
    constructor(){
        super()

        this.state = {
            Rank: '',
            editing: false, 
            mySchools: [],
           
        }
    }


componentDidMount = () => {
    axios.get('/api/user/user-data').then(res => {
        this.props.getUserData(res.data)
    });


    axios.get('/api/Schools/find_all').then(res => {
        this.setState({

            mySchools: res.data,
            
        })
    });
}



deleteSchool = ( id ) => {
    console.log('deleteSchool:', id)
    axios.delete(`/api/School/${id}`).then(res => {
        this.setState({
            mySchools: res.data
        })
    })

    axios.get('/api/Schools/find_all').then(res => {
        this.setState({

            mySchools: res.data

        })
    });
}


deleteConfirmation = ( id ) => {

    let confirmation = window.confirm('Are you sure you want to delete this School?')

    if (confirmation){
       this.deleteSchool(id)
    } else {
        return
    }
}

// handleSchoolEdit = () => {
    
    
//     axios.get(`/api/School/${this.state.id}`).then(res => {
//         this.setState({
            
//             school: res.data
            
//         });
//         console.log(this.state.id)
//         console.log(this.state.school)
//     });
// };

render(){

    const theSchools = this.state.mySchools.map( el => {
        console.log(this.state.mySchools)
            return (


        <div key={el.id} >
                
                <div className='listOfResults'>
                    <div>

                        <Link to={`./School_Info/${el.id}`}><h4 
                            className='schoolName' 
                            name= 'school'
                            value={el.id}
                            >
                            {el.school_name}
                        </h4></Link>

                            <Link to={`/Edit_School/${el.id}`}><button className='editBtn'>
                                
                                edit

                            </button></Link>

                            <button
                                onClick={() => this.deleteConfirmation(el.id)}>
                                
                                delete

                            </button>

                        <h6>
                            Phone = {el.school_phone}, Address = {el.school_address}
                        </h6> 
                    </div>          
                </div>    

        </div> 
        )
        
    });

    let {user} = this.props

    return(
        <div>
            <Navigation />
            <div>
                Account
                <div className='upperBar'>
                    <div className='profilePic'>                 
                        {user.user_picture ? <img src={user.user_picture} alt="User" className='userPicture'/> : null}
                    </div>
                    <div>
                        <div className='accountName'>{user.user_name}</div>
                        <div className='accountRank'>{user.user_rank}</div>
                        <Link to='/School_Creation'><button >Create School</button></Link>
                    </div>
                </div>
                <div className='middleBar'>
                    My Schools

                    <div className='mySchools'>
                        {theSchools}
                    </div>

                </div>
                    
                <div className='lowerBar'>Favorites</div>
            </div>
            <div className='lowerSection'>

            </div>
        </div>
    )

}


}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {getUserData})(Account_Page);