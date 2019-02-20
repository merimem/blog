export default function(state = {
    posts: null
}, action){
  // if (action.type == 'FETCH_POSTS' ){
  //   console.log("PAYLOAAAAADDDD", action.payload)
  //   return {...state, arr: action.payload.data.blogs || false};
  // }
   // return state;
    switch(action.type){
        case 'FETCH_POSTS':
            return {...state, arr: action.payload.data.blogs || false};
        default:
            return state;
    }
}
