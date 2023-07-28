import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserRedux.scss';  
import { getAllCodeService } from '../../../services/userService';
import { LANGUAGES, CRUD_ACTIONS , CommonUtils } from '../../../utils';
import * as action from "../../../store/actions"
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import TableManageUser from './TableManageUser';
class UserRedux extends Component {

    constructor(props){
        super(props)
        this.state = {
            genderArr: [],
            roleArr: [],
            positionArr: [],
            previewImageUrl: '',
            isOpen: false,
            userEditId: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            address: '',
            gender:'',
            position: '',
            role: '',
            avatar: '',

            action: '',
        }
    }

     componentDidMount() {
        this.props.getGenderStart()
        this.props.getRoleStart();
        this.props.getPositionStart()
        // try{
        //     let res =  await getAllCodeService('gender')
        //     console.log("res", res)
        //     if(res && res.errCode === 0 ){
        //         this.setState({
        //             genderArr: res.data
        //         })
        //     }
        // }
        // catch(e){
        //     console.log(e)
        // }
    }
    componentDidUpdate(prevProps, prevState , snpashot){
        if(prevProps.genderRedux !== this.props.genderRedux){
            let arrGenders = this.props.genderRedux
            this.setState({
                genderArr: arrGenders,
                gender: arrGenders && arrGenders.length >0 ? arrGenders[0].key : ''
            })
        }
        if(prevProps.roleRedux !== this.props.roleRedux){
            let arrRoles = this.props.roleRedux
            this.setState({
                roleArr: arrRoles,
                role: arrRoles && arrRoles.length >0 ? arrRoles[0].key : ''
            })
        }
        if(prevProps.rolePosition !== this.props.rolePosition){
            let arrPositions = this.props.rolePosition
            this.setState({
                positionArr: arrPositions,
                position: arrPositions && arrPositions.length >0 ? arrPositions[0].key : ''
            })
        }
        if(prevProps.listUsers !== this.props.listUsers){
            let arrGenders = this.props.genderRedux
            let arrRoles = this.props.roleRedux
            let arrPositions = this.props.rolePosition
            this.setState({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                phoneNumber: '',
                address: '',
                gender: arrGenders && arrGenders.length >0 ? arrGenders[0].keyMap : '',
                position: arrPositions && arrPositions.length >0 ? arrPositions[0].keyMap : '',
                role: arrRoles && arrRoles.length >0 ? arrRoles[0].keyMap : '',
                avatar: '',
                action: CRUD_ACTIONS.CREATE,
                previewImageUrl: ''
            })
        }
    }

    

    handleOnchangImage = async (event) =>{
        let data = event.target.files;
        let file = data[0];
        const objectUrl = URL.createObjectURL(file)
        if(file){
            let base64 = await CommonUtils.getBase64(file)
            let objectUrl = URL.createObjectURL(file)
            this.setState({
                previewImageUrl: objectUrl,
                avatar: base64
            })
        }
    } 
    

    openPreviewImage = () =>{   
        if(!this.state.previewImageUrl){
            return
        }
        this.setState({
            isOpen: true
        })
    }

    handleSaveUser = (event) => {
        event.preventDefault();
        let isValid = this.checkValiDateInput();
        let { action } = this.state;
        if (isValid === false) return;
        if (action === CRUD_ACTIONS.CREATE) {
          this.props.createNewUser({
            email: this.state.email,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            address: this.state.address,
            phonenumber: this.state.phoneNumber,
            gender: this.state.gender,
            roleId: this.state.role,
            positionId: this.state.position,
            avatar: this.state.avatar,
          });
              // this.props.fetchUserRedux()
            }
            else{
                this.props.EditAUserRedux({
                    id: this.state.userEditId,  
                    email: this.state.email,
                    password: this.state.password,
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    address: this.state.address,
                    phonenumber: this.state.phoneNumber,
                    gender: this.state.gender,
                    roleId: this.state.role,
                    positionId: this.state.position,
                    avatar:this.state.avatar
                })
            }
        }
        
        

    checkValiDateInput = () => {
        let isValid = true;
        let arrCheck = ['email' , 'password' , 'firstName' , 'lastName', 'phoneNumber', 'address' ]
        for (let i = 0 ; i < arrCheck.length ; i++){
            if(!this.state[arrCheck[i]]){
                isValid = false
                alert('This input is required '+ arrCheck[i])
                break;
            }
        }

        return isValid
    }

    onChangeInput = (event , id) =>{
        let copySate = {...this.state}
        copySate[id] = event.target.value
        console.log("check copy stae", copySate)

        this.setState({
            ...copySate
        }, )
        // emai: '',
        // password: '',
        // firstName: '',
        // lastName: '',
        // phoneNumber: '',
        // address: '',
        // gender:'',
        // position: '',
        // role: '',
        // avatar: '',
    }

    handleEditUserFromParent = (user) => {
        let imageBase64 = ''
        if(user.image){
            imageBase64 = new Buffer(user.image,'base64').toString('binary')
        }

        this.setState({
          email: user.email,
          password: "HARDCODE",
          firstName: user.firstName,
          lastName: user.lastName,
          phoneNumber: user.phonenumber,
          address: user.address,
          gender: user.gender,
          position: user.positionId, // Thay đổi "position" thành "positionId"
          role: user.roleId, // Thay đổi "role" thành "roleId"
          previewImageUrl: imageBase64,
          avatar: '',
          action: CRUD_ACTIONS.EDIT,
          userEditId: user.id
        });
      }

    render() {
        let genders = this.state.genderArr 
        let roles = this.state.roleArr
        let positions = this.state.positionArr
        let language = this.props.language
        let isGetGender = this.props.isLoadingGender
        let { email , password , firstName , lastName, phoneNumber, address ,gender ,position , role  ,avatar   } = this.state
        return (
            <>
            <div className='user-redux-container'>
                <div className='title'>
                    <FormattedMessage id="manage-user." />
                </div>
                <div>{isGetGender === true ? 'Loading genders' : ''}</div>
                <div className="user-redux-body" >
                    <div className='container'>
                        <div className='row'>
                            <form>
                                <div className="row">
                                    <div className="group col-md-3">
                                        <label htmlFor="inputEmail4">Email</label>
                                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email"
                                         value={email}
                                         onChange={(event) => {this.onChangeInput(event,'email')}}
                                         disabled= {this.state.action === CRUD_ACTIONS.EDIT? true : false}
                                        />
                                    </div>
                                    <div className="group col-md-3">
                                        <label htmlFor="inputPassword4"><FormattedMessage id="manage-user.password" /></label>
                                        <input type="password" className="form-control" id="inputPassword4" placeholder="Password"
                                        value={this.state.password}
                                        onChange={(event) => {this.onChangeInput(event,'password')}}
                                        disabled= {this.state.action === CRUD_ACTIONS.EDIT? true : false}

                                        />
                                    </div>
                                    <div className="group col-md-3">
                                        <label htmlFor="inputEmail4"><FormattedMessage id="manage-user.firstname" /></label>
                                        <input type="text" className="form-control" id="inputEmail4" placeholder=""
                                        value={this.state.firstName}
                                        onChange={(event) => {this.onChangeInput(event,'firstName')}}
                                        />
                                    </div>
                                    <div className="group col-md-3">
                                        <label htmlFor="inputEmail4"><FormattedMessage id="manage-user.lastname" /></label>
                                        <input type="text" className="form-control" id="inputEmail4" placeholder=""
                                        value={this.state.lastName}
                                        onChange={(event) => {this.onChangeInput(event,'lastName')}}
                                        />

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="group col-md-3">
                                        <label htmlFor="inputEmail4"><FormattedMessage id="manage-user.phonenumber" /></label>
                                        <input type="text" className="form-control" id="inputEmail4" placeholder="Phone number"
                                        value={this.state.phoneNumber}
                                        onChange={(event) => {this.onChangeInput(event,'phoneNumber')}}
                                        />
                                    </div>
                                    <div className="group col-md-9">
                                        <label htmlFor="inputEmail4"><FormattedMessage id="manage-user.address" /></label>
                                        <input type="text" className="form-control" id="inputEmail4" placeholder="1234 Main St"
                                        value={this.state.address}
                                        onChange={(event) => {this.onChangeInput(event,'address')}}
                                        />

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="group col-md-3">
                                        <label htmlFor="inputState"><FormattedMessage id="manage-user.gender" /></label>
                                        <select id="inputState" className="form-control"
                                        onChange={(event) => {this.onChangeInput(event,'gender')}}
                                        value={gender}
                                        >
                                            {genders && genders.length > 0 &&
                                                genders.map((item, index) => (
                                                    <option key={index} value={item.keyMap}>{language === LANGUAGES.VI ? item.valueVi : item.valueEn}</option>
                                                ))
                                            }
                                        </select>
                                    </div>

                                    <div className="group col-md-3">
                                        <label htmlFor="inputState"><FormattedMessage id="manage-user.role" /></label>
                                        <select id="inputState" className="form-control"
                                        onChange={(event) => {this.onChangeInput(event,'role')}}
                                        value={role}
                                        >
                                            {roles && roles.length > 0 &&
                                                roles.map((item, index) => (
                                                    <option key={index} value={item.keyMap}>{language === LANGUAGES.VI ? item.valueVi : item.valueEn}</option>
                                                ))
                                            }
                                        </select>
                                    </div>


                                    <div className="group col-md-3">
                                        <label htmlFor="inputState"><FormattedMessage id="manage-user.position" /></label>
                                        <select id="inputState" className="form-control"
                                        onChange={(event) => {this.onChangeInput(event,'position')}}
                                        value={position}
                                        >
                                            {positions && positions.length > 0 &&
                                                positions.map((item, index) => (
                                                    <option key={index} value={item.keyMap}>{language === LANGUAGES.VI ? item.valueVi : item.valueEn}</option>
                                                ))
                                            }
                                        </select>
                                    </div>

                                    <div className="group col-md-3">
                                        <label htmlFor="inputZip"><FormattedMessage id="manage-user.avatar" /></label>
                                        <div className='preview-img-container'>
                                            <input id='previewImg' type='file' hidden
                                            onChange={(event) => this.handleOnchangImage(event)}
                                            
                                            />
                                            <label className='label-upload' htmlFor='previewImg'>Tải ảnh <i className='fas fa-upload'></i></label>
                                            <div className='preview-image'
                                                style={{backgroundImage : `url(${this.state.previewImageUrl})`}}
                                                onClick={() =>this.openPreviewImage()}
                                                
                                            >

                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                               
                                <button type="submit" className={this.state.action === CRUD_ACTIONS.EDIT ? "btn btn-warning" :"btn btn-primary"}
                                onClick={(event) => this.handleSaveUser(event)}
                                
                                >
                                    {this.state.action === CRUD_ACTIONS.EDIT ?
                                    <FormattedMessage id="manage-user.edit" />:
                                    <FormattedMessage id="manage-user.signin" />
                                }</button>

                                <div className="row">
                                    <TableManageUser 
                                    handleEditUserFromParentKey = {this.handleEditUserFromParent}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {this.state.isOpen === true &&
                    <Lightbox
                        mainSrc={this.state.previewImageUrl}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        action= {this.state.action}

                    />
                }
            </div>
        </>
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        genderRedux :state.admin.genders,
        roleRedux: state.admin.roles,
        rolePosition: state.admin.positions,
        isLoadingGender: state.admin.isLoadingGender,
        isLoadingRole : state.admin.isLoadingRole,
        isLoadingPosition: state.admin.isLoadingPosition,
        listUsers: state.admin.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(action.fetchGenderStart()),
        getRoleStart: () => dispatch(action.fetchRoleStart()),
        getPositionStart: () => dispatch(action.fetchPositionStart()),
        createNewUser: (data) => dispatch(action.createNewUser(data)),
        fetchUserRedux : () =>  dispatch(action.fetchAllUsersStart()),
        EditAUserRedux : (data) => dispatch(action.EditAUser(data))
        // processLogout: () => dispatch(actions.processLogout()),
        // changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
