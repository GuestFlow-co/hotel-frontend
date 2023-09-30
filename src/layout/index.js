import React from 'react'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

function layout({children}) {
  return (
    <div>
      <Header />
      <Main>
      {children}
      </Main>
    <Footer />
    </div>
  )
}

export default layout
