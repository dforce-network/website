import React from 'react'
import { useIntl } from 'react-intl'

import logo_entrofi from 'assets/v3/logo-entrofi.png'
import logo_liqee from 'assets/v3/logo-liqee.svg'
import eco_link from 'assets/v3/btn-ecosystem.svg'
import bg_logo from 'assets/v3/bg-logo.svg'



const Item: React.FC = () => {
    const intl = useIntl()
    const fmt = intl.formatMessage
    // {/* {fmt({ id: "Investors" })} */}

    return (
        <>
            <div className={'Eco-wrap'}>
                <div className={'Eco--subpics'}>
                    <img src={bg_logo} alt="" />
                </div>

                <div className={'Eco'}>
                    <div className={'Eco-title'}>Fast-growing Ecosystem</div>

                    <div className={'Eco-item-wrap'}>
                        <div className={'Eco-item'}>
                            <div className={'proiect-name'}>
                                <img src={logo_liqee} alt="" />
                            </div>
                            <div className={'proiect-content'}>
                                Liqee is the world’s first and currently the largest lending protocol dedicated for liquid staking asset and a unified portal for liquid staking markets.
                            </div>
                            <a href='https://liqee.io' className={'proiect-link'} target="_blank" rel="noopener noreferrer">
                                <img src={eco_link} alt="" />
                            </a>
                        </div>

                        <div className={'Eco-item'}>
                            <div className={'proiect-name'}>
                                <img src={logo_entrofi} alt="" />
                            </div>
                            <div className={'proiect-content'}>
                                EntroFi is an innovative protocol designed to channel DeFi liquidity directly toward acquisition/buyout of assets (RWA) or infrastructures with recuring cash flows in both real world and metaverse.
                            </div>
                            <a href='https://entrofi.io' className={'proiect-link'} target="_blank" rel="noopener noreferrer">
                                <img src={eco_link} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Item