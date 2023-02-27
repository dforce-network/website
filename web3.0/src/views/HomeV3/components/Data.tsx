import React from 'react'
import { useIntl } from 'react-intl'
import styled from 'styled-components'


const Data: React.FC = () => {
    const intl = useIntl()
    const fmt = intl.formatMessage
    // {/* {fmt({ id: "Investors" })} */}

    return (
        <Section>
            <List>
                <Item>
                    <SubTitle>$338,698,275.89</SubTitle>
                    <Para>
                    Total Assets
                    </Para>
                </Item>
                <Item>
                    <SubTitle>$407,010,817.39</SubTitle>
                    <Para>
                    Total Mint
                    </Para>
                </Item>
                <Item>
                    <SubTitle>$79,532,871.86</SubTitle>
                    <Para>
                    Total Accumulated Borrowing
                    </Para>
                </Item>
                <Item>
                    <SubTitle>$902,449,290.23</SubTitle>
                    <Para>
                    Protocol Controlled Value
                    </Para>
                </Item>
                <Item>
                    <SubTitle>3.85%</SubTitle>
                    <Para>
                    Free Staking APY
                    </Para>
                </Item>
                <Item>
                    <SubTitle>5.55%</SubTitle>
                    <Para>
                    Lock-up Staking APY
                    </Para>
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
    margin: 0 auto 0;
    flex-direction:column;
    @media (max-width: 767px) {
        width: calc(100vw - 40px);
    }
`
const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
`
const Item = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:33.3%;
    margin-bottom: 97px;
    @media (max-width: 767px) {
        width: 100%;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 0;
    }
`
const SubTitle = styled.div`
    font-size: 40px;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 48px;
    margin-bottom:15px;
    @media (max-width: 767px) {
        font-size: 17px;
        line-height: 50px;
        margin-bottom: 0;
    }
`
const Para = styled.div`
    font-size: 20px;
    font-weight: normal;
    color: #FFFFFF;
    line-height: 25px;
    opacity: 0.7;
    @media (max-width: 767px) {
        font-size: 12px;
        line-height: 50px;
    }
`
export default Data