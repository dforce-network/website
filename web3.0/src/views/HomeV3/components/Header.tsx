import React, { useState } from 'react'
import { useIntl } from 'react-intl'
import styled from "styled-components"

import logo_bai from 'assets/v3/logo-bai.svg'
import language from 'assets/v3/language.svg'
import arrow_down from 'assets/v3/arrow_down.svg'

import logo from 'assets/v3/logo-bai.svg'
import menu from 'assets/v3/menu.svg'
import close_black from 'assets/v3/close.svg'
import btn_up from 'assets/v3/btn-up.svg'
import {Identify_domain} from 'utils'

interface HomeProps {
    changeLanguage: (newLocale: string) => void
}

const Header: React.FC<HomeProps> = ({ changeLanguage }) => {
    const intl = useIntl()
    const intl_locale = intl.locale
    const fmt = intl.formatMessage
    console.log(intl_locale)
    const [showMenu, setShowMenu] = useState<boolean>(false)
  const [showLanguage, setShowLanguage] = useState<boolean>(false)
  const [showAssets, setAssets] = useState<boolean>(false)
  const [showGOVERNANCE, setGOVERNANCE] = useState<boolean>(false)
  const [showFARM, setFARM] = useState<boolean>(false)
  const show_Menu = ()=>{
    document.getElementsByTagName('body')[0].style.height = window.innerHeight+'px'; 
    document.getElementsByTagName('body')[0].style.overflowY = "hidden"; 
    (document.getElementById('slogan') as HTMLElement).style.backgroundColor = "#000"; 
    (document.getElementById('slogan') as HTMLElement).style.zIndex = "9"; 
    (document.getElementById('slogan') as HTMLElement).style.height = "100vh"; 
    setShowMenu(true)
  }
  const hide_Menu = ()=>{
    document.getElementsByTagName('body')[0].style.height = 'auto'; 
    document.getElementsByTagName('body')[0].style.overflowY = "auto"; 
    (document.getElementById('slogan') as HTMLElement).style.backgroundColor = "inherit"; 
    (document.getElementById('slogan') as HTMLElement).style.zIndex = "9"; 
    (document.getElementById('slogan') as HTMLElement).style.height = "500px"; 
    setShowMenu(false)
  }
    return (
        <>
            {/* PC端头部 */}
            <div className={'header-wrap'}>
                <div className={'header-left'}>
                    <div className={'logo-wrap'}>
                        <img src={logo_bai} alt="" />
                    </div>
                </div>
                <div className={'target-wrap'}>

                        <div className='target-wrap-item'>
                            <a href="https://medium.com/dforcenet" target='_blank' rel="noopener noreferrer">
                                {fmt({ id: "Annoucements" })}
                            </a>
                        </div>

                        <div className='target-wrap-item'>
                        <a href="https://forum.dforce.network/" target='_blank' rel="noopener noreferrer">
                                {fmt({ id: "Forum" })}
                            </a>
                            {/* <span>
                                {fmt({ id: "ASSETs" })}
                            </span>

                            <div className='target-wrap-item-list'>
                                <a href="https://markets.dforce.network/" target='_blank'>
                                    {fmt({ id: "YIELD_MARKETS" })}
                                </a>
                                <a href="https://usdx.dforce.network/" target='_blank'>
                                    {'USDx'}
                                </a>
                                <a href="https://goldx.dforce.network/" target='_blank'>
                                    {'GOLDx'}
                                </a>
                            </div> */}
                        </div>

                        <div className='target-wrap-item'>
                            <a href="https://docs.dforce.network/" target='_blank' rel="noopener noreferrer">
                                {fmt({ id: "Docs" })}
                            </a>
                        </div>

                        {/* <div className='target-wrap-item'>
                            <a href="https://staking.dforce.network/" target='_blank'>
                                {fmt({ id: "FARM" })}
                            </a>
                        </div> */}

                        <div className='target-wrap-item'>
                        <a href="https://github.com/dforce-network" target='_blank' rel="noopener noreferrer">
                                {fmt({ id: "GitHub" })}
                            </a>
                            {/* <span>{fmt({ id: "FARM" })}</span>

                            <div className='target-wrap-item-list'>
                                <a href="https://app.dforce.network/#/Mining" target='_blank'>
                                    {fmt({ id: "FARM__LENDING" })}
                                </a>
                                <a href="https://app.dforce.network/#/Liquidity" target='_blank'>
                                    {fmt({ id: "FARM__LIQUIDITY" })}
                                </a>
                                <a href="https://staking.dforce.network/" target='_blank'>
                                    {fmt({ id: "FARM__LEGACY_LIQUIDITY" })}
                                </a>
                            </div> */}
                        </div>

                        <div className='target-wrap-item'>
                        <a href="https://docs.dforce.network/developer/audit-reports" target='_blank' rel="noopener noreferrer">
                                {fmt({ id: "Audit" })}
                            </a>
                            {/* <span>
                                {fmt({ id: "GOVERNANCE" })}
                            </span>

                            <div className='target-wrap-item-list'>
                                <a href="https://snapshot.org/#/dforcenet.eth" target='_blank'>
                                    {fmt({ id: "VOTE" })}
                                </a>
                                <a href="https://forum.dforce.network" target='_blank'>
                                    {fmt({ id: "FORUM" })}
                                </a>
                            </div> */}
                        </div>

                    </div>
                <div className={'header-right'}>

                    {/* <div className={'header-right-documents'}>
                        <a href={
                            intl_locale === 'cn' ? 'https://docs-cn.dforce.network' : "https://docs.dforce.network"
                        } target='_blank'>
                            {fmt({ id: "Documents" })}
                        </a>
                    </div> */}

                    {/* <div className={'cur-language'}>
                        <img src={language} alt="" />
                        <span >{intl_locale === 'cn' ? '简体中文' : intl_locale === 'en' ? 'English' : 'Language'}</span>
                        <img src={arrow_down} alt="" />

                        <div className='select-language'>
                            <div className='select-item' onClick={(): void => changeLanguage("cn")}>
                                <span>简体中文</span>
                            </div>

                            <div className='select-item' onClick={(): void => changeLanguage("en")}>
                                <span>English</span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        {/* 手机端头部 */}
        {
            showMenu &&
            <>
            <StyledHeader_m>
                <LeftLogo>
                <img src={logo} alt="" />
                </LeftLogo>

                <RightMenu onClick={hide_Menu}>
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
                            <a href="https://medium.com/dforcenet" target='_blank' rel="noopener noreferrer" onClick={hide_Menu}>
                            <span>{fmt({ id: "Annoucements" })}</span>
                            </a>
                        </h1>
                        </div>

                        <div className="menu-item">
                        <h1>
                            <a href="https://forum.dforce.network/" target='_blank' rel="noopener noreferrer" onClick={hide_Menu}>
                            <span>{fmt({ id: "Forum" })}</span>
                            </a>
                        </h1>
                        {/* <h1 onClick={() => { setAssets(!showAssets) }}>
                            {fmt({ id: "ASSETs" })}
                            <img className={showAssets ? "rotate180" : ""} src={btn_up} />
                        </h1>
                        <div className={showAssets ? "items items-icons" : "items items-icons item-hidden"}>
                            <a href="https://markets.dforce.network/" target='_blank' onClick={hide_Menu}>
                            <span className="name">
                                {fmt({ id: "YIELD_MARKETS" })}
                            </span>
                            </a>
                            <a href="https://usdx.dforce.network/" target='_blank' onClick={hide_Menu}>
                            <span className="name">
                                {'USDx'}
                            </span>
                            </a>
                            <a href="https://goldx.dforce.network/" target='_blank' onClick={hide_Menu}>
                            <span className="name">
                                {'GOLDx'}
                            </span>
                            </a>
                        </div> */}
                        </div>

                        <div className="menu-item">
                        <h1>
                            <a href="https://docs.dforce.network/" target='_blank' rel="noopener noreferrer" onClick={hide_Menu}>
                            <span>{fmt({ id: "Docs" })}</span>
                            </a>
                        </h1>
                        </div>

                        {/* <div className="menu-item">
                        <h1>
                            <a href="https://staking.dforce.network/" target='_blank' onClick={hide_Menu}>
                            <span>{fmt({ id: "FARM" })}</span>
                            </a>
                        </h1>
                        </div> */}

                        <div className="menu-item">
                        <h1>
                            <a href="https://github.com/dforce-network" target='_blank' rel="noopener noreferrer" onClick={hide_Menu}>
                            <span>{fmt({ id: "GitHub" })}</span>
                            </a>
                        </h1>
                        {/* <h1 onClick={() => { setFARM(!showFARM) }}>
                            {fmt({ id: "FARM" })}
                            <img className={showFARM ? "rotate180" : ""} src={btn_up} />
                        </h1>
                        <div className={showFARM ? "items items-icons" : "items items-icons item-hidden"}>
                            <a href="https://app.dforce.network/#/Mining" target='_blank' onClick={hide_Menu}>
                            <span className="name">
                                {fmt({ id: "FARM__LENDING" })}
                            </span>
                            </a>
                            <a href="https://app.dforce.network/#/Liquidity" target='_blank' onClick={hide_Menu}>
                            <span className="name">
                                {fmt({ id: "FARM__LIQUIDITY" })}
                            </span>
                            </a>
                            <a href="https://staking.dforce.network/" target='_blank' onClick={hide_Menu}>
                            <span className="name">
                                {fmt({ id: "FARM__LEGACY_LIQUIDITY" })}
                            </span>
                            </a>
                        </div> */}
                        </div>

                        <div className="menu-item">
                        <h1>
                            <a href="https://docs.dforce.network/developer/audit-reports" target='_blank' rel="noopener noreferrer" onClick={hide_Menu}>
                            <span>{fmt({ id: "Audit" })}</span>
                            </a>
                        </h1>
                        {/* <h1 onClick={() => { setGOVERNANCE(!showGOVERNANCE) }}>
                            {fmt({ id: "GOVERNANCE" })}
                            <img className={showGOVERNANCE ? "rotate180" : ""} src={btn_up} />
                        </h1>
                        <div className={showGOVERNANCE ? "items items-icons" : "items items-icons item-hidden"}>
                            <a href="https://snapshot.org/#/dforcenet.eth" target='_blank' onClick={hide_Menu}>
                            <span className="name">
                                {fmt({ id: "VOTE" })}
                            </span>
                            </a>
                            <a href="https://forum.dforce.network" target='_blank' onClick={hide_Menu}>
                            <span className="name">
                                {fmt({ id: "FORUM" })}
                            </span>
                            </a>
                        </div> */}
                        </div>

                        {/* <div className="menu-item">
                        <h1>
                            <a onClick={hide_Menu} href={
                            intl_locale === 'cn' ? 'https://docs-cn.dforce.network' : "https://docs.dforce.network"
                            }
                            target='_blank'>
                            <span>{fmt({ id: "Documents" })}</span>
                            </a>
                        </h1>
                        </div> */}





                        {/* <div className="menu-item menu-item-last">
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
                        </div> */}

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
                <RightMenu onClick={show_Menu} className='spec'>
                    <img src={menu} alt="" />
                </RightMenu>
            <LeftLogo>
                <img src={logo_bai} alt="" />
            </LeftLogo>
            </StyledHeader>
        }
        </>
        
    )
}
export default Header
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
  justify-content: flex-start;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
  margin-bottom: 26px;
  width: 100%;
  .spec{
      margin-right:20px;
  }
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