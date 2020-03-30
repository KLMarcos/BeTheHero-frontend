import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'
import { ThemeContext } from 'styled-components'
import swal from 'sweetalert'

import api from './../../services/api'

import { BackLink, MainButton } from '../../components/SharedComponents'
import { LogonContainer } from './style'
import HeroesImage from '../../assets/heroes.png'
import Loading from '../../assets/infinity.svg'

export default function Logon() {
  const [id, setId] = useState('')
  const [loading, setLoading] = useState(false)

  const themeContext = useContext(ThemeContext)
  const history = useHistory()

  async function handleLogin(e) {
    e.preventDefault()
    setLoading(true)

    try {
      const {
        data: { name: ongName },
      } = await api.post('sessions', { id })

      localStorage.setItem('ongId', id)
      localStorage.setItem('ongName', ongName)

      setLoading(false)
      history.push('/profile')
    } catch (error) {
      swal('Erro!', 'Falha no login, tente novamente.', 'error')
      setLoading(false)
    }
  }

  return (
    <LogonContainer>
      <section className="form">
        <img alt="Be The Hero" src={themeContext.images.LogoImage} />

        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>
          <input
            type="text"
            placeholder="Seu ID"
            value={id}
            disabled={loading}
            onChange={e => setId(e.target.value)}
          />
          <MainButton disabled={loading} type="submit">
            {loading ? <img src={Loading} alt="Loading" /> : 'Entrar'}
          </MainButton>

          <BackLink to="/register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </BackLink>
        </form>
      </section>

      <img className="heroes-img" src={HeroesImage} alt="Heroes" />
    </LogonContainer>
  )
}
