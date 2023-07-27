import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './TableManageUser.scss';
import * as action from "../../../store/actions"
import { toast } from 'react-toastify';

class TableManageUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userRedux: [],
    };
  }

  componentDidMount() {
    this.props.fetchUserRedux();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.listUsers !== this.props.listUsers) {
      this.setState({
        userRedux: this.props.listUsers
      });
    }
  }

  handleDeleteIUser = (event, user) => {
    event.preventDefault(); // Ngăn chặn reload trang khi bấm vào icon "trash"
    
    this.props.deleteAUserRedux(user.id);
  }

  handleEditUser = (event,user) =>{
	event.preventDefault();
	this.props.handleEditUserFromParentKey(user) 
  }



  render() {
    let arrUsers = this.state.userRedux;
    return (
      <table id="TableManageUser">
        <thead>
          <tr>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {arrUsers && arrUsers.length > 0 &&
            arrUsers.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.email}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.address}</td>
                  <td>
                    <button className="btn-edit"
					onClick={(event) => this.handleEditUser(event ,item)}
					>
                      <i className="fas fa-pencil-alt"></i>
                    </button>
                    <button
                      onClick={(event) => this.handleDeleteIUser(event, item)} // Truyền event vào hàm xử lý sự kiện
                      className="btn-delete"
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listUsers: state.admin.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserRedux: () => dispatch(action.fetchAllUsersStart()),
    deleteAUserRedux: (id) => dispatch(action.deleteAUser(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);
