import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Route exact path='/' render={() => <div>start <Link to="/page1">Neste</Link></div>}/>
          <Route exact path='/page1'
                 render={() => <div>Page 1 <Link to="/">Tilbake</Link> <Link to="/page2">Neste</Link></div>}/>
          <Route exact path='/page2'
                 render={() => <div>Page 2 <Link to="/page1">Tilbake</Link> <Link to="/page3">Neste</Link></div>}/>
          <Route exact path='/page3'
                 render={() => <div>Page 3 <Link to="/page2">Tilbake</Link> <Link to="/page4">Neste</Link></div>}/>
          <Route exact path='/page4'
                 render={() => <div>Page 4 <Link to="/page3">Tilbake</Link> <Link to="/page5">Neste</Link></div>}/>
          <Route exact path='/page5' render={() => <div>Page 5 <Link to="/page4">Tilbake</Link><Link
            to="/page6">Neste</Link></div>}/>
          <Route exact path='/page6'
                 render={() => <div>Page 6 <Link to="/page5">Tilbake</Link> <Link to="/">Tilbake til start</Link>
                 </div>}/>
        </div>
      </Router>
    )
  }
}

export default App
