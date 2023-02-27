import React from 'react'
import { useIntl } from 'react-intl'

import CMBI from 'assets/v3/CMBI.svg'
import HuobiCapital from 'assets/v3/HuobiCapital.svg'
import Multicoin from 'assets/v3/Multicoin.svg'



const Item: React.FC = () => {
    const intl = useIntl()
    const fmt = intl.formatMessage

    return (
        <>
            <div className={'Community'}>
                <div className={'Community-title'}>
                    {/* {fmt({ id: "Investors" })} */}
                    Investors
                </div>
                <div className={'Community-title--sub'}>
                    Backed by the most prestigious partners in the crypto industry
                </div>


                <div className={'Community-wrap'}>
                    <a className={'Community-item-investor'} href="javascript:;" rel="noopener noreferrer">
                        <div className={''}>
                            <img src={Multicoin} alt="" />
                        </div>
                    </a>

                    <a className={'Community-item-investor'} href="javascript:;" rel="noopener noreferrer">
                        <div className={''}>
                            <img src={CMBI} alt="" />
                        </div>
                    </a>

                    <a className={'Community-item-investor'} href="javascript:;" rel="noopener noreferrer">
                        <div className={''}>
                            <img src={HuobiCapital} alt="" />
                        </div>
                    </a>
                </div>



            </div>
        </>
    )
}
export default Item