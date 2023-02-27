import React from 'react'
import { useIntl } from 'react-intl'
import styled from 'styled-components'
import Lending from 'assets/v3/Use_Lending.svg'
import Multi from 'assets/v3/Use_Multi.svg'
import Trading from 'assets/v3/Use_Trading.svg'
import Staking from 'assets/v3/Use_Staking.svg'
import Pos_Staking from 'assets/v3/Use_Pos_Staking.svg'
import eco_link from 'assets/v3/btn-ecosystem.svg'


const Howtouse: React.FC = () => {
    const intl = useIntl()
    const fmt = intl.formatMessage
    // {/* {fmt({ id: "Investors" })} */}

    return (
        <Section>
            <Title>
                How to use dForce
            </Title>
            <List>
                {/* <Item>
                    <Icon src={Multi}></Icon>
                    <ItemRight>
                        <SubTitle>Stablecoins</SubTitle>
                        <Para>
                            Over-collateralized stablecoins minted against a variety of interest-carrying collaterals, tracking the price of different fiat currencies.
                        </Para>
                    </ItemRight>
                </Item> */}
                <Item>
                    <Icon src={Multi}></Icon>
                    <ItemRight>
                        <SubTitle>USX</SubTitle>
                        <Para>
                            An over-collateralized stablecoin with a dual model for minting (pool-based & vault-based).
                        </Para>
                    </ItemRight>
                </Item>

                <Item>
                    <Icon src={Lending}></Icon>
                    <ItemRight>
                        <SubTitle>Lending</SubTitle>
                        <Para>
                            Enabling decentralized lending and borrowing through smart contracts, automating the execution on the protocol.
                        </Para>
                    </ItemRight>
                </Item>

                <Item>
                    <Icon src={Staking}></Icon>
                    <ItemRight>
                        <SubTitle>DF Staking</SubTitle>
                        <Para>
                            A hybrid staking model for DF holders to capture fee income, inflationary rewards, and ecosystem airdrop across the network.
                        </Para>
                    </ItemRight>
                </Item>

                <Item>
                    <Icon src={Trading}></Icon>
                    <ItemRight>
                        <SubTitle>Trading</SubTitle>
                        <Para>
                            Peer-to-Peer marketplace with aggregated liquidity across different platforms with the best price.
                        </Para>
                    </ItemRight>
                </Item>

                <Item>
                    <Icon src={Pos_Staking}></Icon>
                    <ItemRight>
                        <SubTitle>PoS Staking</SubTitle>
                        <Para>
                            Providing validation service in PoS networks by participating in their governance and maintaining the security of the network, further aligning DeFi infrastructure with the broader blockchain ecosystem.
                        </Para>
                        <a href='https://pos.dforce.network/' className={'proiect-link-ex'} target="_blank" rel="noopener noreferrer">
                            <img src={eco_link} alt="" />
                        </a>
                    </ItemRight>
                </Item>
            </List>
        </Section>
    )
}
const Section = styled.section`
    display:flex;
    width:1200px;
    height:auto;
    overflow: hidden;
    margin: -200px auto 0;
    flex-direction:column;
    @media (max-width: 767px) {
        width:calc(100vw - 40px);
        margin: -110px auto 0;
    }
`
const Title = styled.div`
    text-align: center;
    font-size: 54px;
    font-weight: bold;
    color: #FFFFFF;
    margin: 0 auto 86px;
    @media (max-width: 767px) {
        font-size: 24px;
        margin: 0 auto 40px;
    }
`
const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const Item = styled.li`
    width:590px;
    margin-bottom: 20px;
    padding:20px;
    display:flex;
    justify-content:space-between;
    background: linear-gradient(136deg, #0A0B1F 0%, rgba(17, 18, 43, 0.08) 100%);
    border-radius: 18px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    &:nth-child(3),&:nth-child(4){
        /* margin-bottom: 0; */
    }
    @media (max-width: 767px) {
        width:100%;
        margin-bottom: 10px;
        padding:10px;
        &:nth-child(3){
            margin-bottom: 10px;
        }
        &:nth-child(4){
            /* margin-bottom: 0; */
        }
    }
`
const Icon = styled.img`
    width:90px;
    height:90px;
    margin:0 20px 20px 0;
    @media (max-width: 767px) {
        width:45px;
        height:45px;
        margin:0 10px 10px 0;
    }
`
const ItemRight = styled.div`
    display:flex;
    flex-direction:column;

    a {
        display: flex;
        flex-direction: row-reverse;
        margin-top: 10px;
    }
`
const SubTitle = styled.div`
    font-size: 26px;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 31px;
    margin-bottom:10px;
    @media (max-width: 767px) {
        font-size: 17px;
        line-height: 20px;
    }
`
const Para = styled.div`
    max-width: 550px;
    font-size: 18px;
    font-weight: normal;
    color: #FFFFFF;
    line-height: 32px;
    opacity: 0.7;
    @media (max-width: 767px) {
        max-width: 100%;
        font-size: 12px;
        line-height: 20px;
    }
`
export default Howtouse