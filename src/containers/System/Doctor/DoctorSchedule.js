import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import './DoctorSchedule.scss'
import { LANGUAGES } from "../../../utils";
import localization from 'moment/locale/vi'
import { getScheduleByDate } from "../../../services/userService";
import { FormattedMessage } from "react-intl";

class DoctorSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allDays: [],
      allAvailableTime: []
    };
  }

  componentDidMount() {
    let { language } = this.props;
    this.updateAllDays(language);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.language !== this.props.language) {
      this.updateAllDays(this.props.language);
    }
  }

  isToday(date) {
    const today = moment().startOf('day');
    return moment(date).isSame(today, 'day');
  }

  getFormattedDate(date, language) {
    if (this.isToday(date)) {
      if (language === LANGUAGES.VI) {
        return `Today - ${moment(date).locale('vi').format('DD/MM')}`;
      } else {
        return `Today - ${moment(date).locale('en').format('MM/DD')}`;
      }
    } else {
      if (language === LANGUAGES.VI) {
        return moment(date).locale('vi').format('dddd - DD/MM');
      } else {
        return moment(date).locale('en').format('dddd - MM/DD');
      }
    }
  }

  updateAllDays = (language) => {
    let allDate = [];
    for (let i = 0; i < 7; i++) {
      let object = {};
      let currentDate = moment(new Date()).add(i, 'days').startOf('day').valueOf();
      object.label = this.getFormattedDate(currentDate, language);
      object.value = currentDate;

      allDate.push(object);
    }

    this.setState({
      allDays: allDate
    });
  };

  handleOngChangeSelect = async (event) => {
    let date = event.target.value;
    let doctorId = this.props.detailDoctor.id;
    let res = await getScheduleByDate(doctorId, date);
    if (res && res.errCode === 0) {
      this.setState({
        allAvailableTime: res.data ? res.data : []
      });
    }
  };

  render() {
    let { allDays, allAvailableTime } = this.state;
    let { language } = this.props;
    return (
      <div className="doctor-schedule-container">
        <div className="all-schedule">
          <select onChange={(event) => this.handleOngChangeSelect(event)}>
            {allDays && allDays.length > 0 &&
              allDays.map((item, index) => (
                <option value={item.value} key={index}>{item.label}</option>
              ))
            }
          </select>
        </div>
        <div className="all-available-time">
          <div className="text-calendar">
            <span><i className="fas fa-calendar-alt"></i><FormattedMessage id="patient.detail-doctor.schedule"></FormattedMessage></span>
          </div>
          <div className="time-content">
            {allAvailableTime && allAvailableTime.length > 0 ?
            <>
            <div>
              {allAvailableTime.map((item, index) => {
                let timeDisplay = language === LANGUAGES.VI ? item.timeTypeData.valueVi : item.timeTypeData.valueEn;
                return (
                  <button key={index} value={index}>{timeDisplay}</button>
                );
              })
              }
            </div>
           

            <div className="book-free">
              <span><FormattedMessage id= "patient.detail-doctor.choose"/></span><i className="far fa-hand-point-up"></i> <span><FormattedMessage id="patient.detail-doctor.put"/></span>
            </div>
            </>
            :
            <div><FormattedMessage id="patient.detail-doctor.error"/></div>
            }
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(DoctorSchedule);
