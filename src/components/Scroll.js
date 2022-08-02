import React, {Component} from "react";
import './scroll.css'

class Scroll extends Component{
constructor(){
    super()
    this.state= {}
    this.onScroll = this.onScroll.bind(this) 
    shadowTop = document.querySelector('.shadow--top'),
    shadowBottom = document.querySelector('.shadow--bottom'),
}
onScroll() {
    var currentScroll = window.scrollTop / (contentScrollHeight);
    
  shadowTop.style.opacity = currentScroll;
  shadowBottom.style.opacity = 1 - currentScroll;
}
render(){
    const shadowScroll=()=>{
var content = document.querySelector('.content'),
    wrapper = document.querySelector('.wrapper'),
    contentScrollHeight = content.scrollHeight - wrapper.offsetHeight;

content.addEventListener('scroll', this.onScroll);

    return (
        <div class='wrapper'>
            <div class='shadow shadow--top'></div> 
            <div class='shadow shadow--bottom'></div> 
            <div class='content'>
            {}
            </div>
        </div>
    )
};

}
}
export default Scroll;