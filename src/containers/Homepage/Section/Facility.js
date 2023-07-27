import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Facility.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



class Facility extends Component {

    
    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,

        };
        return (
            <div className='section-facility'>
                <div className='facility-container'>
                    <div className='facility-header'>
                        <span>Các cơ sở y tế nổi bật</span>
                        <button>Xem tất cả</button>
                    </div>
                    <div className='facility-body'>
                        <Slider {...settings}>
                            <div className='img-customize'>                     
                                <img src='https://osdbachmai.com/wp-content/uploads/2020/04/bach-mai-logo-1.png'/>
                                <div>Bệnh viện Bạch Mai Hà Nội</div>
                            </div>
                            <div className='img-customize'>
                                <img src='https://nld.mediacdn.vn/2021/3/4/9123036029843882015998422189056367329804288n-1585414156450218045174-16148451351232062655415.jpg'/>
                                <div>Bệnh viện Bạch Mai Hà Nội</div>
                            </div>
                            <div className='img-customize'>
                                <img src='https://osdbachmai.com/wp-content/uploads/2020/04/bach-mai-logo-1.png'/>
                                <div>Bệnh viện Bạch Mai Hà Nội</div>
                            </div>
                            <div className='img-customize'>
                                <img src='https://osdbachmai.com/wp-content/uploads/2020/04/bach-mai-logo-1.png'/>
                                <div>Bệnh viện Bạch Mai Hà Nội</div>
                            </div>
                            <div className='img-customize'>
                                <img src='https://osdbachmai.com/wp-content/uploads/2020/04/bach-mai-logo-1.png'/>
                                <div>Bệnh viện Bạch Mai Hà Nội</div>
                            </div>
                            <div className='img-customize'>
                                <img src='https://osdbachmai.com/wp-content/uploads/2020/04/bach-mai-logo-1.png'/>
                                <div>Bệnh viện Bạch Mai Hà Nội</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Facility);
