import React, { useState } from 'react'
import styled from "styled-components"
import { useIntl } from "react-intl"
import Header from './components/Header'
import Slogan from './components/Slogan'

import Protocols from './components/Protocols'
import DAO_Governance from './components/DAO-Governance'
import Security_Audits from './components/Security-Audits'
import Investors from './components/Investors'
import DeFi_Integrations from './components/DeFi-Integrations'

import Footer from './components/Footer'
import logo from 'assets/web/logo-bai.svg'
import logo_bai from 'assets/web/logo-bai.svg'
import menu from 'assets/web/menu.svg'
import close_black from 'assets/web/close.svg'
import btn_up from 'assets/web/btn-up.svg'


interface HomeProps {
  changeLanguage: (newLocale: string) => void
}


const Home: React.FC<HomeProps> = ({ changeLanguage }) => {
  const intl = useIntl()
  const fmt = intl.formatMessage
  const intl_locale = intl.locale

  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [showLanguage, setShowLanguage] = useState<boolean>(false)
  const [showAssets, setAssets] = useState<boolean>(false)
  const [showGOVERNANCE, setGOVERNANCE] = useState<boolean>(false)
  const [showFARM, setFARM] = useState<boolean>(false)



  return (
    <>

      {/* 显示 手机版菜单 */}
      {
        showMenu &&
        <>
          <StyledHeader_m>
            <LeftLogo>
              <img src={logo} alt="" />
            </LeftLogo>

            <RightMenu onClick={() => { setShowMenu(false) }}>
              <img src={close_black} alt="" />
            </RightMenu>
          </StyledHeader_m>

          <MobileMenu>
            <div className="mobile-header">
              <div className="mobile-menu">
                <div className="mobile-menu-body">
                  <div className="menu-item-wrap">


                    <div className="menu-item">
                      <h1>
                        <a href="https://app.dforce.network/#/lending" target='_blank' onClick={() => { setShowMenu(false) }}>
                          <span>{fmt({ id: "LENDing" })}</span>
                        </a>
                      </h1>
                    </div>

                    <div className="menu-item">
                      <h1 onClick={() => { setAssets(!showAssets) }}>
                        {fmt({ id: "ASSETs" })}
                        <img className={showAssets ? "rotate180" : ""} src={btn_up} />
                      </h1>
                      <div className={showAssets ? "items items-icons" : "items items-icons item-hidden"}>
                        <a href="https://markets.dforce.network/" target='_blank' onClick={() => { setShowMenu(false) }}>
                          <span className="name">
                            {fmt({ id: "YIELD_MARKETS" })}
                          </span>
                        </a>
                        <a href="https://usdx.dforce.network/" target='_blank' onClick={() => { setShowMenu(false) }}>
                          <span className="name">
                            {'USDx'}
                          </span>
                        </a>
                        <a href="https://goldx.dforce.network/" target='_blank' onClick={() => { setShowMenu(false) }}>
                          <span className="name">
                            {'GOLDx'}
                          </span>
                        </a>
                      </div>
                    </div>

                    <div className="menu-item">
                      <h1>
                        <a href="https://trade.dforce.network/" target='_blank' onClick={() => { setShowMenu(false) }}>
                          <span>{fmt({ id: "TRADE" })}</span>
                        </a>
                      </h1>
                    </div>

                    {/* <div className="menu-item">
                      <h1>
                        <a href="https://staking.dforce.network/" target='_blank' onClick={() => { setShowMenu(false) }}>
                          <span>{fmt({ id: "FARM" })}</span>
                        </a>
                      </h1>
                    </div> */}

                    <div className="menu-item">
                      <h1 onClick={() => { setFARM(!showFARM) }}>
                        {fmt({ id: "FARM" })}
                        <img className={showFARM ? "rotate180" : ""} src={btn_up} />
                      </h1>
                      <div className={showFARM ? "items items-icons" : "items items-icons item-hidden"}>
                        <a href="https://app.dforce.network/#/Mining" target='_blank' onClick={() => { setShowMenu(false) }}>
                          <span className="name">
                            {fmt({ id: "FARM__LENDING" })}
                          </span>
                        </a>
                        <a href="https://app.dforce.network/#/Liquidity" target='_blank' onClick={() => { setShowMenu(false) }}>
                          <span className="name">
                            {fmt({ id: "FARM__LIQUIDITY" })}
                          </span>
                        </a>
                        <a href="https://staking.dforce.network/" target='_blank' onClick={() => { setShowMenu(false) }}>
                          <span className="name">
                            {fmt({ id: "FARM__LEGACY_LIQUIDITY" })}
                          </span>
                        </a>
                      </div>
                    </div>

                    <div className="menu-item">
                      <h1 onClick={() => { setGOVERNANCE(!showGOVERNANCE) }}>
                        {fmt({ id: "GOVERNANCE" })}
                        <img className={showGOVERNANCE ? "rotate180" : ""} src={btn_up} />
                      </h1>
                      <div className={showGOVERNANCE ? "items items-icons" : "items items-icons item-hidden"}>
                        <a href="https://snapshot.org/#/dforcenet.eth" target='_blank' onClick={() => { setShowMenu(false) }}>
                          <span className="name">
                            {fmt({ id: "VOTE" })}
                          </span>
                        </a>
                        {/* <a href="https://airdrop.dforce.network/" target='_blank' onClick={() => { setShowMenu(false) }}>
                          <span className="name">
                            {fmt({ id: "AIRDROP" })}
                          </span>
                        </a> */}
                        <a href="https://forum.dforce.network" target='_blank' onClick={() => { setShowMenu(false) }}>
                          <span className="name">
                            {fmt({ id: "FORUM" })}
                          </span>
                        </a>
                      </div>
                    </div>

                    <div className="menu-item">
                      <h1>
                        <a onClick={() => { setShowMenu(false) }} href={
                          intl_locale === 'cn' ? 'https://docs-cn.dforce.network' : "https://docs.dforce.network"
                        }
                          target='_blank'>
                          <span>{fmt({ id: "Documents" })}</span>
                        </a>
                      </h1>
                    </div>





                    <div className="menu-item menu-item-last">
                      <h1 onClick={() => { setShowLanguage(!showLanguage) }}>
                        {intl_locale === 'cn' ? '简体中文' : intl_locale === 'en' ? 'English' : 'Language'}
                        <img className={showLanguage ? "rotate180" : ""} src={btn_up} />
                      </h1>
                      <div className={showLanguage ? "items items-icons" : "items items-icons item-hidden"}>
                        <a href="javascript:;" onClick={(): void => changeLanguage("cn")}>
                          <span className="name">简体中文</span>
                        </a>
                        <a href="javascript:;" onClick={(): void => changeLanguage("en")}>
                          <span className="name">English</span>
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </MobileMenu>
        </>
      }
      {
        !showMenu &&
        <StyledHeader>
          <LeftLogo>
            <img src={logo_bai} alt="" />
          </LeftLogo>

          <RightMenu onClick={() => { setShowMenu(true) }}>
            <img src={menu} alt="" />
          </RightMenu>
        </StyledHeader>
      }




      {
        !showMenu &&
        <>
          <div id="particles-js">
            <Header changeLanguage={changeLanguage} />
            <Slogan />
          </div>


          {/* 白色底 */}
          <a id="Protocols"></a>
          <Protocols />

          <a id="Audits"></a>
          <Security_Audits />
          <Investors />
          {/* <DeFi_Integrations /> */}

          {/* 白色底 */}
          <a id="Governance"></a>
          <DAO_Governance />

          <Footer />
        </>
      }

    </>
  )
}
export default Home

const LeftLogo = styled.div``
const RightMenu = styled.div`
  width: 22px;
  height: 22px;

  img{
    width: 100%;
    height: 100%;
  }
`

const StyledHeader_m = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }

  display: flex;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
  width: 100%;
  position: fixed;
  z-index: 9999;
`
const StyledHeader = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }

  display: flex;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
  width: 100%;
`
const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  z-index: 9998;
`
