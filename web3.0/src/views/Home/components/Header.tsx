import React from 'react'
import { useIntl } from 'react-intl'

import logo_bai from 'assets/web/logo-bai.svg'
import language from 'assets/web/language.svg'
import arrow_down from 'assets/web/arrow_down.svg'



interface HomeProps {
    changeLanguage: (newLocale: string) => void
}


const Header: React.FC<HomeProps> = ({ changeLanguage }) => {
    const intl = useIntl()
    const intl_locale = intl.locale
    const fmt = intl.formatMessage
    console.log(intl_locale)

    return (
        <>
            <div className={'header-wrap'}>
                <div className={'header-left'}>
                    <div className={'logo-wrap'}>
                        <img src={logo_bai} alt="" />
                    </div>

                    <div className={'target-wrap'}>

                        <div className='target-wrap-item'>
                            <a href="https://app.dforce.network/#/lending" target='_blank'>
                                {fmt({ id: "LENDing" })}
                            </a>
                        </div>

                        <div className='target-wrap-item'>
                            <span>
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
                            </div>
                        </div>

                        <div className='target-wrap-item'>
                            <a href="https://trade.dforce.network/" target='_blank'>
                                {fmt({ id: "TRADE" })}
                            </a>
                        </div>

                        {/* <div className='target-wrap-item'>
                            <a href="https://staking.dforce.network/" target='_blank'>
                                {fmt({ id: "FARM" })}
                            </a>
                        </div> */}

                        <div className='target-wrap-item'>
                            <span>{fmt({ id: "FARM" })}</span>

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
                            </div>
                        </div>

                        <div className='target-wrap-item'>
                            <span>
                                {fmt({ id: "GOVERNANCE" })}
                            </span>

                            <div className='target-wrap-item-list'>
                                <a href="https://snapshot.org/#/dforcenet.eth" target='_blank'>
                                    {fmt({ id: "VOTE" })}
                                </a>
                                {/* <a href="https://airdrop.dforce.network/" target='_blank'>
                                    {fmt({ id: "AIRDROP" })}
                                </a> */}
                                <a href="https://forum.dforce.network" target='_blank'>
                                    {fmt({ id: "FORUM" })}
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

                <div className={'header-right'}>

                    <div className={'header-right-documents'}>
                        <a href={
                            intl_locale === 'cn' ? 'https://docs-cn.dforce.network' : "https://docs.dforce.network"
                        } target='_blank'>
                            {fmt({ id: "Documents" })}
                        </a>
                    </div>

                    <div className={'cur-language'}>
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
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header