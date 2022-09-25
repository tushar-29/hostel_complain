const initialState = {
    user: null
}

// user format :
// user = {
//     name: "",
//     reg: "",
//     phonoNo: "",
//     ..........,
//     complain: []
// }

const setUser = (state, action) => {

    switch (action.type) {
        case 'ADD_USER':
            console.log("reducer", action.userData);
            return {
                user: action.userData,
            }

        case 'ADD_COMPLAIN':
            let newComplain = [];
            newComplain = [...state.user.complains];
            newComplain.push(action.complain);
            return {
                user: {complains: newComplain , ...state.user}
            }
        default:
            return{
                user: state.user
            };
    }
}

export{initialState, setUser};