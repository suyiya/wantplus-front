import React, { Component, PropTypes } from 'react'
import { Router, Route, Link } from 'react-router'
import { render } from 'react-dom'
import Navigator from './public/navigator'
import Footer from './public/footer'
import MainBanner from './public/mainBanner'

class App extends Component {
    render() {
        return (
            <div>
                <div id="navigator">
                    <Navigator />
                </div>
                <div className="want-main-body">
                  <MainBanner />
                    {this.props.children}
                  <div className="want-main-load">加载更多</div>
                </div>
                <div>
                  <Footer/>
                </div>
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