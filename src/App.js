import React from 'react'
import Scops from './components/Scops'
import Toppings from './components/Toppings'
import Form from './components/Form'

const App = () => {
  return (
    <div>
      {/* Çeşitler */}
      <Scops/>

      {/* Toppings */}
      <Toppings/>
      {/* Form Alanı */}
      <Form/>

    </div>
  )
}

export default App