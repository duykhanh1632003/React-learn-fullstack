import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeFooter.scss';

class HomeFooter extends Component {

    
    render() {
        return (
            <div className='section-footer '>
				<div className='text'>© 2023 BookingCare.</div>
				<div className='logo'>
					<i className="fab fa-youtube"></i>
					<i className="fab fa-facebook"></i>
				</div>
			</div>
        )
	}
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
