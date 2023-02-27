import React from "react";
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";

import "./style/theme.scss";
import "./style/app.scss";
import "./style/home.scss";
// import "antd/dist/antd.css";
import Header from './pages/Header';
import Home from "./pages/Home";
import Foot from './pages/Foot';


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cur_language: navigator.language.toLowerCase() === 'zh-cn' ? '中文' : 'English',
      show_menu_mobile: false,
    }
  }

  clicked_show_menu = () => {
    this.setState({
      show_menu_mobile: !this.state.show_menu_mobile
    })
  }

  set_language = (val) => {
    this.setState({
      cur_language: val
    })
  }

  render() {
    return (
      <div className="App pc">
        <Header
          cur_language={this.state.cur_language}
          clicked_show_menu={() => { this.clicked_show_menu() }}
          show_menu_mobile={this.state.show_menu_mobile}
          set_language={(v) => { this.set_language(v) }}
        />

        <Home cur_language={this.state.cur_language} />

        <Foot cur_language={this.state.cur_language} />
      </div>
    );
  }
}
