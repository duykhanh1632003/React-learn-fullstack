import React, { Component } from 'react';
import { connect } from 'react-redux';
import './About.scss';

class About extends Component {
  render() {
    return (
      <div className='section-share section-about'>
        <div className='section-title'>
          Truyền thông nói gì về Booking care
        </div>
        <div className='section-container'>
          <div className='section-left'>
            <iframe
              width="300"
              height="300"
              src="https://www.youtube.com/embed/147SkAVXEqM?list=PLncHg6Kn2JT6E38Z3kit9Hnif1xC_9VqI"
              title="#51 Kết Thúc Design Giao Diện Clone BookingCare.vn 4 | React.JS Cho Người Mới Bắt Đầu"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className='section-right'>
            <p className='section-text'>
              🚀 Learn by doing : Hiện tại, mình đang làm 1 tutorial miễn phí, học và thực hành để trở thành 1 fullstack web developer từ A đến Z, với nội dung như sau:
            </p>
            <ul className='section-list'>
              <li>
                Các bạn nhận được gì khi kết thúc khóa học?
                <ul>
                  <li>Các bạn có thể làm chủ công nghệ, cũng như học được, biết được những kiến thức thực tế dùng tại các công ty hiện nay. Sau khi kết thúc khóa học này, mình tin chắc rằng dự án này đủ lớn, đủ thực tế để cho các bạn mới ra trường viết vào CV xin việc của mình ^^</li>
                  <li>Các bạn hiểu được 1 FullStack Web Developer thì cần chuẩn bị những gì. Ở đây, mình không dám chắc 100% các bạn sẽ trở thành Fullstack Developer, nhưng nếu bạn chọn Frontend hay Backend thì khóa học này cũng cung cấp cho bạn nhiều điều bổ ích</li>
                </ul>
              </li>
              {/* Các mục li tiếp theo ở đây */}
            </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
