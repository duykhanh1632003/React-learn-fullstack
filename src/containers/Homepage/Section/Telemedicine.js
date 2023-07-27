import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Telemedicine.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



class Telemedicine extends Component {

    
    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,

        };
        return (
            <div className='section-telemedicine'>
                <div className='telemedicine-container'>
                    <div className='telemedicine-header'>
                        <span>Bác sĩ từ xa qua Video</span>
                        <button>Xem thêm</button>
                    </div>
                    <div className='telemedicine-body'>
                        <Slider {...settings}>
                            <div className='img-customize'>                     
                                <img src='https://cdn.bookingcare.vn/fr/w300/2023/06/20/113407-tu-van-tri-lieu-tam-ly-tu-xa.jpg'/>
                                <div>Sức khỏe tâm thần từ xa</div>
                            </div>
                            <div className='img-customize'>
                                <img src='https://cdn.bookingcare.vn/fr/w300/2023/06/20/113407-tu-van-tri-lieu-tam-ly-tu-xa.jpg'/>
                                <div>Sức khỏe tâm thần từ xa</div>
                            </div>
                            <div className='img-customize'>
                                <img src='https://cdn.bookingcare.vn/fr/w300/2023/06/20/113407-tu-van-tri-lieu-tam-ly-tu-xa.jpg'/>
                                <div>Sức khỏe tâm thần từ xa</div>
                            </div>
                            <div className='img-customize'>
                                <img src='https://cdn.bookingcare.vn/fr/w300/2023/06/20/113407-tu-van-tri-lieu-tam-ly-tu-xa.jpg'/>
                                <div>Sức khỏe tâm thần từ xa</div>
                            </div>
                            <div className='img-customize'>
                                <img src='https://cdn.bookingcare.vn/fr/w300/2023/06/20/113407-tu-van-tri-lieu-tam-ly-tu-xa.jpg'/>
                                <div>Sức khỏe tâm thần từ xa</div>
                            </div>
                            <div className='img-customize'>
                                <img src='https://cdn.bookingcare.vn/fr/w300/2023/06/20/113407-tu-van-tri-lieu-tam-ly-tu-xa.jpg'/>
                                <div>Sức khỏe tâm thần từ xa</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Telemedicine);
