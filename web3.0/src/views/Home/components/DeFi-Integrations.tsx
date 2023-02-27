import React from 'react'
import { useIntl } from 'react-intl'


import DeFi__flamingo from 'assets/web/DeFi__flamingo.png'
import DeFi__unisave from 'assets/web/DeFi__unisave.png'
import DeFi__sashimiswap from 'assets/web/DeFi__sashimiswap.png'

import DeFi__yearn_finance from 'assets/web/DeFi__yearn_finance.svg'
import DeFi__DFI_money from 'assets/web/DeFi__DFI_money(YFII).svg'
import DeFi__bandprotocal from 'assets/web/DeFi__bandprotocal.svg'
import DeFi__deband from 'assets/web/DeFi__deband.svg'
import DeFi__defipulsh from 'assets/web/DeFi__defipulsh.svg'
import DeFi__sfinance from 'assets/web/DeFi__sfinance.svg'



const DeFi_Integrations: React.FC = () => {
    const intl = useIntl()
    const fmt = intl.formatMessage

    return (
        <>
            <div className={'Investors'}>
                <div className={'Protocols'}>
                    <div className={'title color-fff Investors-title'}>
                        {fmt({ id: "DeFi_Integrations" })}
                    </div>

                    <div className={'Items-Wrap'}>

                        <div className={'Item-img'}>
                            <img src={DeFi__yearn_finance} alt="" />
                        </div>
                        <div className={'Item-img'}>
                            <img src={DeFi__DFI_money} alt="" />
                        </div>
                        <div className={'Item-img'}>
                            <img src={DeFi__bandprotocal} alt="" />
                        </div>

                        <div className={'Item-img'}>
                            <img src={DeFi__deband} alt="" />
                        </div>
                        <div className={'Item-img'}>
                            <img src={DeFi__defipulsh} alt="" />
                        </div>

                        <div className={'Item-img'}>
                            <img src={DeFi__sashimiswap} alt="" />
                        </div>

                        <div className={'Item-img'}>
                            <img src={DeFi__flamingo} alt="" />
                        </div>
                        <div className={'Item-img'}>
                            <img src={DeFi__sfinance} alt="" />
                        </div>
                        <div className={'Item-img'}>
                            <img src={DeFi__unisave} alt="" />
                        </div>
                        {/* <div className={'Item-img'}>
                            <img src={DeFi__sashimiswap} alt="" />
                        </div> */}

                    </div>

                </div>
            </div>
        </>
    )
}
export default DeFi_Integrations