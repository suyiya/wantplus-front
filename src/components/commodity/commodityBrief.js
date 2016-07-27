import React, { Component, PropTypes } from 'react'
import { Router, Route, Link } from 'react-router'
import { render } from 'react-dom'
//import Mask from '../public/mask'
import BriefHeader from '../commodity/briefChirldren/briefHeader'
import BriefFooter from '../commodity/briefChirldren/briefFooter'

class CommodityBrief extends Component {
    handleClicked(event){
        const {data,showCommodityDetail,addCommodityUrl} = this.props;
        addCommodityUrl(data.commodityId);
        showCommodityDetail(data,"block")
    }
    handleHover(event){
        console.log(this);
        $(event.target).css("opacity","0.5");
    }
    handleLeave(event){
        console.log(this);
        $(event.target).css("opacity","0");
    }
    render(){
        const {data}=this.props;
        return (
            <div className = "want-commodity-brief"  onClick={this.handleClicked.bind(this)}>
                <div className = "want-commodity-outbox" onMouseEnter={this.handleHover.bind(this)} onMouseLeave={this.handleLeave.bind(this)}>
                    <div className="want-commodity-midbox">
                      <img className = "want-commodity-img" src={data.commodityImgUrl}/>
                    </div>
                    <div className="want-mask" >
                        <div className="want-mask-inner">zhangliaaa</div>
                    </div>
                    <BriefHeader header={data}/>
                    <BriefFooter />
                </div>
            </div>
        )
    }
}

export default CommodityBrief;
