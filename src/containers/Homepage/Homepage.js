import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Specialty from './Section/Specialty';
import Telemedicine from './Section/Telemedicine';
import Facility from './Section/Facility';
import Outstanding from './Section/Outstanding';
import Handbook from './Section/Handbook';
import About from './Section/About';
import HomeFooter from './Section/HomeFooter';
class Homepage extends Component {

    render() {

        return (
            <div>
				<HomeHeader />
                <Specialty />
                <Telemedicine />
                <Facility />
                <Outstanding />
                <Handbook />
                <About />
                <HomeFooter />
			</div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
