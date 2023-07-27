import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Outstanding.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as action from "../../../store/actions"
import { LANGUAGES } from '../../../utils';


class Outstanding extends Component {
	constructor(props){
		super(props)
		this.state = {
			arrDoctor: []
		}
	}

	componentDidUpdate(prevProps){
		if(prevProps.topDoctorsRedux !== this.props.topDoctorsRedux){
			this.setState({
				arrDoctor: this.props.topDoctorsRedux
			})
		}
	}

    componentDidMount(){
		this.props.loadTopDoctors()
		
	}


    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,

        };
		let allarrDoctors = this.state.arrDoctor
		console.log("check allarrDoctors" , this.props.topDoctorsRedux)
		let { language } = this.props;
        return (
            <div className='section-outstanding'>
                <div className='outstanding-container'>
                    <div className='outstanding-header'>
                        <span>Bác sĩ nổi bật tuần qua</span>
                        <button>Xem thêm</button>
                    </div>
                    <div className='outstanding-body'>
                        <Slider {...settings}>
                           
							{allarrDoctors && allarrDoctors.length> 0 && 
							allarrDoctors.map((item, index)=>{
								let imageBase64 = ''
								if(item.image){
									imageBase64 = new Buffer(item.image, 'base64').toString('binary')
								}
								let nameVi = `${item.positionData.valueVi}, ${item.firstName} ${item.lastName}`;
								let nameEn = `${item.positionData.valueEn}, ${item.firstName} ${item.lastName}`;
								return(
									<div className='outstanding-content' key={index}>
										<div className='img-customize'>                     
										<img src={imageBase64} />
											<div className='title-container'>
												<div className='namedoctor-title'>{ language === LANGUAGES.VI ? nameVi : nameEn}</div>
												<div className='namedoctor-caption'>Sức khỏe tâm thần - Tư vấn, trị liệu tâm lý</div>
											</div>
										</div>
									</div>
								)
							})
							}
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
		topDoctorsRedux: state.admin.topDoctors
    };
};

const mapDispatchToProps = dispatch => {
    return {
		loadTopDoctors : () => dispatch(action.fetchTopDoctor())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Outstanding);
