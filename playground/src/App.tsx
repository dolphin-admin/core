import './App.css'

import { BrowserUtils, TimeUtils } from '@dolphin-admin/utils'

import viteLogo from '/vite.svg'

import reactLogo from './assets/react.svg'

function App() {
  return (
    <>
      <div>
        <a
          href="https://vitejs.dev"
          target="_blank"
        >
          <img
            src={viteLogo}
            className="logo"
            alt="Vite logo"
          />
        </a>
        <a
          href="https://react.dev"
          target="_blank"
        >
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => BrowserUtils.openNewWindow('https://dolphin-admin.bit-ocean.studio')}
        >
          Click me!
        </button>
      </div>
      <p className="read-the-docs">This is a playground for Dolphin Admin Core.</p>
      {TimeUtils.formatTime(Date.now(), 'YYYY/MM/DD HH:mm:ss')}
    </>
  )
}

export default App
