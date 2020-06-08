import React from 'react'
import Sidebar from './Sidebar'

const items = [
  { name: 'home', label: 'Home' },
  {
    name: 'logs',
    label: 'Logs',
    items: [{ name: 'input', label: 'Input logs' }],
  },
  {
    name: 'analyzer',
    label: 'Analyzer',
    items: [{ name: 'results', label: 'Results' }],
  },
  {
    name: 'about',
    label: 'About',
    items: [
      { name: 'userguide', label: 'Userguide' },
      { name: 'techinfo', label: 'Technical information' },
    ]
  }
]

function App() {
  return (
    <div>
      <Sidebar items={items} />
    </div>
  )
}

export default App