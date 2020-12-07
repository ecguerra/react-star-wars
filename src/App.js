import {Route} from 'react-router-dom'

import Home from './components/Home'
import StarshipLink from './components/StarshipLink'
import StarshipPage from './components/StarshipPage'
import Layout from './components/common/Layout'

function App() {
  return (
    <>
      <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/starships' component={StarshipLink} />
        <Route path='/starships/:id' render={({location}) => 
        <StarshipPage location={location} />}/>
      </Layout>
    </>
  )
}

export default App
