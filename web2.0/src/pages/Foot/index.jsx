<<<<<<< HEAD
import React, { Component } from "react";
import Svg from "@svgCom";
import qrcode from '../../static/images/qrcode.png';

import './index.scss';
import { IntlProvider, FormattedMessage } from 'react-intl';
import en_US from '../../language/en_US';
import zh_CN from '../../language/zh_CN';


export default class Foot extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <IntlProvider locale={'en'} messages={this.props.cur_language === '中文' ? zh_CN : en_US} >
        <div className="foot">
          <div className="foot-content">
            <div className="foot-item">
              <div className="item-title">
                <FormattedMessage id='Products' />
              </div>
              <div className="item-link">
                <a href="https://usdx.dforce.network/" target="_blank" rel="noopener noreferrer">USDx</a>
              </div>
              <div className="item-link">
                <a href="https://usr.dforce.network/" target="_blank" rel="noopener noreferrer">USR</a>
              </div>
              <div className="item-link">
                <a href="https://goldx.dforce.network/" target="_blank" rel="noopener noreferrer">GOLDx</a>
              </div>
              <div className="item-link">
                <a href="https://markets.dforce.network/" target="_blank" rel="noopener noreferrer">
                  <FormattedMessage id='Yield_Markets' />
                </a>
              </div>
              <div className="item-link">
                <a href="https://trade.dforce.network/" target="_blank" rel="noopener noreferrer">
                  <FormattedMessage id='dForce_Trade' />
                </a>
              </div>
            </div>

            <div className="foot-item">
              <div className="item-title">
                <FormattedMessage id='Developers' />
              </div>
              <div className="item-link">
                <a href='https://github.com/dforce-network/documents/tree/master/audit_report' target="_blank" rel="noopener noreferrer">
                  <FormattedMessage id='Audit_Reports' />
                </a>
              </div>
              <div className="item-link">
                <a href="https://github.com/dforce-network" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
              <div className="item-link">
                <a href={
                  this.props.cur_language === '中文' ?
                    'https://docn.dforce.network/' : 'https://docs.dforce.network/'
                } target="_blank" rel="noopener noreferrer">
                  <FormattedMessage id='faq' />
                </a>
              </div>
            </div>

            <div style={{ clear: 'both' }}></div>

            <div className="foot-item">
              <div className="item-title">
                <FormattedMessage id='Contact' />
              </div>
              <div className="item-link-special">
                <div className="item-link">
                  <a href="javascript:;">support@dforce.network</a>
                </div>
                <div className="item-link">
                  <a href="javascript:;">bd@dforce.network</a>
                </div>
                <div className="item-link">
                  <a href="javascript:;">tech@dforce.network</a>
                </div>
              </div>
            </div>

            <div className="foot-item foot-item-spe">
              <div className="item-title">
                <FormattedMessage id='Community' />
              </div>
              <div className="item-icons">
                <div className="icon">
                  <a href="https://twitter.com/dForcenet" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"img_footer_1"}></Svg>
                  </a>
                </div>

                <div className="icon">
                  <a href="https://t.me/dforcenet" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"img_footer_2"}></Svg>
                  </a>
                </div>

                <div className="icon">
                  <a href="https://medium.com/dforcenet" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"img_footer_3"}></Svg>
                  </a>
                </div>

                <div className="icon">
                  <a href="https://www.reddit.com/r/dForceNetwork" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"img_footer_4"}></Svg>
                  </a>
                </div>

                <div className="icon">
                  <a href="https://discord.gg/Gbtd3MR" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"img_footer_5"}></Svg>
                  </a>
                </div>

                <div className="icon">
                  <a href="https://www.linkedin.com/company/dforce-network" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"img_footer_6"}></Svg>
                  </a>
                </div>

                <div className="icon">
                  <a href="https://www.youtube.com/channel/UCM6Vgoc-BhFGG11ZndUr6Ow" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"img_footer_7"}></Svg>
                  </a>
                </div>

                {
                  this.props.cur_language === '中文' &&
                  <div className="icon icon-wechat">
                    <a href="javascript:;" rel="noopener noreferrer">
                      <Svg iconClass={"img_footer_8"}></Svg>
                    </a>

                    <div className="qrcode-wrap">
                      <img src={qrcode} />
                    </div>
                  </div>
                }

              </div>
            </div>

          </div>
        </div>
      </IntlProvider>
    );
  }
}
=======
import React, { Component } from "react";
import Svg from "@svgCom";
import qrcode from '../../static/images/qrcode.png';

import './index.scss';
import { IntlProvider, FormattedMessage } from 'react-intl';
import en_US from '../../language/en_US';
import zh_CN from '../../language/zh_CN';


export default class Foot extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <IntlProvider locale={'en'} messages={this.props.cur_language === '中文' ? zh_CN : en_US} >
        <div className="foot">
          <div className="foot-content">
            <div className="foot-item">
              <div className="item-title">
                <FormattedMessage id='Products' />
              </div>
              <div className="item-link">
                <a href="https://usdx.dforce.network/" target="_blank" rel="noopener noreferrer">USDx</a>
              </div>
              <div className="item-link">
                <a href="https://usr.dforce.network/" target="_blank" rel="noopener noreferrer">USR</a>
              </div>
              <div className="item-link">
                <a href="https://goldx.dforce.network/" target="_blank" rel="noopener noreferrer">GOLDx</a>
              </div>
              <div className="item-link">
                <a href="https://markets.dforce.network/" target="_blank" rel="noopener noreferrer">
                  <FormattedMessage id='Yield_Markets' />
                </a>
              </div>
              <div className="item-link">
                <a href="https://trade.dforce.network/" target="_blank" rel="noopener noreferrer">
                  <FormattedMessage id='dForce_Trade' />
                </a>
              </div>
            </div>

            <div className="foot-item">
              <div className="item-title">
                <FormattedMessage id='Developers' />
              </div>
              <div className="item-link">
                <a href='https://github.com/dforce-network/documents/tree/master/audit_report' target="_blank" rel="noopener noreferrer">
                  <FormattedMessage id='Audit_Reports' />
                </a>
              </div>
              <div className="item-link">
                <a href="https://github.com/dforce-network" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
              <div className="item-link">
                <a href={
                  this.props.cur_language === '中文' ?
                    'https://docn.dforce.network/' : 'https://docs.dforce.network/'
                } target="_blank" rel="noopener noreferrer">
                  <FormattedMessage id='faq' />
                </a>
              </div>
            </div>

            <div style={{ clear: 'both' }}></div>

            <div className="foot-item">
              <div className="item-title">
                <FormattedMessage id='Contact' />
              </div>
              <div className="item-link-special">
                <div className="item-link">
                  <a href="javascript:;">bd@dforce.network</a>
                </div>
                <div className="item-link">
                  <a href="javascript:;">contact@dforce.network</a>
                </div>
              </div>
            </div>

            <div className="foot-item foot-item-spe">
              <div className="item-title">
                <FormattedMessage id='Community' />
              </div>
              <div className="item-icons">
                <div className="icon">
                  <a href="https://twitter.com/dForcenet" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"img_footer_1"}></Svg>
                  </a>
                </div>

                <div className="icon">
                  <a href="https://t.me/dforcenet" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"img_footer_2"}></Svg>
                  </a>
                </div>

                <div className="icon">
                  <a href="https://medium.com/dforcenet" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"img_footer_3"}></Svg>
                  </a>
                </div>

                <div className="icon">
                  <a href="https://www.reddit.com/r/dForceNetwork" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"img_footer_4"}></Svg>
                  </a>
                </div>

                <div className="icon">
                  <a href="https://discord.gg/c2PC8SM" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"img_footer_5"}></Svg>
                  </a>
                </div>

                <div className="icon">
                  <a href="https://www.linkedin.com/company/dforce-network" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"img_footer_6"}></Svg>
                  </a>
                </div>

                <div className="icon">
                  <a href="https://www.youtube.com/channel/UCM6Vgoc-BhFGG11ZndUr6Ow" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"img_footer_7"}></Svg>
                  </a>
                </div>

                {
                  this.props.cur_language === '中文' &&
                  <div className="icon icon-wechat">
                    <a href="javascript:;" rel="noopener noreferrer">
                      <Svg iconClass={"img_footer_8"}></Svg>
                    </a>

                    <div className="qrcode-wrap">
                      <img src={qrcode} />
                    </div>
                  </div>
                }

              </div>
            </div>

          </div>
        </div>
      </IntlProvider>
    );
  }
}
>>>>>>> f5febaa68ee3294cf7bd6a117c69c52d4edb47ad
