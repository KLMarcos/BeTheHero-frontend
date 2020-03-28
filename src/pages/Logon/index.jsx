import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import api from './../../services/api'

import HeroesImage from '../../assets/heroes.png'
import LogoImage from '../../assets/logo.svg'
import './style.css'

export default function Logon() {
  const [id, setId] = useState('')

  const history = useHistory()

  async function handleLogin(e) {
    e.preventDefault()

    try {
      const {
        data: { name: ongName },
      } = await api.post('sessions', { id })

      localStorage.setItem('ongId', id)
      localStorage.setItem('ongName', ongName)

      history.push('/profile')
    } catch (error) {
      alert('falha no login, tente novamente')
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={LogoImage} alt="Be The Hero" />

        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>
          <input
            type="text"
            placeholder="Sua ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <button className="button" type="submit">
            Entrar
          </button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={HeroesImage} alt="Heroes" />
    </div>
  )
}
