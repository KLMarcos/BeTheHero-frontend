import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { ThemeContext } from 'styled-components'
import swal from 'sweetalert'

import api from './../../services/api'

import { BackLink, MainButton } from '../../components/SharedComponents'
import { NewIncidentContainer, FormContainer } from './style'
import Loading from '../../assets/infinity.svg'

export default function NewIncident() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(false)

  const ongId = localStorage.getItem('ongId')
  const themeContext = useContext(ThemeContext)
  const history = useHistory()

  async function handleNewIncident(e) {
    e.preventDefault()
    setLoading(true)

    const data = {
      title,
      description,
      value,
    }

    try {
      api.post('incidents', data, {
        headers: { Authorization: ongId },
      })

      swal('Sucesso!', 'Caso cadastrado com sucesso!', 'success').then(() =>
        history.push('/profile'),
      )

      setLoading(false)

      history.push('/profile')
    } catch (error) {
      swal('Erro!', 'Erro ao cadastrar novo caso, tente novamente.', 'error')

      setLoading(false)
    }
  }

  return (
    <NewIncidentContainer>
      <FormContainer>
        <section>
          <img alt="Be The Hero" src={themeContext.images.LogoImage} />

          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>

          <BackLink to="/profile">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para home
          </BackLink>
        </section>
        <form onSubmit={handleNewIncident}>
          <input
            disabled={loading}
            type="text"
            placeholder="Título do caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            disabled={loading}
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input
            disabled={loading}
            type="text"
            placeholder="Valor em reais"
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          <MainButton disabled={loading} type="submit">
            {loading ? <img src={Loading} alt="Loading" /> : 'Cadastrar'}
          </MainButton>
        </form>
      </FormContainer>
    </NewIncidentContainer>
  )
}
