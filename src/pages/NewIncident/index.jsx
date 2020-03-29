import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { ThemeContext } from 'styled-components'
import swal from 'sweetalert'

import api from './../../services/api'

import { BackLink, MainButton } from '../../components/SharedComponents'
import { NewIncidentContainer, FormContainer } from './style'

export default function NewIncident() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')

  const ongId = localStorage.getItem('ongId')
  const themeContext = useContext(ThemeContext)
  const history = useHistory()

  async function handleNewIncident(e) {
    e.preventDefault()

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

      history.push('/profile')
    } catch (error) {
      swal('Erro!', 'Erro ao cadastrar novo caso, tente novamente.', 'error')
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
            type="text"
            placeholder="Título do caso"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Valor em reais"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <MainButton type="submit">Cadastrar</MainButton>
        </form>
      </FormContainer>
    </NewIncidentContainer>
  )
}
