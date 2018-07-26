

{/* <div className='navBar'>
<div className='logoMenu'>
    <div>
        <Link to='/' ><h1 className='Logo'>SENSHI</h1></Link>
    </div>
    <div className='menuButton'>
        <div className='insideLines' onClick={() => this.toggleNav()}>
            <div className='divLines'></div>
            <div className='divLines'></div>
            <div className='divLines'></div>
        </div>
    </div>
</div>
    <div className={this.state.showNav ? 'mobile-Nav' : 'mobile-Nav>
        <div className='menuOptions'>
            <h3>Home</h3>
            <h3>Account</h3>
            <h3>Store</h3>
            <h3>About</h3>
            <h3>Logout</h3>
        </div>
    </div>

</div>
) */}



// .navBar{
//     width: 100%;
//     align-items: center;
//     background-color: rgb(0, 0, 0)
// }

// .logoMenu {
//     display: flex;
//     justify-content: space-between
// }

// .menuButton {
//     border: 5px solid rgb(150, 0, 0);
//     border-radius: 5px;
//     width: 50px;
//     height: 35px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin: 10px 10px;
// }

// .insideLines {
//     width: 60%;
//     height: 70%;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
// }

// .Logo {
//     margin-left: 10px;
//     color: rgb(150, 0, 0);
//     text-decoration: none;

// }

// a{
//     text-decoration: none;
// }

// .divLines {
//     background-color: rgb(150, 0, 0);
//     height: 4px;
//     width: 100%;
// }

// .mobile-Nav {
//     background-color: black;
//     position: fixed;
//     width: 100%;
// }

// .menuOptions {
//     color:  rgb(150, 0, 0);
// }

// !school_name || !school_mastyle || !school_address || !school_city || !school_state || !school_zip || !school_phone || !school)
//     }


//Search_Bar Component

// class Search_Results extends Component {
//     constructor() {
//         super()

//         this.state = {
//             maStyle: [],
//         }
//         console.log(this.state.maStyle)
//     }

//     componentDidMount(){
//         axios.get('api/Schools/school_mastyle').then(res => {
//             this.setState({
//                 maStyle: res.data
//             });
//             console.log(this.state.maStyle)

//         });
//     }

     

//     render(){         
        
//         const schools = this.state.maStyle.map( (el) => {
//             console.log(this.state.maStyle)
//             return(
//               <div key={el.id}>
//               <div className='listOfResults'>
//                 <h4 className='schoolName'>                                          {el.school_name}</h4>
//                 <h6>Phone = {el.school_phone}, Address =                             {el.school_address}</h6> 
              
//               </div>
    
//               </div>
//             )
//         });