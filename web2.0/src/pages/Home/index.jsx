import React, { Component } from "react";
import Svg from "@svgCom";
import { IntlProvider, FormattedMessage } from 'react-intl';
import en_US from '../../language/en_US';
import zh_CN from '../../language/zh_CN';

import banner_lr_bg from '../../logos/svg/banner-lr-bg.png';



export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  open_usdx = () => {
    if (this.props.cur_language === '中文') {
      window.open('https://github.com/dforce-network/documents/blob/master/white_papers/cn/dForce_WhitepaperV1.pdf', "_blank");
    } else {
      window.open('https://github.com/dforce-network/documents/blob/master/white_papers/en/dForce_Whitepaper_V1.pdf', "_blank");
    }
  }

  open_paper = () => {
    window.open('https://github.com/dforce-network/documents/tree/master/audit_report', "_blank");
  }

  click__item_open = (num) => {
    let t_url;
    if (num === 1) {
      t_url = 'https://github.com/dforce-network/documents/tree/master/audit_report/USDx';
    } else if (num === 2) {
      t_url = 'https://github.com/dforce-network/documents/tree/master/audit_report/GOLDx';
    } else if (num === 3) {
      t_url = 'https://github.com/dforce-network/documents/tree/master/audit_report/dToken';
    } else if (num === 4) {
      t_url = 'https://github.com/dforce-network/documents/tree/master/audit_report/xSwap/EN';
    }

    window.open(t_url, "_blank");
  }



  render() {
    return (
      <IntlProvider locale={'en'} messages={this.props.cur_language === '中文' ? zh_CN : en_US} >
        <div className={"warp"}>

          <div className='banner-wrap banner-wrap-pc'>
            <div className='banner'>
              <div className='banner-slogan'>
                <h1><FormattedMessage id='slogan' /></h1>
                <div className='banner-content'>
                  <FormattedMessage id='slogan__content' />
                </div>
                <div className='btn-wrap'>
                  <div className='btn-usdx' onClick={() => { this.open_usdx() }}>
                    <FormattedMessage id='paper' />
                  </div>
                  {/* <div className='btn-paper' onClick={() => { this.open_paper() }}>
                    <FormattedMessage id='Audit_Reports' />
                  </div> */}
                </div>
              </div>
              <div className='banner-image'>
                <Svg iconClass={"banner-bg"}></Svg>
              </div>
            </div>

            <div className='banner-bg'>
              {/* <Svg iconClass={"banner-lr-bg"}></Svg> */}
              <img src={banner_lr_bg} alt="" />
            </div>
          </div>

          {/* Mobile --- banner */}
          <div className='banner-wrap-Mobile'>
            <div className='banner'>
              {
                this.props.cur_language === '中文' ?
                  <h1>重塑货币·开放金融</h1>
                  :
                  <h1>Reimagine Money. Reinvent Finance.</h1>
              }

              <div className='banner-slogan-wrap'>
                <div className='banner-slogan'>
                  <div className='banner-content'>
                    <FormattedMessage id='slogan__content' />
                  </div>
                  <div className='btn-wrap'>
                    <div className='btn-usdx' onClick={() => { this.open_usdx() }}>
                      <FormattedMessage id='paper' />
                    </div>
                    {/* <div className='btn-paper' onClick={() => { this.open_paper() }}>
                      <FormattedMessage id='Audit_Reports' />
                    </div> */}
                  </div>
                </div>
                <div className='banner-image'>
                  <Svg iconClass={"banner-bg"}></Svg>
                </div>
              </div>

            </div>
          </div>

          <div className='DeFi DeFi-PC'>
            <div className='DeFi-image'>
              <Svg iconClass={this.props.cur_language === '中文' ? "img-skake-cn" : "img-skake"}></Svg>
            </div>
            <div className='DeFi-content'>
              <div className='web-title'>
                <FormattedMessage id='DeFi_Full_Stacks' />
              </div>
              <div className='DeFi-content-con'>
                <FormattedMessage id='DeFi_Full_Stacks__content' />
              </div>
              {/* <div className='DeFi-content-parts'>
                <div className='part'>
                  <FormattedMessage id='DeFi_Full_Stacks__btn1' />
                </div>
                <div className='part'>
                  <FormattedMessage id='DeFi_Full_Stacks__btn2' />
                </div>
                <div className='part'>
                  <FormattedMessage id='DeFi_Full_Stacks__btn3' />
                </div>
              </div> */}
            </div>
            <div className='DeFi-image--mobile'>
              <Svg iconClass={this.props.cur_language === '中文' ? "img-skake-cn" : "img-skake"}></Svg>
            </div>
          </div>

          {/* Security */}
          <div className='liquidity-mining Security'>
            <div className='web-title'>
              <FormattedMessage id='Security_Audits' />
            </div>
            <div className='Security-content'>
              <FormattedMessage id='Security_Audits__content' />
            </div>
            <div className='Security-wrap'>
              <div className='Security-item'>
                <div className='item-title'>USDx/USR</div>

                <div className='item-img-wrap' onClick={() => { this.click__item_open(1) }}>
                  <div className='item-img'>
                    <Svg iconClass={"security-2"}></Svg>
                  </div>
                  <div className='item-img'>
                    <Svg iconClass={"security-3"}></Svg>
                  </div>
                  <div className='item-img'>
                    <Svg iconClass={"Security-quantstamp"}></Svg>
                  </div>
                </div>
              </div>

              <div className='Security-item'>
                <div className='item-title'>GOLDx</div>
                <div className='item-img-wrap wrap-spe' onClick={() => { this.click__item_open(2) }}>
                  <div className='item-img'>
                    <Svg iconClass={"security-3"}></Svg>
                  </div>
                </div>
              </div>

              <div className='Security-item'>
                <div className='item-title'>
                  <FormattedMessage id='Yield_Markets' />
                </div>
                <div className='item-img-wrap wrap-spe' onClick={() => { this.click__item_open(3) }}>
                  <div className='item-img'>
                    <Svg iconClass={"security-1"}></Svg>
                  </div>
                </div>
              </div>

              {/* <div className='Security-item'>
                <div className='item-title'>
                  <FormattedMessage id='dForce_Swap' />
                </div>
                <div className='item-img-wrap wrap-spe' onClick={() => { this.click__item_open(4) }}>
                  <div className='item-img'>
                    <Svg iconClass={"security-2"}></Svg>
                  </div>
                </div>
              </div> */}

            </div>
          </div>

          {/* Liquidity Mining */}
          <div className='liquidity-mining'>
            <div className='web-title'>
              <FormattedMessage id='Liquidity_Mining' />
            </div>
            <div className='liquidity-mining-wrap'>
              <div className='liquidity-mining-content'>
                <FormattedMessage id='Liquidity_Mining__content' />
                <div className='learn-more-wrap'>
                  <a href="https://staking.dforce.network/" target="_blank" rel="noopener noreferrer">
                    <FormattedMessage id='learn_more' />
                  </a>
                </div>
              </div>
              <div className='liquidity-mining-logo'>
                <div className='item'>
                  <div className='item-logo'>
                    <Svg iconClass={"kuangchi-1"}></Svg>
                  </div>
                  <div className='item-title'>
                    <FormattedMessage id='Liquidity_Mining__pool1' />
                  </div>
                </div>

                <div className='item'>
                  <div className='item-logo'>
                    <Svg iconClass={"kuangchi-2"}></Svg>
                  </div>
                  <div className='item-title'>
                    <FormattedMessage id='Liquidity_Mining__pool2' />
                  </div>
                </div>

                <div className='item'>
                  <div className='item-logo'>
                    <Svg iconClass={"kuangchi-2"}></Svg>
                  </div>
                  <div className='item-title'>
                    <FormattedMessage id='Liquidity_Mining__pool3' />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* asset-protocols */}
          <div className='asset-protocols'>
            <div className='web-title'>
              <FormattedMessage id='Asset_Protocols' />
            </div>
            <div className='asset-protocols-items'>
              <div className='item'>
                <div className='item-title'>USDx</div>
                <div className='item-title-plus'>
                  <FormattedMessage id='Asset_Protocols__title_1' />
                </div>
                <div className='item-content'>
                  <FormattedMessage id='Asset_Protocols__content_1' />
                </div>
                <div className='learn-more-wrap'>
                  <a href="https://usdx.dforce.network/" target="_blank" rel="noopener noreferrer">
                    <FormattedMessage id='learn_more' />
                  </a>
                </div>
              </div>

              <div className='item'>
                <div className='item-title'>GOLDx</div>
                <div className='item-title-plus'>
                  <FormattedMessage id='Asset_Protocols__title_2' />
                </div>
                <div className='item-content'>
                  <FormattedMessage id='Asset_Protocols__content_2' />
                </div>
                <div className='learn-more-wrap'>
                  <a href="https://goldx.dforce.network/" target="_blank" rel="noopener noreferrer">
                    <FormattedMessage id='learn_more' />
                  </a>
                </div>
              </div>

              <div className='item'>
                <div className='item-title'>
                  <FormattedMessage id='Yield_Markets' />
                </div>
                <div className='item-title-plus'>
                  <FormattedMessage id='Asset_Protocols__title_3' />
                </div>
                <div className='item-content'>
                  <FormattedMessage id='Asset_Protocols__content_3' />
                </div>
                <div className='learn-more-wrap'>
                  <a href="https://markets.dforce.network/" target="_blank" rel="noopener noreferrer">
                    <FormattedMessage id='learn_more' />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='lending-liquidity-wrap'>
            <div className='lending-liquidity'>
              <div className='web-title protocols center mob-mb15'>
                <FormattedMessage id='Lending_Protocols' />
              </div>

              <div className='lending-liquidity-items mb100 mb35-mob'>
                <div className='item'>
                  <div className='item-top'>
                    <div className='item-top-logo'>
                      <Svg iconClass={"protocols-1"}></Svg>
                    </div>
                    <div className='item-top-titles'>
                      <div className='item-top-titles-tit'>
                        <FormattedMessage id='Lending_Protocols__part1__title_1' />
                      </div>
                      <div className='item-top-titles-tit-plus'>
                        <FormattedMessage id='Lending_Protocols__part1__title_2' />
                      </div>
                    </div>
                  </div>
                  <div className='item-bottom'>
                    <FormattedMessage id='Lending_Protocols__part1__content' />
                    <div className='learn-more-wrap learn-more-wrap--coming'>
                      <a href="javascript:;">
                        <FormattedMessage id='coming_soon' />
                      </a>
                    </div>
                  </div>
                </div>

                <div className='item'>
                  <div className='item-top'>
                    <div className='item-top-logo'>
                      <Svg iconClass={"protocols-2"}></Svg>
                    </div>
                    <div className='item-top-titles'>
                      <div className='item-top-titles-tit'>
                        <FormattedMessage id='Lending_Protocols__part2__title_1' />
                      </div>
                      <div className='item-top-titles-tit-plus'>
                        <FormattedMessage id='Lending_Protocols__part2__title_2' />
                      </div>
                    </div>
                  </div>
                  <div className='item-bottom'>
                    <FormattedMessage id='Lending_Protocols__part2__content' />
                    <div className='learn-more-wrap learn-more-wrap--coming'>
                      <a href="javascript:;">
                        <FormattedMessage id='coming_soon' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className='web-title protocols center mob-mb15'>
                <FormattedMessage id='Liquidity_Protocols' />
              </div>
              <div className='lending-liquidity-items spe--item'>
                {/* <div className='item'>
                  <div className='item-top'>
                    <div className='item-top-logo'>
                      <Svg iconClass={"protocols-3"}></Svg>
                    </div>
                    <div className='item-top-titles'>
                      <div className='item-top-titles-tit'>
                        <FormattedMessage id='Liquidity_Protocols__part1__title_1' />
                      </div>
                      <div className='item-top-titles-tit-plus'>
                        <FormattedMessage id='Liquidity_Protocols__part1__title_2' />
                      </div>
                    </div>
                  </div>
                  <div className='item-bottom'>
                    <FormattedMessage id='Liquidity_Protocols__part1__content' />
                    <div className='learn-more-wrap'>
                      <a href="https://trade.dforce.network" target="_blank" rel="noopener noreferrer">
                        <FormattedMessage id='learn_more' />
                      </a>
                    </div>
                  </div>
                </div> */}

                <div className='item'>
                  <div className='item-top'>
                    <div className='item-top-logo'>
                      <Svg iconClass={"protocols-4"}></Svg>
                    </div>
                    <div className='item-top-titles'>
                      <div className='item-top-titles-tit'>
                        <FormattedMessage id='Liquidity_Protocols__part2__title_1' />
                      </div>
                      <div className='item-top-titles-tit-plus'>
                        <FormattedMessage id='Liquidity_Protocols__part2__title_2' />
                      </div>
                    </div>
                  </div>
                  <div className='item-bottom'>
                    <FormattedMessage id='Liquidity_Protocols__part2__content' />
                    <div className='learn-more-wrap'>
                      <a href="https://trade.dforce.network" target="_blank" rel="noopener noreferrer">
                        {/* <FormattedMessage id='coming_soon' /> */}
                        <FormattedMessage id='learn_more' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className='our-companion'>
            <div className='web-title companion center mob-mb15'>
              <FormattedMessage id='Our_companion' />
            </div>

            {/* Security Audit */}
            {/* <div className='type-logo-item'>
              <div className='type-item'>
                <FormattedMessage id='Security_Audit' />
              </div>
              <div className='logo-item'>
                <div className='logo-wrap'>
                  <a href="https://www.trailofbits.com/" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"security-1"}></Svg>
                  </a>
                </div>

                <div className='logo-wrap'>
                  <a href="https://peckshield.com/" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"security-2"}></Svg>
                  </a>
                </div>

                <div className='logo-wrap'>
                  <a href="https://www.slowmist.com/" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"security-3"}></Svg>
                  </a>
                </div>
              </div>
            </div> */}

            {/* Investor */}
            <div className='type-logo-item'>
              <div className='type-item'>
                <FormattedMessage id='Investor' />
              </div>
              <div className='logo-item'>
                <div className='logo-wrap'>
                  <a href="javascript:;">
                    <Svg iconClass={"investor-1"}></Svg>
                  </a>
                </div>

                <div className='logo-wrap'>
                  <a href="https://multicoin.capital/" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"investor-2"}></Svg>
                  </a>
                </div>

                <div className='logo-wrap'>
                  <a href="https://www.huobi.com/en-us/capital/" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"investor-3"}></Svg>
                  </a>
                </div>
              </div>
            </div>

            {/* DeFi */}
            <div className='type-logo-item'>
              <div className='type-item'>
                <FormattedMessage id='DeFi' />
              </div>
              <div className='logo-item'>
                <div className='logo-wrap'>
                  <a href="https://yearn.finance" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"DeFi-1"}></Svg>
                  </a>
                </div>

                <div className='logo-wrap'>
                  <a href="https://flamingodao.xyz" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"DeFi-2"}></Svg>
                  </a>
                </div>

                <div className='logo-wrap'>
                  <a href="https://dfi.money" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"DeFi-3"}></Svg>
                  </a>
                </div>
                <div className='logo-wrap'>
                  <a href="https://s.finance" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"DeFi-4"}></Svg>
                  </a>
                </div>

                <div className='logo-wrap'>
                  <a href="https://app.unisave.exchange" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"DeFi-5"}></Svg>
                  </a>
                </div>

                <div className='logo-wrap'>
                  <a href="https://sashimi.cool" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"DeFi-6"}></Svg>
                  </a>
                </div>

                <div className='logo-wrap'>
                  <a href="https://ystarpool.finance" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"DeFi-7"}></Svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Exchanges */}
            <div className='type-logo-item'>
              <div className='type-item'>
                <FormattedMessage id='Exchanges' />
              </div>
              <div className='logo-item'>

                {/* huobi global */}
                <div className='logo-wrap'>
                  <a href="https://www.huobi.com/zh-cn/exchange/df_usdt/" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"huobiglobal"}></Svg>
                  </a>
                </div>
                {/* gate */}
                <div className='logo-wrap'>
                  <a href="https://www.gate.io/trade/DF_USDT" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"gate"}></Svg>
                  </a>
                </div>
                {/* mxc */}
                <div className='logo-wrap'>
                  <a href="https://www.mxc.com" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"exchanges-1"}></Svg>
                  </a>
                </div>
                {/* hotbit */}
                <div className='logo-wrap'>
                  <a href="https://www.hotbit.io/" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"exchanges-2"}></Svg>
                  </a>
                </div>
                {/* HBTC Chain */}
                <div className='logo-wrap'>
                  <a href="https://www.hbtc.com/" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"exchanges-3"}></Svg>
                  </a>
                </div>
                {/* Bitz */}
                {/* <div className='logo-wrap'>
                  <a href="https://www.bitz.ai/" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"exchanges-4"}></Svg>
                  </a>
                </div> */}
                {/* TAB葡萄 */}
                <div className='logo-wrap'>
                  <a href="https://www.tac.top/" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"exchanges-5"}></Svg>
                  </a>
                </div>
                {/* WhaleEX */}
                <div className='logo-wrap'>
                  <a href="https://www.whaleex.com/" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"exchanges-6"}></Svg>
                  </a>
                </div>
                {/* DeerDex */}
                <div className='logo-wrap'>
                  <a href="https://www.deerdex.com/" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"exchanges-7"}></Svg>
                  </a>
                </div>
                {/* Newdex */}
                <div className='logo-wrap'>
                  <a href="https://newdex.io/" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"exchanges-8"}></Svg>
                  </a>
                </div>
                {/* BeeEx */}
                <div className='logo-wrap'>
                  <a href="https://www.beeex.com/" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"exchanges-9"}></Svg>
                  </a>
                </div>
                {/* BiKi */}
                <div className='logo-wrap'>
                  <a href="https://www.biki.cc/" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"exchanges-10"}></Svg>
                  </a>
                </div>
                {/* Conlend */}
                <div className='logo-wrap'>
                  <a href="https://www.coinlead.cc/" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"exchanges-11"}></Svg>
                  </a>
                </div>
                {/* BKEX */}
                <div className='logo-wrap'>
                  <a href="https://www.bkex.com/" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"exchanges-12"}></Svg>
                  </a>
                </div>
                {/* hoo */}
                <div className='logo-wrap'>
                  <a href="https://hoozh.com/spot/df-usdt" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"hoo"}></Svg>
                  </a>
                </div>
                {/* coinbene */}
                <div className='logo-wrap'>
                  <a href="https://www.coinbene.plus/spot/exchange/DF_USDT" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"exchanges-15"}></Svg>
                  </a>
                </div>

              </div>
            </div>

            {/* Wallets */}
            <div className='type-logo-item'>
              <div className='type-item'>
                <FormattedMessage id='Wallets' />
              </div>
              <div className='logo-item'>

                {/* imToken */}
                <div className='logo-wrap'>
                  <a href="https://token.im/" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"wallets-1"}></Svg>
                  </a>
                </div>
                {/* mykey */}
                <div className='logo-wrap'>
                  <a href="https://mykey.org/" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"wallets-2"}></Svg>
                  </a>
                </div>
                {/* tokenpocket */}
                <div className='logo-wrap'>
                  <a href="https://www.tokenpocket.pro/" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"wallets-3"}></Svg>
                  </a>
                </div>
                {/* bitpie */}
                <div className='logo-wrap'>
                  <a href="https://bitpie.com/" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"wallets-4"}></Svg>
                  </a>
                </div>
                {/* math wallet */}
                <div className='logo-wrap'>
                  <a href="https://www.mathwallet.org/" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"wallets-5"}></Svg>
                  </a>
                </div>

                <div className='logo-wrap'>
                  <a href="https://debank.com/" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"wallets-6"}></Svg>
                  </a>
                </div>
                {/* dapp birds */}
                <div className='logo-wrap'>
                  <a href="https://dappbirds.com/index" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"wallets-7"}></Svg>
                  </a>
                </div>
                {/* huobi wallet */}
                <div className='logo-wrap'>
                  <a href="https://www.huobiwallet.com/" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"wallets-8"}></Svg>
                  </a>
                </div>
                {/* cobo */}
                <div className='logo-wrap'>
                  <a href="https://cobo.com/" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"wallets-9"}></Svg>
                  </a>
                </div>
                {/* trust wallet */}
                <div className='logo-wrap'>
                  <a href="https://trustwallet.com/" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"wallets-10"}></Svg>
                  </a>
                </div>
                {/* alpha wallet */}
                <div className='logo-wrap'>
                  <a href="https://alphawallet.com/" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"wallets-11"}></Svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Ecological */}
            <div className='type-logo-item'>
              <div className='type-item'>
                <FormattedMessage id='Ecological' />
              </div>
              <div className='logo-item'>

                {/* spark pool */}
                <div className='logo-wrap'>
                  <a href="https://www.sparkpool.com/" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"ecological-1"}></Svg>
                  </a>
                </div>
                {/* block power */}
                <div className='logo-wrap'>
                  <a href="https://www.blockpower.capital/" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"ecological-2"}></Svg>
                  </a>
                </div>

                <div className='logo-wrap'>
                  <a href="javascript:;">
                    <Svg iconClass={"ecological-3"}></Svg>
                  </a>
                </div>

                <div className='logo-wrap'>
                  <a href="https://www.ambergroup.io/" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"ecological-4"}></Svg>
                  </a>
                </div>

                <div className='logo-wrap'>
                  <a href="https://legendtrading.com/" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"ecological-5"}></Svg>
                  </a>
                </div>

                {/* band protocol */}
                <div className='logo-wrap'>
                  <a href="https://bandprotocol.com/" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"ecological-12"}></Svg>
                  </a>
                </div>
                {/* hashkey */}
                <div className='logo-wrap'>
                  <a href="https://www.hashkey.com/" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"ecological-6"}></Svg>
                  </a>
                </div>
                {/* steaker */}
                <div className='logo-wrap'>
                  <a href="https://steaker.com/" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"ecological-7"}></Svg>
                  </a>
                </div>
                {/* axonomy */}
                <div className='logo-wrap'>
                  <a href="https://www.axonomy.pro/#/?VNK=87d03005" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"ecological-8"}></Svg>
                  </a>
                </div>
                {/* Portto */}
                <div className='logo-wrap'>
                  <a href="https://portto.io/" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"ecological-9"}></Svg>
                  </a>
                </div>

                <div className='logo-wrap'>
                  <a href="https://defipulse.com/" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"ecological-10"}></Svg>
                  </a>
                </div>

                <div className='logo-wrap'>
                  <a href="https://litex.io/" target="_blank" rel="noopener noreferrer">
                    <Svg iconClass={"ecological-11"}></Svg>
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </IntlProvider>
    );
  }
}
