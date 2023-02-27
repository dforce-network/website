import React, { useState } from 'react'
import styled from "styled-components"
import { useIntl } from "react-intl"


import Slogan from './components/Slogan'
import Howtouse from './components/Howtouse'
import Features from './components/Features'
import Sec from './components/Sec'
import Gov from './components/Gov'
import Ecosystem from './components/Ecosystem'
import Investors from './components/Investors'
import Community from './components/Community'
import Footer from './components/Footer'

import logo from 'assets/web/logo-bai.svg'
import logo_bai from 'assets/web/logo-bai.svg'
import menu from 'assets/web/menu.svg'
import close_black from 'assets/web/close.svg'
import btn_up from 'assets/web/btn-up.svg'


interface HomeProps {
  changeLanguage: (newLocale: string) => void
}


const Home: React.FC<HomeProps> = ({ changeLanguage }) => {
  const intl = useIntl()
  const fmt = intl.formatMessage
  const intl_locale = intl.locale

  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [showLanguage, setShowLanguage] = useState<boolean>(false)
  const [showAssets, setAssets] = useState<boolean>(false)
  const [showGOVERNANCE, setGOVERNANCE] = useState<boolean>(false)
  const [showFARM, setFARM] = useState<boolean>(false)



  return (
    <>
      <Slogan changeLanguage={changeLanguage} />
      <Howtouse/>
      <Features/>
      <Sec />
      <Gov />
      <Ecosystem />
      <Investors />
      <Community />
      <Footer />
    </>
  )
}
export default Home


