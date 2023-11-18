import React, { useState } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import dayjs from 'dayjs';
import Modal from 'react-modal';
import 'moment/locale/ko'; // moment 한글 로캘 추가(요일 한글화 용도)
import { useNavigate } from "react-router-dom";
import 'react-calendar/dist/Calendar.css';
import './DatePicker.css';
function DatePicker(props) {
	//Dashboard
	const [isVisible, setIsVisible] = useState(false);

	const toggleBottomSheet = () => {
	  setIsVisible(!isVisible);
	};


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
	const navigateToRanking = () => {
        navigate("/ranking");
    }
    const navigateToOverview = () => {
        navigate("/overview");
    }

	//remove prev/next year button
	const headerRender = () => null;

	//요일 텍스트 일->주
	const formatShortWeekday = (locale, date) => {
		const weekdays = ['주', '월', '화', '수', '목', '금', '토'];
		return weekdays[date.getDay()];
	  };

	//date range picker
	const [selectedRange, setSelectedRange] = useState([]);
	const [startDate, setStartDate] = useState(null);

	const handleDateClick = (value) => {
		// 시작 날짜가 설정되지 않았으면 시작 날짜로 설정
		if (!startDate) {
			setStartDate(value);
    		setSelectedRange([value]); // 하나의 날짜만 있는 배열로 설정
		// setStartDate(value);
		} else {
		// 시작 날짜가 설정되어 있으면 선택 범위를 배열에 추가
			const newRange = [startDate, value];
			setSelectedRange(newRange);
			setStartDate(null); // 시작 날짜 초기화
		}
	};

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
			
        <div className="container">
			<button onClick={toggleBottomSheet}>Toggle Bottom Sheet</button>
			{isVisible && (
			<div style={{
				position: 'fixed',
				bottom: 0,
				left: 0,
				width: '100%',
				height: '200px', // 원하는 높이로 조절
				backgroundColor: 'white',
				boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.2)', // 그림자 추가
				transition: 'transform 0.3s ease-in-out',
			}}>
				{/* 여기에 bottom sheet 내용 추가 */}
				<p>This is the Bottom Sheet</p>
			</div>
			)}
            <div>
                <span className="textMiddle">{formattedDate}</span>
                <button className="dYellowBtn" disabled={true}>TODAY</button>
                <button className="togBtn" onClick={() => {
                    //setOpen로 state값을 변경하기. e1로 상태값 받아왔음.)
                    setOpen((e1) => !e1);
                    }}
                >
                {isOpen ? <img src="./images/arrowBackBtn.svg"/> : <img src="./images/arrowOpenBtn.svg" alt="logo" />/* 추후 이미지를 넣어야할지? */}  
                </button>
            </div>
            <span className="textMiddle">오늘 꿀성경</span>
            <span className="chkBox">
                <button onClick={() => {
                    //setCheck로 state값을 변경하기. e2로 상태값 받아왔음.)
                    setCheck((e2) => !e2);
                    }}
                >
                {isCheck ? <img src="./images/checked.svg"/> : <img src="./images/unchecked.svg" alt="logo" />/* 추후 이미지를 넣어야할지? */} 
                </button>
            </span>
            <div>
                <button className="yellowBtn" onClick={navigateToRanking}>랭킹 보기</button>
                <button className="yellowBtn" onClick={navigateToOverview}>성경개관</button>
            </div>
            <Calendar 
                onChange = {onChange} // useState로 포커스 변경 시 현재 날짜 받아오기
        		value={selectedRange}
                view = 'month'
				rangeType='range'
				selectRange={true}
				onClickDay={handleDateClick} // 날짜 범위 선택용
				next2Label={null} //년 단위 이동 버튼 제거
				prev2Label={null} //년 단위 이동 버튼 제거
				formatShortWeekday={formatShortWeekday}
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
				{selectedRange && (
      <>
	  {console.log("selectedRange.length:", selectedRange.length)}
        {selectedRange.length === 0 ? (  //여기 로직 작동안함.. selectedRange.length 로그도 이상함..
          <span>{moment(selectedRange[0]).format("YYYY년 MM월 DD일 (dd)요일")}</span>
        ) : (
          <>
							{selectedRange
							.sort((a, b) => a - b) // 선택된 날짜를 오름차순으로 정렬
							.map((date, index, array) => (
								<span key={index}>
								{moment(date).format("YYYY년 MM월 DD일 (dd)요일")}
								{index < array.length - 1 && ' - '}
								</span>
							))}
						</>
						)}
					</>
					)}
				{/* {selectedRange.length === 1
				? moment(selectedRange[0]).format("YYYY년 MM월 DD일 (dd)요일")
				: selectedRange.length === 2 && moment(selectedRange[0]).isSame(selectedRange[1], 'day')
					? moment(selectedRange[0]).format("YYYY년 MM월 DD일 (dd)요일")
					: `${moment(selectedRange[0]).format("YYYY년 MM월 DD일 (dd)요일")} - ${moment(selectedRange[1]).format("YYYY년 MM월 DD일 (dd)요일")}`
				}	 */}
				</div>
				해당 기간 꿀성경 체크를 하시겠습니까?
                <div>
                    <button onClick={()=>setModalIsOpen(false)}>다시 체크하기</button>
                    <button onClick={()=>setModalIsOpen(false)} className="yellowBtn">예</button>
                </div>
			</Modal>
			
			{/* <Modal isOpen={modalIsOpen}>
                <div className="curDate">
                    {moment(value).format("YYYY년 MM월 DD일")} 
                </div>
                해당 기간 꿀성경 체크를 하시겠습니까?
                <div>
                    <button onClick={()=>setModalIsOpen(false)}>다시 체크하기</button>
                    <button onClick={()=>setModalIsOpen(false)} className="yellowBtn">예</button>
                </div>
            </Modal> */}
        </div>
      );
}
export default DatePicker;
