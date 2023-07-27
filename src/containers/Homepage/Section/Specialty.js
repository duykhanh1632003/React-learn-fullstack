import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



class Specialty extends Component {

    
    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,

        };
        return (
            <div className='section-specialty'>
                <div className='specialty-container'>
                    <div className='specialty-header'>
                        <span>Cơ sở y tế nổi bật</span>
                        <button>Xem thêm</button>
                    </div>
                    <div className='specialty-body'>
                        <Slider {...settings}>
                            <div className='img-customize'>                     
                                <img src='https://cdn.bookingcare.vn/fr/w500/2023/05/16/153236-logo-hung-viet.jpg'/>
                                <div>Bệnh viên ung bướu Hưng Việt</div>
                            </div>
                            <div className='img-customize'>
                                <img src='https://cdn.bookingcare.vn/fr/w500/2023/05/16/153236-logo-hung-viet.jpg'/>
                                <div>Bệnh viên ung bướu Hưng Việt</div>
                            </div>
                            <div className='img-customize'>
                                <img src='https://cdn.bookingcare.vn/fr/w500/2023/05/16/153236-logo-hung-viet.jpg'/>
                                <div>Bệnh viên ung bướu Hưng Việt</div>
                            </div>
                            <div className='img-customize'>
                                <img src='https://cdn.bookingcare.vn/fr/w500/2023/05/16/153236-logo-hung-viet.jpg'/>
                                <div>Bệnh viên ung bướu Hưng Việt</div>
                            </div>
                            <div className='img-customize'>
                                <img src='https://cdn.bookingcare.vn/fr/w500/2023/05/16/153236-logo-hung-viet.jpg'/>
                                <div>Bệnh viên ung bướu Hưng Việt</div>
                            </div>
                            <div className='img-customize'>
                                <img src='https://cdn.bookingcare.vn/fr/w500/2023/05/16/153236-logo-hung-viet.jpg'/>
                                <div>Bệnh viên ung bướu Hưng Việt</div>
                            </div>

                        </Slider>
                    </div>
                   
                </div>
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
