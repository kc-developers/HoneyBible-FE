import React from 'react';
import styled from 'styled-components';
import "./Overview.css";

function Overview(props) {

	return (
		<div>
			<details>
  				<summary><strong>창세기</strong> "천 지 창 조"</summary>
				<div class="content">
					<p>창세기는 우주 만물의 시작과 기원을 보여 주는 책인 동시에 인류 가운데 들어온 무서운 죄의 근원도 분명하게 드러낸다. 하지만 이에 머물지 않고 창세기는 죄악으로 인해 영원한 파멸 가운데 놓여 있는 인류를 그대로 방치하지 않고 친히 찾아오셔서 구원의 길을 활짝 열어주신 하나님의 놀랍고 오묘한 구원 섭리를 명쾌하게 보여 주고 있다.</p>
					<img src="./assets/Genesis-01.svg"></img>
					<p><br></br>창세기는 비옥한 초승달 지역(페르시아 만에서 시작하여 티그리스와 유브라데 강을 중심한 메소보다미아 지역, 또 요단 강을 중심으로 한 팔레스타인 전역과 애굽의 나일 강 유역에 이르는 광활한 지대)을 무대로 한다. 그중 전반부의 창조와 타락, 홍수와 바벨탑 사건 등은 가나안 북부 지역, 이어 아브라함과 이삭, 야곱의 역사는 가나안 땅, 마지막으로 요셉과 관련된 역사는 애굽이 중심 무대다.</p>
					<img src="./assets/Genesis-02.svg"></img>
  				</div>
			</details>
			<details>
  				<summary><strong>출애굽기</strong> "애 굽 탈 출"</summary>
				<div class="content">
					<p>창세기는 우주 만물의 시작과 기원을 보여 주는 책인 동시에 인류 가운데 들어온 무서운 죄의 근원도 분명하게 드러낸다. 하지만 이에 머물지 않고 창세기는 죄악으로 인해 영원한 파멸 가운데 놓여 있는 인류를 그대로 방치하지 않고 친히 찾아오셔서 구원의 길을 활짝 열어주신 하나님의 놀랍고 오묘한 구원 섭리를 명쾌하게 보여 주고 있다.</p>
					<img src="./assets/Genesis-01.svg"></img>
					<p><br></br>창세기는 비옥한 초승달 지역(페르시아 만에서 시작하여 티그리스와 유브라데 강을 중심한 메소보다미아 지역, 또 요단 강을 중심으로 한 팔레스타인 전역과 애굽의 나일 강 유역에 이르는 광활한 지대)을 무대로 한다. 그중 전반부의 창조와 타락, 홍수와 바벨탑 사건 등은 가나안 북부 지역, 이어 아브라함과 이삭, 야곱의 역사는 가나안 땅, 마지막으로 요셉과 관련된 역사는 애굽이 중심 무대다.</p>
					<img src="./assets/Genesis-02.svg"></img>
  				</div>
			</details>
	  	</div>
		  
	);
}

export default Overview;

class Accordion {
	constructor(el) {
	  // Store the <details> element
	  this.el = el;
	  // Store the <summary> element
	  this.summary = el.querySelector('summary');
	  // Store the <div class="content"> element
	  this.content = el.querySelector('.content');
  
	  // Store the animation object (so we can cancel it if needed)
	  this.animation = null;
	  // Store if the element is closing
	  this.isClosing = false;
	  // Store if the element is expanding
	  this.isExpanding = false;
	  // Detect user clicks on the summary element
	  this.summary.addEventListener('click', (e) => this.onClick(e));
	}
  
	onClick(e) {
	  // Stop default behaviour from the browser
	  e.preventDefault();
	  // Add an overflow on the <details> to avoid content overflowing
	  this.el.style.overflow = 'hidden';
	  // Check if the element is being closed or is already closed
	  if (this.isClosing || !this.el.open) {
		this.open();
	  // Check if the element is being openned or is already open
	  } else if (this.isExpanding || this.el.open) {
		this.shrink();
	  }
	}
  
	shrink() {
	  // Set the element as "being closed"
	  this.isClosing = true;
	  
	  // Store the current height of the element
	  const startHeight = `${this.el.offsetHeight}px`;
	  // Calculate the height of the summary
	  const endHeight = `${this.summary.offsetHeight}px`;
	  
	  // If there is already an animation running
	  if (this.animation) {
		// Cancel the current animation
		this.animation.cancel();
	  }
	  
	  // Start a WAAPI animation
	  this.animation = this.el.animate({
		// Set the keyframes from the startHeight to endHeight
		height: [startHeight, endHeight]
	  }, {
		duration: 400,
		easing: 'ease-out'
	  });
	  
	  // When the animation is complete, call onAnimationFinish()
	  this.animation.onfinish = () => this.onAnimationFinish(false);
	  // If the animation is cancelled, isClosing variable is set to false
	  this.animation.oncancel = () => this.isClosing = false;
	}
  
	open() {
	  // Apply a fixed height on the element
	  this.el.style.height = `${this.el.offsetHeight}px`;
	  // Force the [open] attribute on the details element
	  this.el.open = true;
	  // Wait for the next frame to call the expand function
	  window.requestAnimationFrame(() => this.expand());
	}
  
	expand() {
	  // Set the element as "being expanding"
	  this.isExpanding = true;
	  // Get the current fixed height of the element
	  const startHeight = `${this.el.offsetHeight}px`;
	  // Calculate the open height of the element (summary height + content height)
	  const endHeight = `${this.summary.offsetHeight + this.content.offsetHeight}px`;
	  
	  // If there is already an animation running
	  if (this.animation) {
		// Cancel the current animation
		this.animation.cancel();
	  }
	  
	  // Start a WAAPI animation
	  this.animation = this.el.animate({
		// Set the keyframes from the startHeight to endHeight
		height: [startHeight, endHeight]
	  }, {
		duration: 400,
		easing: 'ease-out'
	  });
	  // When the animation is complete, call onAnimationFinish()
	  this.animation.onfinish = () => this.onAnimationFinish(true);
	  // If the animation is cancelled, isExpanding variable is set to false
	  this.animation.oncancel = () => this.isExpanding = false;
	}
  
	onAnimationFinish(open) {
	  // Set the open attribute based on the parameter
	  this.el.open = open;
	  // Clear the stored animation
	  this.animation = null;
	  // Reset isClosing & isExpanding
	  this.isClosing = false;
	  this.isExpanding = false;
	  // Remove the overflow hidden and the fixed height
	  this.el.style.height = this.el.style.overflow = '';
	}
  }
  
  document.querySelectorAll('details').forEach((el) => {
	new Accordion(el);
  });