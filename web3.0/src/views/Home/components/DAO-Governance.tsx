import React from 'react'
import { useIntl } from 'react-intl'

import arrow from 'assets/web/arrow.svg'


const DAO_Governance: React.FC = () => {
    const intl = useIntl()
    const fmt = intl.formatMessage

    return (
        <>
            <div className={'Protocols-Wrap'}>
                <div className={'Protocols'}>
                    <div className={'title'}>
                        {fmt({ id: "DAO_Governance" })}
                    </div>
                    <div className={'title-sub'}>
                        {fmt({ id: "DAO_Governance_sub" })}
                    </div>

                    <div className={'btn-wrap'}>
                        <div className={'btn'}>
                            <a href="https://snapshot.page/#/dforce" target='_blank'>
                                <span>{fmt({ id: "Portal_toupiao" })}</span>
                                {/* <img src={arrow} alt="" /> */}
                            </a>
                        </div>

                        <div className={'btn btn2'}>
                            <a href="https://forum.dforce.network" target='_blank'>
                                <span>{fmt({ id: "Forum" })}</span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default DAO_Governance