import React from 'react'
import { useIntl } from 'react-intl'

import Security_1 from 'assets/v3/Security-1.svg'
import Security_2 from 'assets/v3/Security-2.svg'
import Security_3 from 'assets/v3/Security-3.svg'
import Security_4 from 'assets/v3/Security-4.svg'
import Security_5 from 'assets/v3/Security-5.svg'
import Security_6 from 'assets/v3/Security-6.svg'
import Security_7 from 'assets/v3/Security-7.svg'
import Security_8 from 'assets/v3/Security-8.svg'
import Security_9 from 'assets/v3/Security-9.svg'



const Item: React.FC = () => {
    const intl = useIntl()
    const fmt = intl.formatMessage
    // {/* {fmt({ id: "Investors" })} */}

    return (
        <>
            <div className={'Sec'}>
                <div className={'Sec-top'}>
                    <div className={'Sec-title'}>
                    Security
                    </div>
                    <div className={'Sec-title-sub'}>
                    Adhering to the best practice to build security-focused protocols with checks and balances that minimize potential risks.
                    </div>
                    <div className={'Sec-btns'}>
                        <a href="https://docs.dforce.network/developer/audit-reports" className='Sec-btns-btn' target="_blank" rel="noopener noreferrer">
                        Audit Reports
                        </a>
                        <a href="https://docs.dforce.network/developer/bug-bounty" className='Sec-btns-btn Sec-btns-btn--spe' target="_blank" rel="noopener noreferrer">
                        Bug Bounty
                        </a>
                    </div>
                </div>

                <div className={'Sec-logos'}>
                    <div className={'Sec-logos-item'}>
                        <img src={Security_1} alt="" />
                    </div>
                    <div className={'Sec-logos-item'}>
                        <img src={Security_2} alt="" />
                    </div>
                    <div className={'Sec-logos-item'}>
                        <img src={Security_3} alt="" />
                    </div>

                    <div className={'Sec-logos-item'}>
                        <img src={Security_4} alt="" />
                    </div>
                    <div className={'Sec-logos-item'}>
                        <img src={Security_5} alt="" />
                    </div>
                    <div className={'Sec-logos-item'}>
                        <img src={Security_6} alt="" />
                    </div>

                    <div className={'Sec-logos-item'}>
                        <img src={Security_7} alt="" />
                    </div>
                    <div className={'Sec-logos-item'}>
                        <img src={Security_8} alt="" />
                    </div>
                    <div className={'Sec-logos-item'}>
                        <img src={Security_9} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Item