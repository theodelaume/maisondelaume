import { useState } from 'react'
import './App.css' // si tu veux garder le CSS de base

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-stone-50 p-4">
      <header className="bg-white shadow p-4 mb-4">
        <h1 className="text-2xl font-bold text-orange-500">Maison Delaume</h1>
      </header>

      <main>
        <h2 className="text-xl font-semibold mb-2">Bienvenue sur ton site !</h2>
        <p className="mb-4">Mon site est en ligne grâce à GitHub Pages !</p>

        <div className="card p-4 bg-white rounded shadow">
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
          >
            count is {count}
          </button>
        </div>
      </main>
    </div>
  )
}

export default App
