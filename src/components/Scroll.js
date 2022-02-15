// import React, {Component} from "react";
// import './scroll.css'

// class Scroll extends Component{


// render(){
//     const shadowScroll=()=>{
// var content = document.querySelector('.content'),
//     wrapper = document.querySelector('.wrapper'),
//     shadowTop = document.querySelector('.shadow--top'),
//     shadowBottom = document.querySelector('.shadow--bottom'),
//     contentScrollHeight = content.scrollHeight - wrapper.offsetHeight;

// content.addEventListener('scroll', function(){
//   var currentScroll = this.scrollTop / (contentScrollHeight);  
//   shadowTop.style.opacity = currentScroll;
//   shadowBottom.style.opacity = 1 - currentScroll;
// });
// }
//     return (
//         <div class='wrapper'>
//             <div class='shadow shadow--top'></div> 
//             <div class='shadow shadow--bottom'></div> 
//             <div class='content'>
//             {}
//             </div>
//         </div>
//     )

// };

// }
// export default Scroll;