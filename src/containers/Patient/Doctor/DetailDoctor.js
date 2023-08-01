import React, { Component } from "react";
import { connect } from "react-redux";
import HomeHeader from "../../Homepage/HomeHeader";
import "./DetailDoctor.scss";
import { getDeltailInforDoctor } from "../../../services/userService";
import { LANGUAGES } from "../../../utils";
import DoctorSchedule from "../../System/Doctor/DoctorSchedule";


class DetailDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailDoctor: {},
    };
  }

  async componentDidMount() {
    if (
      this.props.match &&
      this.props.match.params &&
      this.props.match.params.id
    ) {
      let id = this.props.match.params.id;
      let res = await getDeltailInforDoctor(id);
      if (res && res.errCode === 0) {
        this.setState({
          detailDoctor: res.data,
        });
      }
    }
  }

  componentDidUpdate(prevProps) {}

  render() {
    let { detailDoctor } = this.state;
    let { language } = this.props;
    let nameVi = "";
    let nameEn = "";
    if (detailDoctor && detailDoctor.positionData) {
      nameVi = `${detailDoctor.positionData.valueVi}, ${detailDoctor.firstName} ${detailDoctor.lastName}`;
      nameEn = `${detailDoctor.positionData.valueEn}, ${detailDoctor.lastName} ${detailDoctor.firstName}`;
    }

    return (
      <div>
        <HomeHeader iSShowBanner={false} />
        <div className="doctor-detail-container">
          <div className="intro-doctor">
            <div
              className="content-left"
              style={{ backgroundImage: `url(${detailDoctor.image})` }}
            ></div>
            <div className="content-right">
              <div className="up">
                {language === LANGUAGES.VI ? nameVi : nameEn}
              </div>
              <div className="down">
                {detailDoctor.Markdown && detailDoctor.Markdown.description && (
                  <span>{detailDoctor.Markdown.description}</span>
                )}
              </div>
            </div>
          </div>
          <div className="shedule-doctor">
              <div className="content-left">
                  <DoctorSchedule 
                  detailDoctor = {detailDoctor}
                  />
              </div>
              <div className="content-right">

              </div>
          </div>
          <div className="detail-infor-doctor">
            {detailDoctor &&
              detailDoctor.Markdown &&
              detailDoctor.Markdown.contentHTML && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: detailDoctor.Markdown.contentHTML,
                  }}
                ></div>
              )}
          </div>
          <div className="comment-doctor"></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailDoctor);
