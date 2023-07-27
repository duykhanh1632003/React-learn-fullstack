import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Handbook.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


class Handbook extends Component {

    
    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2,

        };
        return (
            <div className='section-handbook'>
                <div className='handbook-container'>
                    <div className='handbook-header'>
                        <span>cẩm nang</span>
                        <button>Xem hết</button>
                    </div>
                    <div className='handbook-body'>
                        <Slider {...settings}>
                            <div className='handbook-content'>
								<div className='img-customize'>                     
									<img src='https://cdn.bookingcare.vn/fr/w300/2023/07/20/160157-dau-lung-duoi-gan-mong-o-nu.png'/>
									<div className='namedoctor-title'>Đau lưng dưới gần mông của phụ nữ là bệnh gì? Càn điều trị như thế nào</div>
								</div>
							</div>
                            <div className='handbook-content'>
								<div className='img-customize'>                     
									<img src='https://cdn.bookingcare.vn/fr/w300/2023/07/17/171744-thoai-hoa-khop-goi-o-nguoi-tre-cover.png'/>
									<div className='namedoctor-title'>Thoái hóa khớp gối ở người trẻ: Nguyên nhân, triệu chứng và cách điều trị</div>
								</div>
							</div>
                            <div className='handbook-content'>
								<div className='img-customize'>                     
									<img src='https://cdn.bookingcare.vn/fr/w500/2023/05/16/153236-logo-hung-viet.jpg'/>
									<div className='namedoctor-title'>Bác sĩ chuyên khoa II Trần Minh Khuyên</div>
								</div>
							</div>
                            <div className='handbook-content'>
								<div className='img-customize'>                     
									<img src='https://cdn.bookingcare.vn/fr/w500/2023/05/16/153236-logo-hung-viet.jpg'/>
									<div className='namedoctor-title'>Bác sĩ chuyên khoa II Trần Minh Khuyên</div>
								</div>
							</div>
                            <div className='handbook-content'>
								<div className='img-customize'>                     
									<img src='https://cdn.bookingcare.vn/fr/w500/2023/05/16/153236-logo-hung-viet.jpg'/>
									<div className='namedoctor-title'>Bác sĩ chuyên khoa II Trần Minh Khuyên</div>
								</div>
							</div>
                            <div className='handbook-content'>
								<div className='img-customize'>                     
									<img src='https://cdn.bookingcare.vn/fr/w500/2023/05/16/153236-logo-hung-viet.jpg'/>
									<div className='namedoctor-title'>Bác sĩ chuyên khoa II Trần Minh Khuyên</div>
								</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Handbook);
