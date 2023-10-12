import React, { useState } from 'react';
import Calendar from 'react-calendar';
import dayjs from 'dayjs';
import Modal from 'react-modal';
import 'react-calendar/dist/Calendar.css';
import './DatePicker.css';
// import { Modal } from '@mui/material';

function DatePicker(props) {
	const [value, onChange] = useState(new Date());
	const [modalIsOpen, setModalIsOpen] = useState(false);

	// const [mark, setMark] = useState([]);

	// const { data } = useQuery(
	//   ["logDate", month],
	//   async () => {
	// 	const result = await axios.get(
	// 	  `/api/healthLogs?health_log_type=DIET`
	// 	);
	// 	return result.data;
	//   },
	//   {
	// 	onSuccess: (data: any) => {
	// 	  setMark(data);
	// 	 // ["2022-02-02", "2022-02-02", "2022-02-10"] 형태로 가져옴
	// 	},
	//   }
	// );

	return (
		<div>
			{/* <div className="text-gray-500 mt-4">
			{moment(value).format("YYYY년 MM월 DD일")} 
		</div> */}
			<button className="yellowBtn">랭킹 보기</button>
			<button className="yellowBtn">성경개관</button>
			<Calendar
				onChange={onChange} // useState로 포커스 변경 시 현재 날짜 받아오기
				value={value}
				// selectRange = {true}
				formatDay={(locale, date) => dayjs(date).format('DD')} // 날'일' 제외하고 숫자만 보이도록 설정
				calendarType="US" // 일요일로 시작하는 캘린더 타입
				// tileContent={({ date, view }) => {  // 날짜별 체크하는 dot 불러오기
				// 	if (mark.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
				// 	  return (
				// 	   <>
				// 		 <div className="flex justify-center items-center absoluteDiv">
				// 		   <div className="dot"></div>
				// 		 </div>
				// 	   </>
				// 	 );
				// 	}
				//   }}
			/>
			<button onClick={() => setModalIsOpen(true)} className="blackBtn">
				체크하기
			</button>
			<Modal isOpen={modalIsOpen}>
				해당 기간 꿀성경 체크를 하시겠습니까?
				<div>
					<button onClick={() => setModalIsOpen(false)}>다시 체크하기</button>
					<button onClick={() => setModalIsOpen(false)} className="yellowBtn">
						예
					</button>
				</div>
			</Modal>
		</div>
	);
}

export default DatePicker;
