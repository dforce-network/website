import React from 'react'
import { useIntl } from 'react-intl'

import arrow from 'assets/web/arrow.svg'


const Protocols: React.FC = () => {
    const intl = useIntl()
    const fmt = intl.formatMessage
    const intl_locale = intl.locale


    return (
        <>
            <div className={'Protocols-Wrap'}>
                <div className={'Protocols'}>
                    <div className={'title'}>
                        {fmt({ id: "Protocols" })}
                    </div>
                    <div className={'title-sub'}>
                        {fmt({ id: "Protocols_sub" })}
                    </div>

                    <div className={'Items-Wrap'}>
                        <div className={'Item'}>
                            <div className={'title-item'}>{fmt({ id: "LEND" })}</div>
                            <div className={'title-sub-item'}>{fmt({ id: "LEND_sub" })}</div>
                        </div>
                        <div className={'Item'}>
                            <div className={'title-item'}>{fmt({ id: "ASSETs" })}</div>
                            <div className={'title-sub-item'}>{fmt({ id: "ASSETs_sub" })}</div>
                        </div>
                        <div className={'Item'}>
                            <div className={'title-item'}>{fmt({ id: "TRADE" })}</div>
                            <div className={'title-sub-item'}>{fmt({ id: "TRADE_sub" })}</div>
                        </div>
                        <div className={'Item'}>
                            <div className={'title-item'}>{fmt({ id: "SAVE" })}</div>
                            <div className={'title-sub-item'}>{fmt({ id: "SAVE_sub" })}</div>
                        </div>
                        <div className={'Item'}>
                            <div className={'title-item'}>{fmt({ id: "STAKE" })}</div>
                            <div className={'title-sub-item'}>{fmt({ id: "STAKE_sub" })}</div>
                        </div>
                        <div className={'Item'}>
                            <div className={'title-item'}>{fmt({ id: "STAKE__new" })}</div>
                            <div className={'title-sub-item'}>{fmt({ id: "STAKE_sub__new" })}</div>
                        </div>
                    </div>

                    <div className={'btn-wrap'}>
                        <div className={'btn'}>
                            <a href={
                                intl_locale === 'cn' ? 'https://docs-cn.dforce.network' : "https://docs.dforce.network"
                            } target='_blank'>
                                <span>{fmt({ id: "Documents" })}</span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Protocols