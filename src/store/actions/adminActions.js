import actionTypes from './actionTypes';
import { getAllCodeService, createNewUserSerVice, getAllUsers , deleteUserService , editUserService,  getTopDoctorHomeService , getAllDoctors , saveDetailDoctorService} from '../../services/userService';
import { ToastContainer, toast } from 'react-toastify';


export const fetchGenderStart = () => {
    return async (dispatch , getState) =>{
        try{

            dispatch({
                type : actionTypes.FETCH_GENDER_START
            })
            let res = await getAllCodeService("GENDER")
            console.log("check res" , res)
            if(res && res.errCode ===0 ){
                dispatch(fetchGenderSuccess(res.data))
            }
            else{
                dispatch(fetchGenderFailed())
            }
        }
        catch(e){
            dispatch(fetchGenderFailed())
            console.log(e)
        }
    }
    
}


export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})


export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED
})

// ROLE

export const fetchRoleStart = () => {
    return async (dispatch , getState) =>{
        try{

            dispatch({
                type : actionTypes.FETCH_GENDER_START
            })
            let res = await getAllCodeService("ROLE")
            if(res && res.errCode ===0 ){
                dispatch(fetchGRoleSuccess(res.data))
            }
            else{
                dispatch(fetchRoleFailed())
            }
        }
        catch(e){
            dispatch(fetchRoleFailed())
            console.log(e)
        }
    }
    
}


export const fetchGRoleSuccess = (genderData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: genderData
})


export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILED
})

//Positions

export const fetchPositionStart = () => {
    return async (dispatch , getState) =>{
        try{

            dispatch({
                type : actionTypes.FETCH_POSITION_START
            })
            let res = await getAllCodeService("POSITION")
            if(res && res.errCode ===0 ){
                dispatch(fetchPositionSuccess(res.data))
            }
            else{
                dispatch(fetchGPositionFailed())
            }
        }
        catch(e){
            dispatch(fetchGPositionFailed())
            console.log(e)
        }
    }
    
}


export const fetchPositionSuccess = (genderData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: genderData
})


export const fetchGPositionFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAILED
})

export const createNewUser = (data) => {
    return async  (dispatch , getState) => {
        try{
            let res = await createNewUserSerVice(data)
            console.log("check res trong kh inhap" , res)
            toast.success("Create a new User Succeed!")
            if(res && res.errCode ===0 ){
                dispatch(saveUserSuccess())
                dispatch(fetchAllUsersStart())
                
            }
            else{
                dispatch(saveUserFailed())
            }
        }
        catch(e){
            dispatch(saveUserFailed())
            console.log(e)
        }
    }
}

export const saveUserSuccess = () =>({
    type: "CREATE_USER_SUCCESS"
})

export const saveUserFailed = () =>({
    type: "CREATE_USER_FAILED"
})


export const fetchAllUsersStart = () => {
    return async (dispatch , getState) =>{
        try{
            let res = await getAllUsers("ALL")
            if(res && res.errCode ===0 ){
                dispatch(fetchAllUsersSuccess(res.users.reverse()))
            }
            else{
                dispatch(fetchAllUsersFailed())
            }
        }
        catch(e){
            dispatch(fetchAllUsersFailed())
            console.log(e)
        }
    }
    
}

export const fetchAllUsersSuccess = (data) =>({
    type: actionTypes.FETCH_ALL_USERS_SUCCESS,
    users :data
})

export const fetchAllUsersFailed = () =>({
    type: actionTypes.FETCH_ALL_USERS_FAILED,   
})

export const deleteAUser = (userId) => {
    return async  (dispatch , getState) => {
        try{
            
            let res = await deleteUserService(userId)
            
            if(res && res.errCode ===0 ){
                toast.success("Delete User Succeed!");
                dispatch(saveUserSuccess())
                dispatch(fetchAllUsersStart())
                
            }
            else{
                toast.error("Delete User Error!")
                dispatch(saveUserFailed())
            }
        }
        catch(e){
            toast.error("Fetch All User Error!")
            dispatch(saveUserFailed())
            console.log(e)
        }
    }
}

export const deleteUserSuccess = () => ({
    type : actionTypes.DELETE_USER_SUCCESS
})

export const deleteUserFailed = () => ({
    type : actionTypes.DELETE_USER_FAILED
})


export const EditAUser = (data) => {
    return async  (dispatch , getState) => {
        try{
            
            let res = await editUserService(data)
            
            if(res && res.errCode ===0 ){
                toast.success("Update User Succeed!");
                dispatch(editUserSuccess())
                dispatch(fetchAllUsersStart())
                
            }
            else{
                toast.error("Update User Error!")
                dispatch(editUserFailed())
            }
        }
        catch(e){
            toast.error("Update All User Error!")
            dispatch(editUserFailed())
            console.log(e)
        }
    }
}

export const editUserSuccess = () => ({
    type : actionTypes.EDIT_USER_SUCCESS
})

export const editUserFailed = () => ({
    type : actionTypes.EDIT_USER_FAILED
})


// let res1 = await getTopDoctorHomeService(3)

export const fetchTopDoctor = () =>{
    return async  (dispatch , getState) => {
        try{
            let res = await getTopDoctorHomeService('6')
            console.log('Check res' , res)
            if(res && res.errCode === 0 ){
                dispatch({
                type: actionTypes.FETCH_TOP_DOCTORS_SUCCESS,
                dataDoctors: res.data
            })}
            else{
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTORS_FAILED
                })
            }
        }
        catch(e){
            
        }
    }
}

export const fetchAllDoctor = () =>{
    return async  (dispatch , getState) => {
        try{
            let res = await getAllDoctors()
            if(res && res.errCode === 0 ){
                dispatch({
                type: actionTypes.FETCH_ALL_DOCTORS_SUCCESS,
                dataAllDoctors: res.data
            })}
            else{
                dispatch({
                    type: actionTypes.FETCH_ALL_DOCTORS_FAILED
                })
            }
        }
        catch(e){
            dispatch({
                type: actionTypes.FETCH_ALL_DOCTORS_FAILED
            })
        }
    }
}



export const saveDetailDoctor = (data) =>{
    return async  (dispatch , getState) => {
        try{
            let res = await saveDetailDoctorService(data)
            if(res && res.errCode === 0 ){
                toast.success("Save user User Succeed!");
                dispatch({
                type: actionTypes.SAVE_DETAIL_DOCTOR_SUCCESS,
                dataAllDoctors: res.data
            })}
            else{
                toast.error("Wrong!");
                dispatch({
                    
                    type: actionTypes.SAVE_DETAIL_DOCTOR_FAILED
                })
            }
        }
        catch(e){
            toast.error("Wrong!");
            dispatch({
                type: actionTypes.SAVE_DETAIL_DOCTOR_FAILED
            })
        }
    }
}

export const fetchAllScheduleTime = () =>{
    return async  (dispatch , getState) => {
        try{
            let res = await getAllCodeService("TIME")
            if(res && res.errCode === 0 ){
                dispatch({
                type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_SUCCESS,
                dataTime: res.data
            })}
            else{
                dispatch({
                    type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_FAILED
                })
            }
        }
        catch(e){
            dispatch({
                type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_FAILED
            })
        }
    }
}




export const getRequireDoctorInfor = () => {
    return async (dispatch , getState) =>{
        try{

            dispatch({
                type : actionTypes.FETCH_REQUIRED_DOCTOR_INFOR_START
            })
            let resPrice = await getAllCodeService("PRICE")
            let resPayment = await getAllCodeService("PAYMENT")
            let resProvince = await getAllCodeService("PROVINCE")
            if(resPrice && resPrice.errCode ===0 
                &&resPayment && resPayment.errCode ===0
                    &&resProvince && resProvince.errCode ===0
                ){
                let data = {
                    resPrice : resPrice.data,
                    resPayment: resPayment.data,
                    resProvince: resProvince.data
                }
                dispatch(fetchRequiredDoctorInforSuccess(data))
            }
            else{
                dispatch(fetchRequiredDoctorInforFailed())
            }
        }
        catch(e){
            dispatch(fetchRequiredDoctorInforFailed())
            console.log(e)
        }
    }
    
}


export const fetchRequiredDoctorInforSuccess = (allRequiredData) => ({
    type: actionTypes.FETCH_REQUIRED_DOCTOR_INFOR_SUCCESS,
    data: allRequiredData
})


export const fetchRequiredDoctorInforFailed = () => ({
    type: actionTypes.FETCH_REQUIRED_DOCTOR_INFOR_FAILED
})
