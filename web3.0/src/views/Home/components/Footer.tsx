import React from 'react'
import { useIntl } from 'react-intl'

import icon_tw from 'assets/web/icon-tw.svg'
import icon_tl from 'assets/web/icon-tl.svg'
import icon_m from 'assets/web/icon-m.svg'
import icon_r from 'assets/web/icon-r.svg'
import icon_y from 'assets/web/icon-y.svg'
import icon_d from 'assets/web/icon-d.svg'
import icon_w from 'assets/web/icon-w.svg'
import icon_wb from 'assets/web/icon-wb.svg'
import blbl from 'assets/web/bilibili.svg'
import icon_dis from 'assets/web/dis.svg'

import qrcode_wechat from 'assets/web/qrcode.png'


const Footer: React.FC = () => {
    const intl = useIntl()
    const fmt = intl.formatMessage
    const intl_locale = intl.locale

    return (
        <>
            <div className={'footer-wrap'}>
                <div className={'footer-left'}>
                    {/* <div className={'menu-item'}>
                        <div className={'menu-title'}>
                            {fmt({ id: "Protocol" })}
                        </div>
                        <div className={'menu-menu'}>
                            <a href="https://usdx.dforce.network" target='_blank'>{fmt({ id: "Assets" })}</a>
                            <a href="https://trade.dforce.network" target='_blank'>{fmt({ id: "Trading" })}</a>
                            <a href="https://app.dforce.network/#/lending" target='_blank'>{fmt({ id: "Lending" })}</a>
                            <a href="https://staking.dforce.network" target='_blank'>{fmt({ id: "Staking" })}</a>
                        </div>
                    </div> */}

                    <div className={'menu-item'}>
                        <div className={'menu-title'}>
                            {fmt({ id: "Documents" })}
                        </div>
                        <div className={'menu-menu'}>
                            <a href={
                                intl_locale === 'cn' ? 'https://docs-cn.dforce.network' : "https://docs.dforce.network"
                            } target='_blank'>{fmt({ id: "FAQ" })}</a>
                            <a href="https://github.com/dforce-network" target='_blank'>{fmt({ id: "Developers" })}</a>
                            <a href="https://docs.dforce.network/developer/audit-reports" target='_blank'>{fmt({ id: "Audit_Reports" })}</a>
                            <a href="https://github.com/dforce-network/documents/tree/master/white_papers" target='_blank'>{fmt({ id: "Whitepaper" })}</a>
                        </div>
                    </div>


                    <div className={'menu-item'}>
                        <div className={'menu-title'}>
                            {fmt({ id: "Governance" })}
                        </div>
                        <div className={'menu-menu'}>
                            <a href="https://snapshot.org/#/dforcenet.eth" target='_blank'>{fmt({ id: "Snapshot" })}</a>
                            <a href="https://forum.dforce.network" target='_blank'>{fmt({ id: "Forum" })}</a>
                        </div>
                    </div>

                    <div className={'menu-item'}>
                        <div className={'menu-title'}>
                            {fmt({ id: "Contacts" })}
                        </div>
                        <div className={'menu-menu'}>
                            {/* <a href="" target='_blank'>{fmt({ id: "Hiring" })}</a>
                            <a href="" target='_blank'>{fmt({ id: "BD" })}</a>
                            <a href="" target='_blank'>{fmt({ id: "dForce_Labs" })}</a>bd@dforce.network */}
                            {/* <a href="mailto:frotech@foxmail.com" target="_blank">frotech@foxmail.com</a> */}

                            {/* <a href="mailto:bd@dforce.network">bd@dforce.network</a> */}
                            {/* <a href="javascript:;" target='_blank' >bd@dforce.network</a> */}
                            {/* <a href="javascript:;" target='_blank' >contact@dforce.network</a> */}
                            <a href="mailto:contact@dforce.network">contact@dforce.network</a>
                        </div>
                    </div>
                </div>

                <div className={'footer-right'}>
                    <div className={'icon-wrap'}>
                        <a href="https://twitter.com/dForcenet" target='_blank'>
                            <img src={icon_tw} alt="" />
                        </a>
                    </div>

                    <div className={'icon-wrap'}>
                        <a href="https://t.me/dforcenet" target='_blank'>
                            <img src={icon_tl} alt="" />
                        </a>
                    </div>

                    <div className={'icon-wrap'}>
                        <a href="https://medium.com/dforcenet" target='_blank'>
                            <img src={icon_m} alt="" />
                        </a>
                    </div>

                    <div className={'icon-wrap'}>
                        <a href="https://www.reddit.com/r/dForceNetwork" target='_blank'>
                            <img src={icon_r} alt="" />
                        </a>
                    </div>

                    <div className={'icon-wrap'}>
                        <a href="https://discord.gg/c2PC8SM" target='_blank'>
                            <img src={icon_dis} alt="" />
                        </a>
                    </div>

                    <div className={'icon-wrap'}>
                        <a href="https://www.youtube.com/channel/UCvvI93uh1tHIc-49eejricQ" target='_blank'>
                            <img src={icon_y} alt="" />
                        </a>
                    </div>

                    <div className={'icon-wrap'}>
                        <a href="https://forum.dforce.network" target='_blank'>
                            <img src={icon_d} alt="" />
                        </a>
                    </div>

                    {/* <div className={'icon-wrap'}>
                        <span className={'qrcode'}>
                            <img src={icon_w} alt="" />
                            <img className={'qrcode-wechat'} src={qrcode_wechat} alt="" />
                        </span>
                    </div> */}

                    {/* <div className={'icon-wrap'}>
                        <a href="https://weibo.com/u/7531703563" target='_blank'>
                            <img src={icon_wb} alt="" />
                        </a>
                    </div> */}

                    <div className={'icon-wrap'}>
                        <a href="https://space.bilibili.com/2088369305" target='_blank'>
                            <img src={blbl} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer