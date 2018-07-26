const initialState = {
    user: {},
    school: []

}



function reducer(state = initialState, action) { 
    switch (action.type) {        
        
        case USER_DATA:
        return Object.assign({}, state, {user: action.payload});
        
        case SCHOOL_DATA:
        return Object.assign({}, state, {school: action.payload});
        
        default: return state;
    }
};


const USER_DATA = 'USER_DATA';
const SCHOOL_DATA = 'SCHOOL_DATA';

export function getUserData(user) {
    return{
        type: USER_DATA,
        payload: user
    };
}

export function getSchoolData(school) {
    return{
        type: SCHOOL_DATA,
        payload: school
    };
}



export default reducer;