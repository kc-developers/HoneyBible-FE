import React, { useState } from 'react';
import Calendar from 'react-calendar';
import dayjs from 'dayjs';
import 'react-calendar/dist/Calendar.css'; // css import

function DatePicker(props) {
	const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar 
	  	onChange={onChange} // useState로 포커스 변경 시 현재 날짜 받아오기
	  	value={value} 
	  	formatDay ={(locale, date) => dayjs(date).format('DD')} // 날'일' 제외하고 숫자만 보이도록 설정
	  	//minDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
  	  	//maxDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
		//showNeighboringMonth={false} //  이전, 이후 달의 날짜는 보이지 않도록 설정
	  />
    </div>
  );
}

export default DatePicker;
