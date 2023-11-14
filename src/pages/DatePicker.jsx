import React, { useState } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import dayjs from 'dayjs';
import Modal from 'react-modal';
import { useNavigate } from "react-router-dom";
import 'react-calendar/dist/Calendar.css';
import './DatePicker.css';
// import { Modal } from '@mui/material';
function DatePicker(props) {
    //current Date
    const today = new Date();
    const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;
    //clicked date (default : today date)
    const [value, onChange] = useState(new Date());
    //checked toggle calendar
    const [isOpen, setOpen] = useState(false);
    //checked today read Bible
    const [isCheck, setCheck] = useState(false);
    //page navigation
    const navigate = useNavigate();
    const navigateToOverview = () => {
        navigate("/overview");
    }
    //tomorrow disabled dates
    const [date, setDate] = useState(new Date());
    const disabledDates = () => {
        const lastDayOfYear = new Date(today.getFullYear(), 11, 31).getDate();
        const dates = Array.from({length: lastDayOfYear}, (_, index) => new Date(today.getFullYear(), 0, 1 + index));
        //console.log('disabledDates >>>>>>>>>>>', dates)
        return dates;
    };
    const isDateDisabled = ({ date }) => {
        const disabledDays = disabledDates();
        const currentDate = new Date();
        //console.log('this date >>>>>>>>>>> ', date);
        //console.log('this currentDate >>>>>>>>>>> ', currentDate);
        return date >= currentDate || disabledDays.find(disabledDates => disabledDates.toDateString() === date.toDateString());
    };
    //modal   
    const [modalIsOpen, setModalIsOpen] = useState(false);
    // const [mark, setMark] = useState([]);
    // const { data } = useQuery(
    //   ["logDate", month],
    //   async () => {
    //  const result = await axios.get(
    //    `/api/healthLogs?health_log_type=DIET`
    //  );
    //  return result.data;
    //   },
    //   {
    //  onSuccess: (data: any) => {
    //    setMark(data);
    //   // ["2022-02-02", "2022-02-02", "2022-02-10"] 형태로 가져옴
    //  },
    //   }
    // );
    return (
        <div>
            <div>
                <span>{formattedDate}</span>
                <button className="dYellowBtn">TODAY</button>
                <button className="togBtn" onClick={() => {
                    //setOpen로 state값을 변경하기. e1로 상태값 받아왔음.)
                    setOpen((e1) => !e1);
                    }}
                >
                {isOpen ? "↓" : "↑"/* 추후 이미지를 넣어야할지? */}  
                </button>
            </div>
            <span>오늘 꿀성경</span>
            <span className="chkBox">
                <button onClick={() => {
                    //setCheck로 state값을 변경하기. e2로 상태값 받아왔음.)
                    setCheck((e2) => !e2);
                    }}
                >
                {isCheck ? "checked" : "unchecked"/* 추후 이미지를 넣어야할지? */} 
                </button>
            </span>
            <div>
                <button className="yellowBtn">랭킹 보기</button>
                <button className="yellowBtn" onClick={navigateToOverview}>성경개관</button>
            </div>
            
            <Calendar 
                onChange = {onChange} // useState로 포커스 변경 시 현재 날짜 받아오기
                value = {value} 
                view = 'month'
                // selectRange = {true}
                formatDay = {(locale, date) => dayjs(date).format('DD')} // 날'일' 제외하고 숫자만 보이도록 설정
                calendarType="US" // 일요일로 시작하는 캘린더 타입
                tileDisabled={isDateDisabled}
                //{({date}) => disabledDates.includes(date.getDate())} //date.getMonth() 추가해야함.
                
                // tileContent={({ date, view }) => {  // 날짜별 체크하는 dot 불러오기
                //  if (mark.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
                //    return (
                //     <>
                //       <div className="flex justify-center items-center absoluteDiv">
                //         <div className="dot"></div>
                //       </div>
                //     </>
                //   );
                //  }
                //   }}
            />
            <button onClick={()=>setModalIsOpen(true)} className="blackBtn">체크하기</button>
            <Modal isOpen={modalIsOpen}>
                <div className="curDate">
                    {moment(value).format("YYYY년 MM월 DD일")} 
                </div>
                해당 기간 꿀성경 체크를 하시겠습니까?
                <div>
                    <button onClick={()=>setModalIsOpen(false)}>다시 체크하기</button>
                    <button onClick={()=>setModalIsOpen(false)} className="yellowBtn">예</button>
                </div>
            </Modal>
        </div>
      );
}
export default DatePicker;
