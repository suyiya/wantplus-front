import React, { Component, PropTypes } from 'react'
import { Router, Route, Link } from 'react-router'
import { render } from 'react-dom'
import Navigator from './public/navigator'
import Footer from './public/footer'
import CommodityDetail from '../containers/commodity/commodityDetail'

class App extends Component {
    render() {
        return (
            <div>
                <div id="navigator">
                    <Navigator />
                </div>
                <div>
                    {this.props.children}
                </div>
                <div id="footer">
                    <Footer/>
                </div>
                <CommodityDetail/>
            </div>

        )
    }
}

App.propTypes = {
  //data必须为字符串，且必须存在
//<div>
//    {this.props.children}
//</div>
  //data:PropTypes.string.isRequired
};

export default App;
