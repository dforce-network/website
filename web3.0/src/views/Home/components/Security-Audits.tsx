import React from 'react'
import { useIntl } from 'react-intl'

import Security_Audits__trailofbits from 'assets/web/Security_Audits__trailofbits.svg'
import Security_Audits__certora from 'assets/web/Security_Audits__certora.svg'
import Security_Audits__peckshield from 'assets/web/Security_Audits__peckshield.svg'
import Security_Audits__Diligence from 'assets/web/Security_Audits__Diligence.svg'
import Security_Audits__Quantstamp from 'assets/web/Security_Audits__Quantstamp.svg'

import Security_Audits__slowmist from 'assets/web/Security_Audits__slowmist.png'
import Security_Audits__secbit from 'assets/web/Security_Audits__secbit.png'
import Security_Audits__imm from 'assets/web/Security_Audits__Immunefi.svg'
import Security_Audits__certik from 'assets/web/Security_Audits__certik.png'



const Security_Audits: React.FC = () => {
    const intl = useIntl()
    const fmt = intl.formatMessage
    const intl_locale = intl.locale

    return (
        <>
            <div className={'Security'}>
                <div className={'Protocols'}>
                    <div className={'title color-fff'}>
                        {fmt({ id: "Security_Audits" })}
                    </div>
                    <div className={'title-sub color-fff'}>
                        {fmt({ id: "Security_Audits_sub" })}
                    </div>

                    <div className={'Items-Wrap'}>

                        <div className={'Item-img'}>
                            <img src={Security_Audits__trailofbits} alt="" />
                        </div>
                        <div className={'Item-img'}>
                            <img src={Security_Audits__Diligence} alt="" />
                        </div>
                        <div className={'Item-img'}>
                            <img src={Security_Audits__certik} alt="" />
                        </div>

                        <div className={'Item-img'}>
                            <img src={Security_Audits__Quantstamp} alt="" />
                        </div>
                        <div className={'Item-img'}>
                            <img src={Security_Audits__certora} alt="" />
                        </div>
                        <div className={'Item-img'}>
                            <img src={Security_Audits__peckshield} alt="" />
                        </div>

                        <div className={'Item-img'}>
                            <img src={Security_Audits__slowmist} alt="" />
                        </div>
                        <div className={'Item-img'}>
                            <img src={Security_Audits__secbit} alt="" />
                        </div>
                        <div className={'Item-img'}>
                            <img src={Security_Audits__imm} alt="" />
                        </div>


                    </div>

                    <div className={'btn-wrap'}>
                        <div className={'btn'}>
                            <a href="https://docs.dforce.network/developer/audit-reports" target='_blank'>
                                <span>{fmt({ id: "Audit_Reports" })}</span>
                            </a>
                        </div>
                        <div className={'btn btn2'}>
                            <a
                                // href={
                                //     intl_locale === 'cn' ?
                                //         'https://docs-cn.dforce.network/devs/bug-bounty'
                                //         :
                                //         "https://docs.dforce.network/devs/bug-bounty"
                                // }
                                href='https://docs.dforce.network/developer/bug-bounty'
                                target='_blank'>
                                <span>{fmt({ id: "Bug_Bounty" })}</span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Security_Audits