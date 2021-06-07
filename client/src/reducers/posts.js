// accept state and action and perform logic
import { FETCH_ALL, DELETE, CREATE, UPDATE, LIKE, FETCH_BY_SEARCH, START_LOADING, END_LOADING, FETCH_POST } from '../constants/actionTypes';
// state must be something, in this case empty array for posts to be stored
export default ( state = { isLoading: true, posts: [] }, action ) => {
    switch ( action.type )
    {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case DELETE:
            return {
                ...state.posts.filter( ( post ) => post._id !== action.payload )
            };
        case UPDATE:
            return { ...state, posts: state.posts.map( ( post ) => ( post._id === action.payload._id ? action.payload : post ) ) };
        case LIKE:
            return { ...state, posts: state.posts.map( ( post ) => post._id === action.payload._id ? action.payload : post ) };
        case FETCH_ALL:
            return {
                ...state,
                state: action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages
            };
        case FETCH_BY_SEARCH:
            return {
                ...state, posts: action.payload
            };
        case FETCH_POST:
            return { ...state, post: action.payload };
        case CREATE:
            return [ ...state, action.payload ];
        default:
            return state;
    };
};