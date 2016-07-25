import React, { Component, PropTypes } from 'react'
import { Router, Route, Link } from 'react-router'
import { render } from 'react-dom'

class ShopBrief extends Component {
    render(){
        const {data}=this.props;
        return (
            <div className = "want-shop-brief">
                <div className = "want-shop-mask"></div>
                <div className = "want-shop-innerbox">
                    <div className="want-shop-position">
                        <img src={data.commodityImgUrl} />
                        <div className="want-shop-name">
                            {data.shopName}
                        </div>
                    </div>
                </div>
                {
                    //<p >shopid: {data.shopId}</p>
                    //<p>shopname:{data.shopName}</p>
                }
            </div>
        )
    }
}

export default ShopBrief;
