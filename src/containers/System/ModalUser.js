import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { emitter } from '../../utils/emitter';


class ModalUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
		email: '',
		password: '',
		firstName:'',
		lastName:'',
		address: '',

	};

	this.listenToEmitter();
  }

  listenToEmitter(){
	emitter.on('EVENT_CLEAR_MODAL_DATA', () =>{
		this.setState({
			email: '',
			password: '',
			firstName:'',
			lastName:'',
			address: '',
		})
	})
  }

  componentDidMount(){
	
  }


  toggle = () => {
    // Gán lại giá trị isOpenModalUser trong component UserManage thành false
	this.props.toogleFromParent();
  };


  handleOnChangInput = (event , id	) =>{
	let copyState = {...this.state};
	copyState[id] = event.target.value;
	this.setState({
		...copyState
	})
  }

  checkValideInput = () => {
	let isValid = true;
	let arrInput = ['email', 'password', 'firstName', 'lastName', 'address'];
	for (let i = 0; i < arrInput.length; i++) {
	  if (!this.state[arrInput[i]]) {
		isValid = false; // Sửa lỗi chính tả ở đây
		alert('Missing parameter: ' + arrInput[i]);
		break;
	  }
	}
  
	return isValid;
  }
  

  handleAddNewUser = () =>{
	let isValid = this.checkValideInput();	
	if(isValid === true){
		//goi api
		this.props.createNewUser(this.state)
	}
  }

  render() {

	


    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={this.toggle}
        className={'modal-user-container'}
		size="lg"
		


      >
        <ModalHeader toggle={this.toggle}>Create a new User</ModalHeader>
        <ModalBody>
          <div className='container'>
			<div className='row'>
				<div className='col-6 form-group'>
					<label>Email</label>
					<input type='text' 
					onChange={(event) =>this.handleOnChangInput(event , "email")}
					value={this.state.email}
					/>
				</div>
				<div className='col-6 form-group'>
					<label>Password</label>
					<input type='password' 
					onChange={(event) =>this.handleOnChangInput(event , "password")}
					value={this.state.password}
					/>
				</div>
				<div className='col-6 form-group'>
					<label>First Name</label>
					<input type='text' 
					onChange={(event) =>this.handleOnChangInput(event , "firstName")}
					value={this.state.firstName}
					/>
					
				</div>
				<div className='col-6 form-group'>
					<label>Last Name</label>
					<input type='text'
					onChange={(event) =>this.handleOnChangInput(event , "lastName")}
					value={this.state.lastName}
					/>
				</div>
				<div className='col-12 form-group'>
					<label>Address</label>
					<input type='text' 
					onChange={(event) =>this.handleOnChangInput(event , "address")}
					value={this.state.address}
					/>
				</div>
			</div>
		  </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => this.handleAddNewUser()}>
            Save change
          </Button>{' '}
          <Button color="secondary" onClick={this.toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);

