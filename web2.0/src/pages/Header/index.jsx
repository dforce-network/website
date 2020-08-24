import React, { Component } from "react";
import Svg from "@svgCom";

import './index.scss';
import { IntlProvider, FormattedMessage } from 'react-intl';
import en_US from '../../language/en_US';
import zh_CN from '../../language/zh_CN';


export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            to_show_arr: [true, true, true, true, true]
        }
    }

    set_show_item = (index) => {
        let new_arr = JSON.parse(JSON.stringify(this.state.to_show_arr));
        new_arr[index] = !new_arr[index];

        this.setState({
            to_show_arr: new_arr
        })
    }

    open_to_staking = () => {
        window.open('https://staking.dforce.network/', "_blank");
    }

    render() {
        return (
            <>
                <IntlProvider locale={'en'} messages={this.props.cur_language === '中文' ? zh_CN : en_US} >
                    <div className="header pc-header">
                        <div className="header-content">
                            <div className="header-logo">
                                <Svg iconClass={"dforce-logo"}></Svg>
                            </div>

                            <div className="menu-lists">
                                <div className="menu-item">
                                    <a className="hot-a" href="https://staking.dforce.network/" target="_blank" rel="noopener noreferrer">
                                        <Svg iconClass={"hot"}></Svg>
                                        <span style={{ color: '#1F243A', fontWeight: 'bold' }}>
                                            <FormattedMessage id='Staking' />
                                        </span>
                                    </a>
                                </div>

                                <div className="menu-item">
                                    <span><FormattedMessage id='Assets' /></span>
                                    <div className="list-ul">
                                        <div className="list-ul-item">
                                            <a href="https://usdx.dforce.network/" target="_blank" rel="noopener noreferrer">
                                                <div className="title">
                                                    <FormattedMessage id='Assets__usdx' />
                                                </div>
                                                <div className="title-plus">
                                                    <FormattedMessage id='Assets__usdx__content' />
                                                </div>
                                            </a>
                                        </div>

                                        <div className="list-ul-item">
                                            <a href="https://markets.dforce.network/" target="_blank" rel="noopener noreferrer">
                                                <div className="title">
                                                    <FormattedMessage id='Assets__Yield_Markets' />
                                                </div>
                                                <div className="title-plus">
                                                    <FormattedMessage id='Assets__Yield_Markets__content' />
                                                </div>
                                            </a>
                                        </div>

                                        <div className="list-ul-item">
                                            <a href="https://goldx.dforce.network/" target="_blank" rel="noopener noreferrer">
                                                <div className="title">
                                                    <FormattedMessage id='Assets__goldx' />
                                                </div>
                                                <div className="title-plus">
                                                    <FormattedMessage id='Assets__goldx__content' />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="menu-item">
                                    <span><FormattedMessage id='Trade' /></span>
                                    <div className="list-ul">
                                        <div className="list-ul-item">
                                            <a href="https://trade.dforce.network/" target="_blank" rel="noopener noreferrer">
                                                <div className="title">
                                                    <FormattedMessage id='Trade__dforce' />
                                                </div>
                                                <div className="title-plus">
                                                    <FormattedMessage id='Trade__dforce__content' />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="menu-item">
                                    <span><FormattedMessage id='Governance' /></span>
                                    <div className="list-ul">
                                        <div className="list-ul-item">
                                            <a href="https://airdrop.dforce.network/" target="_blank" rel="noopener noreferrer">
                                                <div className="title">
                                                    <FormattedMessage id='Governance__air' />
                                                </div>
                                                <div className="title-plus">
                                                    <FormattedMessage id='Governance__air__content' />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="menu-item">
                                    <span><FormattedMessage id='Community' /></span>
                                    <div className="list-ul">
                                        <div className="list-ul-item-flex">
                                            <div className="flex-left">
                                                <div className="flex-item">
                                                    <a href="https://twitter.com/dForcenet" target="_blank" rel="noopener noreferrer">
                                                        <Svg iconClass={"Twitter"}></Svg>
                                                        <span>Twitter</span>
                                                    </a>
                                                </div>
                                                <div className="flex-item">
                                                    <a href="https://medium.com/dforcenet" target="_blank" rel="noopener noreferrer">
                                                        <Svg iconClass={"Medium"}></Svg>
                                                        <span>Medium</span>
                                                    </a>
                                                </div>
                                                <div className="flex-item">
                                                    <a href="https://discord.gg/Gbtd3MR" target="_blank" rel="noopener noreferrer">
                                                        <Svg iconClass={"Discord"}></Svg>
                                                        <span>Discord</span>
                                                    </a>
                                                </div>
                                                <div className="flex-item">
                                                    <a href="https://www.youtube.com/channel/UCM6Vgoc-BhFGG11ZndUr6Ow" target="_blank" rel="noopener noreferrer">
                                                        <Svg iconClass={"Youtube"}></Svg>
                                                        <span>Youtube</span>
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="flex-left">
                                                <div className="flex-item">
                                                    <a href="https://t.me/dforcenet" target="_blank" rel="noopener noreferrer">
                                                        <Svg iconClass={"Telegram"}></Svg>
                                                        <span>Telegram</span>
                                                    </a>
                                                </div>
                                                <div className="flex-item">
                                                    <a href="https://www.reddit.com/r/dForceNetwork" target="_blank" rel="noopener noreferrer">
                                                        <Svg iconClass={"Reddit"}></Svg>
                                                        <span>Reddit</span>
                                                    </a>
                                                </div>
                                                <div className="flex-item">
                                                    <a href="https://www.linkedin.com/company/dforce-network" target="_blank" rel="noopener noreferrer">
                                                        <Svg iconClass={"LinkedIn"}></Svg>
                                                        <span>LinkedIn</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="menu-item">
                                    <span>
                                        {this.props.cur_language}
                                        <Svg iconClass={"btn-up"}></Svg>
                                    </span>
                                    <div className="list-ul list-ul-language">
                                        <div className="list-ul-item list-ul-item-language" onClick={() => { this.props.set_language('中文') }}>中文</div>

                                        <div className="list-ul-item list-ul-item-language" onClick={() => { this.props.set_language('English') }}>English</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="mobile-header mobile-header-realitave">
                        <div className="mobile-menu-top">
                            <div className="mobile-menu-top-left">
                                <Svg iconClass={"dforce-logo"}></Svg>
                            </div>
                            <div className="Staking-top" onClick={() => { this.open_to_staking() }}>
                                <Svg iconClass={"hot"}></Svg>
                                <span><FormattedMessage id='Staking' /></span>
                            </div>
                            <div className="mobile-menu-top-right" onClick={() => { this.props.clicked_show_menu() }}>
                                <Svg iconClass={"menu"}></Svg>
                            </div>
                        </div>
                    </div>

                    {
                        this.props.show_menu_mobile &&
                        <div className="mobile-header">
                            <div className="mobile-menu">
                                <div className="mobile-menu-top">
                                    <div className="mobile-menu-top-left">
                                        <Svg iconClass={"dforce-logo"}></Svg>
                                    </div>
                                    <div className="mobile-menu-top-right" onClick={() => { this.props.clicked_show_menu() }}>
                                        <Svg iconClass={"close"}></Svg>
                                    </div>
                                </div>

                                <div className="mobile-menu-body">
                                    <div className="menu-item-wrap">

                                        {/* <div className="menu-item">
                                            <h1 className="Staking" onClick={() => { this.open_to_staking() }}>
                                                <span><FormattedMessage id='Staking' /></span>
                                                <Svg iconClass={"hot"}></Svg>
                                            </h1>
                                        </div> */}

                                        <div className="menu-item">
                                            <h1 onClick={() => { this.set_show_item(0) }}>
                                                <FormattedMessage id='Assets' />
                                                <Svg iconClass={"btn-up"}></Svg>
                                            </h1>
                                            <div className={this.state.to_show_arr[0] ? "items" : "items item-hidden"}>
                                                <a href="https://usdx.dforce.network/" target="_blank" rel="noopener noreferrer">
                                                    <span className="title">
                                                        <FormattedMessage id='Assets__usdx' />
                                                    </span>
                                                    <span className="title-plus">
                                                        <FormattedMessage id='Assets__usdx__content' />
                                                    </span>
                                                </a>
                                                <a href="https://markets.dforce.network/" target="_blank" rel="noopener noreferrer">
                                                    <span className="title">
                                                        <FormattedMessage id='Assets__Yield_Markets' />
                                                    </span>
                                                    <span className="title-plus">
                                                        <FormattedMessage id='Assets__Yield_Markets__content' />
                                                    </span>
                                                </a>
                                                <a href="https://goldx.dforce.network/" target="_blank" rel="noopener noreferrer">
                                                    <span className="title">
                                                        <FormattedMessage id='Assets__goldx' />
                                                    </span>
                                                    <span className="title-plus">
                                                        <FormattedMessage id='Assets__goldx__content' />
                                                    </span>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="menu-item">
                                            <h1 onClick={() => { this.set_show_item(1) }}>
                                                <FormattedMessage id='Trade' />
                                                <Svg iconClass={"btn-up"}></Svg>
                                            </h1>
                                            <div className={this.state.to_show_arr[1] ? "items" : "items item-hidden"}>
                                                <a href="https://trade.dforce.network/" target="_blank" rel="noopener noreferrer">
                                                    <span className="title">
                                                        <FormattedMessage id='Trade__dforce' />
                                                    </span>
                                                    <span className="title-plus">
                                                        <FormattedMessage id='Trade__dforce__content' />
                                                    </span>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="menu-item">
                                            <h1 onClick={() => { this.set_show_item(2) }}>
                                                <FormattedMessage id='Governance' />
                                                <Svg iconClass={"btn-up"}></Svg>
                                            </h1>
                                            <div className={this.state.to_show_arr[2] ? "items" : "items item-hidden"}>
                                                <a href="https://airdrop.dforce.network/" target="_blank" rel="noopener noreferrer">
                                                    <span className="title">
                                                        <FormattedMessage id='Governance__air' />
                                                    </span>
                                                    <span className="title-plus">
                                                        <FormattedMessage id='Governance__air__content' />
                                                    </span>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="menu-item">
                                            <h1 onClick={() => { this.set_show_item(3) }}>
                                                <FormattedMessage id='Community' />
                                                <Svg iconClass={"btn-up"}></Svg>
                                            </h1>
                                            <div className={this.state.to_show_arr[3] ? "items items-icons" : "items items-icons item-hidden"} >
                                                <a href="https://twitter.com/dForcenet" target="_blank" rel="noopener noreferrer">
                                                    <span className="icon"><Svg iconClass={"Twitter"}></Svg></span>
                                                    <span className="name">Twitter</span>
                                                </a>
                                                <a href="https://t.me/dforcenet" target="_blank" rel="noopener noreferrer">
                                                    <span className="icon"><Svg iconClass={"Telegram"}></Svg></span>
                                                    <span className="name">Telegram</span>
                                                </a>
                                                <a href="https://medium.com/dforcenet" target="_blank" rel="noopener noreferrer">
                                                    <span className="icon"><Svg iconClass={"Medium"}></Svg></span>
                                                    <span className="name">Medium</span>
                                                </a>
                                                <a href="https://www.reddit.com/r/dForceNetwork" target="_blank" rel="noopener noreferrer">
                                                    <span className="icon"><Svg iconClass={"Reddit"}></Svg></span>
                                                    <span className="name">Reddit</span>
                                                </a>
                                                <a href="https://discord.gg/Gbtd3MR" target="_blank" rel="noopener noreferrer">
                                                    <span className="icon"><Svg iconClass={"Discord"}></Svg></span>
                                                    <span className="name">Discord</span>
                                                </a>
                                                <a href="https://www.linkedin.com/company/dforce-network" target="_blank" rel="noopener noreferrer">
                                                    <span className="icon"><Svg iconClass={"LinkedIn"}></Svg></span>
                                                    <span className="name">LinkedIn</span>
                                                </a>
                                                <a href="https://www.youtube.com/channel/UCM6Vgoc-BhFGG11ZndUr6Ow" target="_blank" rel="noopener noreferrer">
                                                    <span className="icon"><Svg iconClass={"Youtube"}></Svg></span>
                                                    <span className="name">Youtube</span>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="menu-item">
                                            <h1 onClick={() => { this.set_show_item(4) }}>
                                                {this.props.cur_language}
                                                <Svg iconClass={"btn-up"}></Svg>
                                            </h1>
                                            <div className={this.state.to_show_arr[4] ? "items items-icons" : "items items-icons item-hidden"}>
                                                <a href="javascript:;" onClick={() => { this.props.set_language('中文') }}>
                                                    <span className="name">中文</span>
                                                </a>
                                                <a href="javascript:;" onClick={() => { this.props.set_language('English') }}>
                                                    <span className="name">English</span>
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </IntlProvider>
            </>

        );
    }
}
