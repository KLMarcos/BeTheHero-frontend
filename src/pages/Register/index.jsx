import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { ThemeContext } from 'styled-components'
import swal from 'sweetalert'

import api from './../../services/api'

import { BackLink, MainButton } from '../../components/SharedComponents'
import { FormContainer, RegisterContainer } from './style'
import Loading from '../../assets/infinity.svg'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [city, setCity] = useState('')
  const [uf, setUf] = useState('')
  const [loading, setLoading] = useState(false)

  const themeContext = useContext(ThemeContext)
  const history = useHistory()

  async function handleRegister(e) {
    e.preventDefault()
    setLoading(true)

    const data = {
      email,
      name,
      whatsapp,
      city,
      uf,
    }

    try {
      const {
        data: { id },
      } = await api.post('ongs', data)

      swal({
        title: 'Cadastrado com sucesso!',
        text: `Sua ong foi cadastrada com o Id ${id}`,
        icon: 'success',
        button: 'Copiar',
      }).then(value => {
        if (value) {
          try {
            navigator.clipboard.writeText(id)
          } catch (error) {}
        }

        history.push('/')
      })

      setLoading(false)
    } catch (error) {
      swal({
        title: 'Erro!',
        text: 'Erro no cadastro, tente novamente.',
        icon: 'error',
        button: 'Ok',
      })

      setLoading(false)
    }
  }

  return (
    <RegisterContainer>
      <FormContainer>
        <section>
          <img alt="Be The Hero" src={themeContext.images.LogoImage} />

          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrar
            casos da sua ONG.
          </p>

          <BackLink to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Já tenho cadastro
          </BackLink>
        </section>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Nome da ONG"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="email"
            name=""
            id=""
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Whatsapp"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />

          <div className="input-group">
            <input
              type="text"
              placeholder="Cidade"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <input
              type="text"
              placeholder="UF"
              style={{ width: 80 }}
              value={uf}
              onChange={e => setUf(e.target.value)}
            />
          </div>

          <MainButton disabled={loading} type="submit">
            {loading ? <img src={Loading} alt="Loading" /> : 'Cadastrar'}
          </MainButton>
        </form>
      </FormContainer>
    </RegisterContainer>
  )
}
