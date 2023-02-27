import React from 'react'
import { useIntl } from 'react-intl'

import Security_Audits__zhaoyinguoji from 'assets/web/Security_Audits__zhaoyinguoji.png'
import Security_Audits__multicioncaption from 'assets/web/Security_Audits__multicioncaption.png'
import Security_Audits__huobi from 'assets/web/Security_Audits__huobi.svg'


const Investors: React.FC = () => {
    const intl = useIntl()
    const fmt = intl.formatMessage

    return (
        <>
            <div className={'Investors'}>
                <div className={'Protocols'}>
                    <div className={'title color-fff Investors-title'}>
                        {fmt({ id: "Investors" })}
                    </div>

                    <div className={'Items-Wrap'}>

                        <div className={'Item-img'}>
                            <img src={Security_Audits__zhaoyinguoji} alt="" />
                        </div>
                        <div className={'Item-img'}>
                            <img src={Security_Audits__multicioncaption} alt="" />
                        </div>
                        <div className={'Item-img'}>
                            <img src={Security_Audits__huobi} alt="" />
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}
export default Investors