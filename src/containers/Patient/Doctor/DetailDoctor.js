import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../../Homepage/HomeHeader';

class DetailDoctor extends Component {
    render() {

        return (
            <div>
				<HomeHeader />
			</div>
        );
    }
}

const mapStateToProps = state => {
    return {


    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailDoctor);
