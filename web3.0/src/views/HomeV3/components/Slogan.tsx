import React from 'react'
import { useIntl } from 'react-intl'
import styled from 'styled-components'
import Header from './Header'
import Data from './Data'
import Launchapp from 'assets/v3/Launch-app.svg'
import bgSlogon from 'assets/v3/bg-slogon.svg'
import ETH from 'assets/v3/ETH.svg'
import BSC from 'assets/v3/BSC.svg'
import Arbitrum from 'assets/v3/Arbitrum.svg'
import Optimism from 'assets/v3/Optimism.svg'
import Polygon from 'assets/v3/Polygon.svg'
import Avalanche from 'assets/v3/Avalanche.svg'
import kava from 'assets/v3/kava.svg'
import {Identify_domain} from 'utils'

interface SloganProps {
    changeLanguage: (newLocale: string) => void
}

const Slogan: React.FC<SloganProps> = ({ changeLanguage }) => {
    const intl = useIntl()
    const fmt = intl.formatMessage
    // {/* {fmt({ id: "Investors" })} */}

    return (
        <Section id="slogan">
            <Header changeLanguage={changeLanguage} />
            <Title>DeFi Infrastructure in</Title>
            <SubTitle>{fmt({ id: 'Web3' })}</SubTitle>
            <SmallTitle>
                A complete set of decentralized finance protocols covering assets, lending, and trading, serving as DeFi infrastructure in Web3.
            </SmallTitle>
            <LaunchApp href={Identify_domain()} target="_blank" rel="noopener noreferrer">
                Launch APP
                <Icon src={Launchapp}></Icon>
            </LaunchApp>
            <List>
                <Item src={ETH}></Item>
                <Item src={BSC}></Item>
                <Item src={Arbitrum}></Item>
                <Item src={Optimism}></Item>
                <Item src={Polygon}></Item>
                <Item src={Avalanche}></Item>
                <Item src={kava}></Item>
            </List>
            {/* <Data/> */}
        </Section>
    )
}
const Section = styled.section`
    display:flex;
    width:1920px;
    height:1057px;
    overflow: hidden;
    position:relative;
    left: 50%;
    transform: translateX(-50%);
    flex-direction:column;
    align-items: center;
    /* border-bottom: 1px solid rgba(255,255,255,0.15); */
    background-image: url(${bgSlogon});
    background-position:center top;
    background-size: cover;
    @media (max-width: 767px) {
        width: 100%;
        height:500px;
    }
`
const Title = styled.div`
    font-size: 70px;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 88px;
    margin-bottom: 19px;
    @media (max-width: 767px) {
        font-size: 21px;
        line-height: 44px;
        margin-bottom: 0;
        text-align: center;
    }
`
const SubTitle = styled.div`
    font-size: 100px;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 88px;
    margin-bottom: 40px;
    background: linear-gradient(90deg, #2DB3F4 0%, #5A4FF4 50%, #9F2DF4 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media (max-width: 767px) {
        font-size: 35px;
        line-height: 44px;
        margin-bottom: 10px;
    }
`
const SmallTitle = styled.div`
    max-width: 800px;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 29px;
    opacity: 0.9;
    margin-bottom: 60px;
    @media (max-width: 767px) {
        max-width: 330px;
        font-size: 12px;
        line-height: 18px;
        margin-bottom: 25px;
    }
`
const LaunchApp = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 190px;
    line-height: 56px;
    color: #fff;
    background: linear-gradient(90deg, #2D66F4 0%, #9F2DF4 100%);
    box-shadow: 0px 17px 43px 0px rgba(45, 102, 244, 0.35);
    border-radius: 28px;
    margin-bottom: 60px;
    cursor: pointer;
    @media (max-width: 767px) {
        font-size: 12px;
        width:114px;
        line-height: 34px;
        margin-bottom: 25px;
    }
`
const Icon = styled.img`
    width:16px;
    height:16px;
    margin-left:5px;
    @media (max-width: 767px) {
        width: 8px;
        height: 8px;
        margin-left: 3px;
    }
`
const List = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom:170px;
    @media (max-width: 767px) {
        margin-bottom: 43px;
    }
`
const Item = styled.img`
    width:60px;
    height:60px;
    margin-right:20px;
    @media (max-width: 767px) {
        width: 30px;
        height: 30px;
        margin-right: 10px;
    }
`
export default Slogan