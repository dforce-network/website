import React from 'react'
import { useIntl } from 'react-intl'

import df_logo from 'assets/v3/df-logo.svg'
import {Identify_domain} from 'utils'


const Item: React.FC = () => {
    const intl = useIntl()
    const fmt = intl.formatMessage

    return (
        <>
            <div className={'Footer-wrap'}>
                <div className={'Footer'}>
                    <div className={'Footer-left'}>
                        {/* {fmt({ id: "Investors" })} */}
                        <div className={'logo-wrap'}>
                            <a href={Identify_domain()} target="_blank" rel="noopener noreferrer">
                                <img src={df_logo} alt="" />
                            </a>
                        </div>
                        <div className={'logo-contact'}>
                            <a href="mailto:contact@dforce.network">
                                contact@dforce.network
                            </a>
                        </div>
                    </div>


                    <div className={'Footer-rightWrap'}>
                        <div className={'Footer-rightItem'}>
                            <div className={'Footer-right--title'}>
                                Resources
                            </div>
                            <div className={'Footer-right--itemwrap'}>
                                <div className={'Footer-right--item'}>
                                    <a href={Identify_domain()} target="_blank" rel="noopener noreferrer">
                                        Protocols
                                    </a>
                                </div>
                                <div className={'Footer-right--item'}>
                                    <a href="https://docs.dforce.network" target="_blank" rel="noopener noreferrer">
                                        Documentation
                                    </a>
                                </div>
                                <div className={'Footer-right--item'}>
                                    <a href="https://medium.com/dforcenet" target="_blank" rel="noopener noreferrer">
                                        Medium
                                    </a>
                                </div>
                                <div className={'Footer-right--item'}>
                                    <a href="https://docs.dforce.network/faq-and-guides/faq" target="_blank" rel="noopener noreferrer">
                                        FAQs
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className={'Footer-rightItem'}>
                            <div className={'Footer-right--title'}>
                                Developer
                            </div>
                            <div className={'Footer-right--itemwrap'}>
                                <div className={'Footer-right--item'}>
                                    <a href="https://github.com/dforce-network" target="_blank" rel="noopener noreferrer">
                                        GitHub
                                    </a>
                                </div>
                                {/* <div className={'Footer-right--item'}>
                                    <a href="#">
                                    Integration Guides
                                    </a>
                                </div> */}
                                <div className={'Footer-right--item'}>
                                    <a href="https://docs.dforce.network/developer/audit-reports" target="_blank" rel="noopener noreferrer">
                                        Audit Reports
                                    </a>
                                </div>
                                <div className={'Footer-right--item'}>
                                    <a href="https://docs.dforce.network/developer/bug-bounty" target="_blank" rel="noopener noreferrer">
                                        Bug Bounty
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className={'Footer-rightItem'}>
                            <div className={'Footer-right--title'}>
                                Governance
                            </div>
                            <div className={'Footer-right--itemwrap'}>
                                <div className={'Footer-right--item'}>
                                    <a href={`${Identify_domain()}#/StakeDF`} target="_blank" rel="noopener noreferrer">
                                        Staking
                                    </a>
                                </div>
                                <div className={'Footer-right--item'}>
                                    <a href={`${Identify_domain()}#/Delegate`} target="_blank" rel="noopener noreferrer">
                                        Delegation
                                    </a>
                                </div>
                                <div className={'Footer-right--item'}>
                                    <a href="https://snapshot.org/#/dforcenet.eth" target="_blank" rel="noopener noreferrer">
                                        Snapshot
                                    </a>
                                </div>
                                <div className={'Footer-right--item'}>
                                    <a href="https://forum.dforce.network" target="_blank" rel="noopener noreferrer">
                                        Forum
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Item