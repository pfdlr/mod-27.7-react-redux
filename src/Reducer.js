import { combineReducers } from 'redux';
import comments from './Comments.js';
import users from './Users.js';

const reducer = combineReducers({
  comments,
  users
});

export default reducer;