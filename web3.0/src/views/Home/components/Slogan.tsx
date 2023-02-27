import React, { useEffect, useState } from 'react'
import { useIntl } from 'react-intl'

import { format_num_to_K, format_bn } from 'utils'
import box from 'assets/web/box.svg'


const Slogan: React.FC = () => {
    const intl = useIntl()
    const fmt = intl.formatMessage

    const [valueData, setValueData] = useState<any>({})

    useEffect(() => {
        let url = 'https://api.dforce.network/api/web/getTotalValue'
        // let url = 'http://18.163.111.70:5000/getTotalValue'

        fetch(url)
            .then(res => res.text())
            .then((data) => {
                console.log(JSON.parse(data))
                setValueData(JSON.parse(data))

                // {
                //     "Total_Assets": "61151718.54",
                //     "Total_Accumulated_Borrow": "5289250.67",
                //     "Total_Trading_Volume": "5523734.79"
                //   }
            })
    }, [])

    return (
        <>
            <div className={'slogan-wrap'}>
                <div className={'slogan'}>dForce</div>

                <div className={'slogan-sub'}>
                    {fmt({ id: "slogan_sub" })}
                </div>

                <div className={'btn APP'}>
                    <a href="https://app.dforce.network/#/lending" target='_blank'>
                        <img src={box} alt="" />
                        <span>APP</span>
                    </a>
                </div>

                <div className={'total-wrap'}>
                    <div className={'total-item'}>
                        <div className={'total-title'}>
                            {fmt({ id: "Total_Assets" })}
                        </div>
                        <div className={'total-value'}>
                            {
                                valueData && valueData.Total_Assets ?
                                    '$' + format_num_to_K(format_bn(valueData.Total_Assets, 18, 2)) : '...'
                            }
                        </div>
                    </div>

                    <div className={'total-item'}>
                        <div className={'total-title'}>
                            {fmt({ id: "Total_Accumulated_Borrow" })}
                        </div>
                        <div className={'total-value'}>
                            {
                                valueData && valueData.Total_Accumulated_Borrow ?
                                    '$' + format_num_to_K(format_bn(valueData.Total_Accumulated_Borrow, 18, 2)) : '...'
                            }
                        </div>
                    </div>

                    <div className={'total-item'}>
                        <div className={'total-title'}>
                            {fmt({ id: "Total_Accumulated_Swap" })}
                        </div>
                        <div className={'total-value'}>
                            {
                                valueData && valueData.Total_Trading_Volume ?
                                    '$' + format_num_to_K(format_bn(valueData.Total_Trading_Volume, 18, 2)) : '...'
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Slogan