import React from 'react'
// import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl'

import en_US from 'i18n/en_US.js'
import zh_CN from 'i18n/zh_CN.js'

import Home from 'views/HomeV3'


const messages: Record<string, Record<string, string>> = {
  'en': en_US,
  'cn': zh_CN,
};
const local_lauguage = window.localStorage.getItem('lending-v3-local-language')
const initialLocale = local_lauguage || 'en';
const cache = createIntlCache();


let intl = createIntl({ locale: initialLocale, defaultLocale: 'en', messages: messages[initialLocale] }, cache);


const App: React.FC = () => {
  const [locale, setLocale] = React.useState(initialLocale);

  const changeLanguage = (newLocale: string): void => {
    intl = createIntl(
      { locale: newLocale, defaultLocale: 'en', messages: messages[newLocale] },
      cache
    );
    console.log(newLocale)
    window.localStorage.setItem('lending-v3-local-language', newLocale)
    document.documentElement.lang = newLocale;
    setLocale(newLocale);
  };


  return (
    <Router>
      <RawIntlProvider value={intl}>
        <Switch>
          <Route exact path="/">
            <Home changeLanguage={changeLanguage} />
          </Route>
        </Switch>
      </RawIntlProvider>
    </Router>
  )
}

export default App
