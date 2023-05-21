import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Intro() {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/login');
	};

	return (
		<IntroDiv>
			<HoneyImage src="./assets/honey.svg" alt="honeyLogo" />
			<IntroText>
				<IntroBig>
					<div>맑청하!!!!</div>
					<div>어서오세요,</div>
					<div>
						<YellowText>꿀성경</YellowText>
						<span>입니다.</span>
					</div>
				</IntroBig>
				<IntroSmall>
					<div>맑은샘광천교회 청년부</div>
				</IntroSmall>
			</IntroText>
			<IntroButton onClick={handleClick}>탭해서 시작하기</IntroButton>
		</IntroDiv>
	);
}

export default Intro;

const IntroDiv = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: var(--color-background-black);
`;

const HoneyImage = styled.img`
	top: 10%;
`;

const IntroText = styled.div`
	color: #ffffff;
`;

const IntroBig = styled.div`
	font-size: 4rem;
	letter-spacing: -0.03em;
`;

const IntroSmall = styled.div`
	margin-top: 2rem;
	font-size: 1.6rem;
`;

const YellowText = styled.span`
	color: var(--color-yellow);
	font-weight: 700;
`;

const IntroButton = styled.button`
	/* width: 30%; */
	margin: 0 auto;
	text-align: center;
	border: none;
	background-color: var(--color-background-black);
	color: #ffffff;
	font-weight: 500;
	font-size: 2rem;
`;
