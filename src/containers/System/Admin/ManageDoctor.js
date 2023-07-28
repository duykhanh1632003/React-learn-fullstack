import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import * as action from "../../../store/actions";
import { toast } from 'react-toastify';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import './ManageDoctor.scss';
import Select from 'react-select';
import { LANGUAGES } from '../../../utils';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
const mdParser = new MarkdownIt();

class ManageDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
		contentMarkdown : '',
		contentHTML : '',
		selectedDoctor: '',
		description:'',
		listDoctors : [],


	};
  }

  componentDidMount() {
	this.props.fetchAllDoctor()	
}

	buildDataInputSelect = (inputData) =>{
		let result = []
		let { language } = this.props
		if(inputData && inputData.length > 0){
			inputData.map((item, index)=>{
				let object = {}
				let labelVi = `${item.lastName} ${item.firstName}`
				let labelEn = `${item.firstName} ${item.lastName}`
				object.label = language === LANGUAGES.VI ? labelVi : labelEn
				object.value = item.id
				result.push(object)
			})
			
		}
		return result
	}

  handleEditorChange = ({ html, text }) => {
	this.setState({
		contentMarkdown : text,
		contentHTML :html, 
	})
    console.log('handleEditorChange', html, text);
    // Your code here to handle the changes in the editor's content
  };

  componentDidUpdate(prevProps){
	if(prevProps.allDoctors !== this.props.allDoctors){
		let dataSelect = this.buildDataInputSelect(this.props.allDoctors)
		this.setState({
			listDoctors: dataSelect
		})
	}
  }

  handleChange = (selectedDoctor) => {
    this.setState({ selectedDoctor }, () =>
      console.log(`Option selected:`, this.state.selectedDoctor)
    );
  };

  handleSaveContentMarkdown = () =>{
	this.props.saveDetailDoctor({
		contentHTML: this.state.contentHTML,
		contentMarkdown: this.state.contentMarkdown,
		description: this.state.description,
		doctorId: this.state.selectedDoctor.value
	})
  }

  handleOnChangeDescription = (event) =>{
	this.setState({
		description: event.target.value
	})
  }

  render() {
    return (
      <div className='manage-doctor-container'>
        <div className='manage-doctor-title'>Tạo thêm thông tin Bác Sỹ</div>
		<div className='more-infor'>
			<div className='content-left form-group'>
				<label>Thông tin giới thiệu</label>
				<textarea className='form-control' row="4"
				onChange={(event) => this.handleOnChangeDescription(event)}
				value={this.state.description}
				>

				</textarea>
			</div>
			<div className='content-right'>
				<label>Chọn bác sĩ</label>
				<Select
					value={this.state.selectedDoctor}
					onChange={this.handleChange}
					options={this.state.listDoctors}
					className="form-control"
				/>
			</div>
		</div>
        <div className='manage-doctor-editor'>
          <MdEditor
            style={{ height: '500px' }}
            renderHTML={text => mdParser.render(text)}
            onChange={this.handleEditorChange}
          />
        </div>
		<button className='save-content-doctor' onClick={() => this.handleSaveContentMarkdown()}>Lưu thông tin</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
	language : state.app.language,
    allDoctors: state.admin.allDoctors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllDoctor: (id) => dispatch(action.fetchAllDoctor()),
	saveDetailDoctor: (data) => dispatch(action.saveDetailDoctor(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);
