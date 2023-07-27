import axios from '../axios';

const handleLoginApi = (email, password) => {
  return axios.post('api/login', { email, password });
};

const getAllUsers =(inputId) =>{
  return axios.get(`/api/get-all-users?id=${inputId}`)
}

const createNewUserSerVice = (data) =>{
  return axios.post('api/create-new-user', data)
}


const deleteUserService = (id) =>{
  // return axios.delete('/api/delete-user', {id: id})
  return axios.delete('/api/delete-new-user',{
    data: {
      id:id   
    }
  })
}

const editUserService = (inputData) =>{
  return axios.put('/api/edit-new-user',inputData)
}


const getAllCodeService = (inputType) =>{
  return axios.get(`/api/allcode?type=${inputType}`)
}

const getTopDoctorHomeService = (limit) =>{
  return axios.get(`/api/top-doctor-home?limit=${limit}`)
}

export { handleLoginApi , getAllUsers  ,createNewUserSerVice, deleteUserService , editUserService ,getAllCodeService , getTopDoctorHomeService};
