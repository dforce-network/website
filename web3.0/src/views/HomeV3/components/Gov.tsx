import React from 'react'
import { useIntl } from 'react-intl'

import icon9 from 'assets/v3/icon-9.svg'
import icon10 from 'assets/v3/icon-10.svg'
import gov_1 from 'assets/v3/gov-1.svg'
import gov_2 from 'assets/v3/gov-2.svg'
import bg_logo from 'assets/v3/bg-logo.svg'



const Item: React.FC = () => {
    const intl = useIntl()
    const fmt = intl.formatMessage
    // {/* {fmt({ id: "Investors" })} */}

    return (
        <>
            <div className={'Gov-wrap'}>
                <div className={'Gov--subpics'}>
                    <img src={bg_logo} alt="" />
                </div>

                <div className={'Gov'}>
                    <div className={'Gov-title'}>Governance</div>
                    <div className={'Gov-title-sub'}>
                        dForce DAO ensures long-term success by making decentralization a guiding priority in governonance.
                    </div>

                    <div className={'Gov-item-wrap'}>
                        <div className={'Gov-item'}>
                            <div className={'Gov-proiect-name'}>
                                <img src={icon9} alt="" />
                            </div>
                            <div className={'Gov-proiect-content'}>
                                A hybrid model featuring both Free Staking and Lock-up Staking.
                            </div>
                            <div className={'Gov-proiect-link-wrap'}>
                                <a className={'Gov-proiect-link'} href="https://app.dforce.network/#/StakeDF" target="_blank" rel="noopener noreferrer">
                                    Staking
                                </a>
                            </div>
                        </div>

                        <div className={'Gov-item'}>
                            <div className={'Gov-proiect-name'}>
                                <img src={icon10} alt="" />
                            </div>
                            <div className={'Gov-proiect-content'}>
                                veDF holders can delegate your voting rights to governors of your choice.
                            </div>
                            <div className={'Gov-proiect-link-wrap'}>
                                <a className={'Gov-proiect-link'} href="https://app.dforce.network/#/Delegate" target="_blank" rel="noopener noreferrer">
                                    Delegation
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={'Gov-item-wrap second'}>
                        <div className={'Gov-item'}>
                            <div className={'Gov-proiect-name'}>
                                <img src={gov_1} alt="" />
                            </div>
                            <div className={'Gov-proiect-content'}>
                                Discussions around how to shape the future of dForce.
                            </div>
                            <div className={'Gov-proiect-link-wrap'}>
                                <a className={'Gov-proiect-link'} href="https://forum.dforce.network" target="_blank" rel="noopener noreferrer">
                                    Forum
                                </a>
                            </div>
                        </div>

                        <div className={'Gov-item'}>
                            <div className={'Gov-proiect-name'}>
                                <img src={gov_2} alt="" />
                            </div>
                            <div className={'Gov-proiect-content'}>
                                Collectively decide on proposed protocol changes.
                            </div>
                            <div className={'Gov-proiect-link-wrap'}>
                                <a className={'Gov-proiect-link'} href="https://snapshot.org/#/dforcenet.eth" target="_blank" rel="noopener noreferrer">
                                    Snapshot
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Item