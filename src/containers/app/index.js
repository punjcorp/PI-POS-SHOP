import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import UserManagement from '../UserManagement'
const App = () => (
    <div>
        <header>

            <Link to="/">Home--</Link>
            <Link to="/about-us">About</Link>
            <Link to="/UserManagement">User Management</Link>
        </header>

        <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/about-us" component={About} />
            <Route exact path="/UserManagement" component={UserManagement} />
        </main>
    </div>
)

export default App