import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss'
import { FormattedMessage } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LANGUAGES } from '../../utils';
import { changeLanguageApp } from '../../store/actions';

class HomeHeader extends Component {
    
    changeLanguage = (language) =>{
        //fire redux event : action
        this.props.changeLanguageAppRedux(language)
    }
    render() {
        let language = this.props.language;
        return (
            <React.Fragment>
                 
            <div className='home-header-container'>
                <div className='home-header-content'>
                    <div className='left-content'>
                        <i className='fas fa-bars'></i>
                        <img className='header-logo' src='https://bookingcare.vn/assets/icon/bookingcare-2020.svg' />
                    </div>
                    <div className='center-content'>
                        <div className='child-content'>
                            <div><b><FormattedMessage id="homeheader.speciality"/></b></div>
                                <div className='sub-title'><FormattedMessage id="homeheader.search-doctor" /></div>
                        </div>
                        <div className='child-content'>
                            <div><b><FormattedMessage id="homeheader.child-content1" /></b></div>
                                <div className='sub-title'><FormattedMessage id="homeheader.sub-title1" /></div>
                        </div>
                        <div className='child-content'>
                            <div><b><FormattedMessage id="homeheader.child-content2" /></b></div>
                                <div className='sub-title'><FormattedMessage id="homeheader.sub-title2" /></div>
                        </div>
                        <div className='child-content'>
                            <div><b><FormattedMessage id="homeheader.child-content3" /></b></div>
                                <div className='sub-title'><FormattedMessage id="homeheader.sub-title3" /></div>
                        </div>
                    </div>
                    <div className='right-content'>
                        <div className='support'>
                            <i className='fas fa-question-circle'></i>
                            <FormattedMessage id="homeheader.support" />
                        </div>
                        <div className={language === LANGUAGES.VI ? 'language-vi action' : 'language-vi'} onClick={() => this.changeLanguage(LANGUAGES.VI)}><span>VN</span></div>
                        <div className={language === LANGUAGES.EN ? 'language-en action' : 'language-en'} onClick={() => this.changeLanguage(LANGUAGES.EN)}><span>EN</span></div>
                    </div>
                </div>
            </div>
            <div className='home-header-banner'>
                <div className='content-up'>
                    <div className='title1'><FormattedMessage id="homeheader.content-up-title1" /></div>
                    <div className='title2'><FormattedMessage id="homeheader.content-up-title2" /></div>
                    <div className='search'>
                        <i className='fas fa-search'></i>
                        <input type='text' placeholder='Tìm chuyên khoa khám bệnh'/>
                    </div>
                    <div className='mobile-app'>
                    <img src='https://bookingcare.vn/assets/icon/google-play-badge.svg'></img>
                    <img src='https://bookingcare.vn/assets/icon/app-store-badge-black.svg'></img>
                    </div>
                </div>
                <div className='content-down'>
                    <div className='options'>
                        <div className='option-child'>
                            <div className='icon-child'>
                                <img src='https://cdn.bookingcare.vn/fr/w100/2023/06/07/161905-iconkham-chuyen-khoa.png'></img>
                            </div>
                            <div className='text-child'><FormattedMessage id="homeheader.option-child" /></div>
                        </div>
                        <div className='option-child'>
                            <div className='icon-child'>
                                <img src='https://cdn.bookingcare.vn/fr/w100/2023/06/07/161817-iconkham-tu-xa.png'></img>
                            </div>
                            <div className='text-child'><FormattedMessage id="homeheader.option-child1" /></div>
                        </div>
                        <div className='option-child'>
                            <div className='icon-child'>
                            <img src='https://cdn.bookingcare.vn/fr/w100/2023/06/07/161350-iconkham-tong-quan.png'></img>
                            </div>
                            <div className='text-child'><FormattedMessage id="homeheader.option-child2" /></div>
                        </div>
                        <div className='option-child'>
                            <div className='icon-child'>
                            <img src='https://cdn.bookingcare.vn/fr/w100/2023/06/07/161340-iconxet-nghiem-y-hoc.png'></img>
                            </div>
                            <div className='text-child'><FormattedMessage id="homeheader.option-child3" /></div>
                        </div>
                        <div className='option-child'>
                            <div className='icon-child'>
                            <img src='https://cdn.bookingcare.vn/fr/w100/2023/06/07/161403-iconsuc-khoe-tinh-than.png'></img>
                            </div>
                            <div className='text-child'><FormattedMessage id="homeheader.option-child4" /></div>
                        </div>
                        <div className='option-child'>
                            <div className='icon-child'>
                            <img src='https://cdn.bookingcare.vn/fr/w100/2023/06/07/161410-iconkham-nha-khoa.png'></img>
                            </div>
                            <div className='text-child'><FormattedMessage id="homeheader.option-child5" /></div>
                        </div>
                        <div className='option-child'>
                            <div className='icon-child'>
                            <img src='https://cdn.bookingcare.vn/fr/w100/2023/06/07/161421-icongoi-phau-thuat.png'></img>
                            </div>
                            <div className='text-child'><FormattedMessage id="homeheader.option-child6" /></div>
                        </div>
                        <div className='option-child'>
                            <div className='icon-child'>
                            <img src='https://cdn.bookingcare.vn/fr/w100/2023/06/07/161542-iconsan-pham-y-te.png'></img>
                            </div>
                            <div className='text-child'><FormattedMessage id="homeheader.option-child7" /></div>
                        </div>
                        <div className='option-child'>
                            <div className='icon-child'>
                            <img src='https://cdn.bookingcare.vn/fr/w100/2023/06/07/161442-iconbai-test-suc-khoe2.png'></img>
                            </div>
                            <div className='text-child'><FormattedMessage id="homeheader.option-child8" /></div>
                        </div>
                    </div>
                    </div>
                </div>
                
            </React.Fragment>
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
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);