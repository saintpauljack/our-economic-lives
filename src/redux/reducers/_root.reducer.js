import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import clients from './clients.reducer';
import industry_pyramid from './industryPyramid.reducer.js';
import detail from './details.reducer';
import coaches from './coaches.reducer';
import buildingBlocks from './buildingBlocks.reducer';
import clientBlocks from './clientBlocks.reducer';
import blockDetails from './blockDetails.reducer';
import clientPyramid from './clientPyramid.reducer';
import unapprovedExp from './unapprovedExp.reducer';
import comments from './comments.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  clients, // holds array of client data for each coach
  coaches,
  industry_pyramid, //holds an array of all the career path data
  buildingBlocks, //holds array of buildingBlocks for tier slider
  detail, // holds an array of building block details
  clientBlocks, // holds array of building blocks for specific client
  blockDetails, // static info for block details page
  clientPyramid, // data of clients current industry pyramid
  unapprovedExp, // holds list of clients unnaproved critical experiences
  comments, // holds client experinence details for pulling comments
});

export default rootReducer;
