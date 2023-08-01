import React, { Component } from "react";
import { connect } from "react-redux";
import "./ManageSchedule.scss";
import { FormattedMessage } from "react-intl";
import Select from "react-select";
import * as action from "../../../store/actions";
import { LANGUAGES , dateFormat } from "../../../utils";
import DatePicker from "../../../components/Input/DatePicker";
import moment from "moment";
import FormattedDate from "../../../components/Formating/FormattedDate";
import _, { result } from "lodash";
import { saveBulkDoctor } from "../../../services/userService";

import { toast } from "react-toastify";
class ManageSchedule extends Component {
  constructor(props) {
    super(props);
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    this.state = {
      listDoctors: [],
      selectedDoctor: {},
      currentDate: "",
      rangeTime: [],
      activeButtonIndices: [],
    };
  }

  componentDidMount() {
    this.props.fetchAllDoctor();
    this.props.fetchAllScheduleTime();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.allDoctors !== this.props.allDoctors) {
      let dataSelect = this.buildDataInputSelect(this.props.allDoctors);
      this.setState({
        listDoctors: dataSelect,
      });
    }
    if (prevProps.language !== this.props.language) {
      let dataSelect = this.buildDataInputSelect(this.props.allDoctors);
      this.setState({
        listDoctors: dataSelect,
      });
    }
    if (prevProps.allScheduleTime !== this.props.allScheduleTime) {
      this.setState({
        rangeTime: this.props.allScheduleTime,
      });
    }
  }

  buildDataInputSelect = (inputData) => {
    let result = [];
    let { language } = this.props;
    if (inputData && inputData.length > 0) {
      inputData.map((item, index) => {
        let object = {};
        let labelVi = `${item.lastName} ${item.firstName}`;
        let labelEn = `${item.firstName} ${item.lastName}`;
        object.label = language === LANGUAGES.VI ? labelVi : labelEn;
        object.value = item.id;
        result.push(object);
      });
    }
    return result;
  };

  handleOnChangeDatePicker = (date) => {
    this.setState({
      currentDate: date[0],
    });
  };

  handleChangeSelect = async (selectedDoctor) => {
    this.setState({ selectedDoctor });
  };

  handleButtonClicked = (index) => {
    this.setState((prevState) => {
      const { activeButtonIndices } = prevState;
      const isActive = activeButtonIndices.includes(index);

      if (isActive) {
        // If the button is already active, remove its index from the array
        return {
          activeButtonIndices: activeButtonIndices.filter((i) => i !== index),
        };
      } else {
        // If the button is not active, add its index to the array
        return {
          activeButtonIndices: [...activeButtonIndices, index],
        };
      }
    });
  };

  handleSaveSchedule = async () => {
    // Xử lý lưu thông tin ở đây
    // Lấy các nút đã được active
    let result = []
    const { rangeTime, activeButtonIndices, currentDate, selectedDoctor } =
      this.state;
    const selectedTimes = rangeTime.filter((item, index) =>
      activeButtonIndices.includes(index)
    );
    // let FormattedDate = moment(currentDate).format(dateFormat.SEND_TO_SERVER)
    let FormattedDate = new Date(currentDate).getTime()

    if (!currentDate) {
      toast.error("Invalid Date");
      return;
    }
    if (!selectedDoctor) {
      toast.error("Invalid Doctor");
      return;
    }
    if (activeButtonIndices.length === 0) {
      toast.error("You must select at least one time slot");
      return;
    }
    selectedTimes.map(time =>{
        let object = {}
        object.doctorId = selectedDoctor.value
        object.date = FormattedDate
        object.timeType = time.keyMap
        result.push(object)
    })
    let res = await saveBulkDoctor({
      arrSchedule: result,
      doctorId : selectedDoctor.value,
      FormattedDate: FormattedDate
    })
    if(res && res.errCode === 0){
     toast.success("Sucess save infor")
    }else{
      toast.error("error")
    }
   };


  render() {
    let yesterday = new Date(new Date().setDate(new Date().getDate()-1))
    const { rangeTime, activeButtonIndices } = this.state;
    let { language } = this.props;
    return (
      <div className="manage-schedule-container">
        <div className="m-s-title">
          <FormattedMessage id="manage-schedule.title" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6 form-group">
              <label>
                <FormattedMessage id="manage-schedule.choose-doctor" />
              </label>
              <Select
                value={this.state.selectedDoctor}
                onChange={this.handleChangeSelect}
                options={this.state.listDoctors}
                className="form-control"
              />
            </div>
            <div className="col-6 form-group">
              <label>
                <FormattedMessage id="manage-schedule.choose-day" />
              </label>
              <DatePicker
                className="col-3 form-control"
                onChange={this.handleOnChangeDatePicker}
                value={this.state.currentDate}
                minDate={yesterday}
              />
            </div>
            <div className="col-12 pick-hour-container">
              {rangeTime &&
                rangeTime.length &&
                rangeTime.map((item, index) => {
                  const isActive = activeButtonIndices.includes(index);

                  return (
                    <button
                      className={`btn ${isActive ? "active" : ""}`}
                      key={index}
                      onClick={() => this.handleButtonClicked(index)}
                    >
                      {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                    </button>
                  );
                })}
            </div>
            <button
              className="col-1 btn btn-primary"
              onClick={this.handleSaveSchedule}
            >
              <FormattedMessage id="manage-schedule.save-infor" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    allDoctors: state.admin.allDoctors,
    language: state.app.language,
    allScheduleTime: state.admin.allScheduleTime,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllDoctor: () => dispatch(action.fetchAllDoctor()),
    fetchAllScheduleTime: () => dispatch(action.fetchAllScheduleTime()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageSchedule);
