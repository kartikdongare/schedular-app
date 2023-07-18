import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

import {doctorsData ,viewsData ,patientsData,waitingList,hospitalData,specializationData,experienceData,dutyTimingsData,activityData,timeSlots,startHours,endHours,views,colorCategory,bloodGroupData,dayOfWeekList,shift1BlockData,shift2BlockData,shift3BlockData} from "../mainData";
import drReducer from "../Reducers/drReducer";
import drDataReducer from "../Reducers/drDataReducer";

export const initialState ={
    doctorsData:doctorsData,
    viewsData:viewsData,
    patientsData:patientsData,
    waitingList:waitingList,
    hospitalData:hospitalData,
    specializationData:specializationData,
    experienceData:experienceData,
    dutyTimingsData:dutyTimingsData,
    activityData:activityData,
    timeSlots:timeSlots,
    startHours:startHours,
    endHours:endHours,
    views:views,
    colorCategory,
    bloodGroupData:bloodGroupData,
    dayOfWeekList:dayOfWeekList,
    shift1BlockData:shift1BlockData,
    shift2BlockData:shift2BlockData,
    shift3BlockData:shift3BlockData
}
const mainReducer=combineReducers({
    drReducer:drReducer,
    drDataReducer:drDataReducer
})
 const store=createStore(mainReducer ,composeWithDevTools(applyMiddleware(thunk),));

 export default store;