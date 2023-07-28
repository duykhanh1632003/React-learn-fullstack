import actionTypes from '../actions/actionTypes';

const initialState = {
	isLoadingGender: false,
	isLoadingPosition: false,
	isLoadingRole: false,
	genders: [],
	roles: [],
	position: [],
	users : [],
	topDoctors : [],
	allDoctors: []
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
			let loading = {...state}
			loading.isLoadingGender = true
            return {
                ...loading, 
            }
		case actionTypes.FETCH_GENDER_SUCCESS:
			let copySate = {...state};
			copySate.genders = action.data
			copySate.isLoadingGender = false
			return {
				...copySate, 
				}
		case actionTypes.FETCH_GENDER_FAILED:
			let copySateFailed = {...state};
			copySateFailed.isLoadingGender =  false
			copySateFailed.genders = []
			return {
				...copySateFailed, 
			}
		case actionTypes.FETCH_ROLE_START:
			let loadingRole = {...state}
			loadingRole.isLoadingRole = true
			return {
				...loadingRole, 
			}
		case actionTypes.FETCH_ROLE_SUCCESS:
			let loadingRoleSuccess = {...state};
			loadingRoleSuccess.roles = action.data
			loadingRoleSuccess.isLoadingRole = false
			return {
				...loadingRoleSuccess, 
				}
		case actionTypes.FETCH_ROLE_FAILED:
				let loadingRoleFailed = {...state};
				loadingRoleFailed.isLoadingRole =  false
				loadingRoleFailed.roles = []
				return {
					...loadingRoleFailed, 
				}
		case actionTypes.FETCH_POSITION_START:
			let loadingPosition = {...state}
			loadingPosition.isLoadingPosition = true
			return {
				...loadingPosition, 
			}
		case actionTypes.FETCH_POSITION_SUCCESS:
			let loadingPositionSuccess = {...state};
			loadingPositionSuccess.positions = action.data
			loadingPositionSuccess.isLoadingPosition = false
			return {
				...loadingPositionSuccess, 
				}
		case actionTypes.FETCH_POSITION_FAILED:
			let loadingPositionFailed = {...state};
			loadingPositionFailed.isLoadingPosition =  false
			loadingPositionFailed.positions = []
			return {
				...loadingPositionFailed, 
			}
		case actionTypes.FETCH_ALL_USERS_SUCCESS:
			state.users = action.users
			return{
				...state	
			}
		case actionTypes.FETCH_ALL_USERS_FAILED:
			state.users = []
			return{
				...state	
			}

		case actionTypes.FETCH_TOP_DOCTORS_SUCCESS:
			state.topDoctors = action.dataDoctors
			return{
				...state	
			}
		case actionTypes.FETCH_TOP_DOCTORS_FAILED:
			state.topDoctors = []
			return{
				...state	
			}
		case actionTypes.FETCH_ALL_DOCTORS_SUCCESS:
		state.allDoctors = action.dataAllDoctors
		return{
			...state	
			}
		case actionTypes.FETCH_ALL_DOCTORS_FAILED:
			state.allDoctors = []
			return{
				...state	
			}
        default:
            return state;
    }
}

export default adminReducer;