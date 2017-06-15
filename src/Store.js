import {createStore} from 'redux';

const reducer = f => f;
const initialState = {greetings: "hello, xiaoma", aboutme: "my name is xiaoma"};
export default createStore(reducer, initialState);