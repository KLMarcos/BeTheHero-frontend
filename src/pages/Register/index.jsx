import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import swal from 'sweetalert'
import { FiArrowLeft } from 'react-icons/fi'

import api from './../../services/api'

import LogoImage from './../../assets/logo.svg'

import './style.css'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [city, setCity] = useState('')
  const [uf, setUf] = useState('')

  const history = useHistory()

  async function handleRegister(e) {
    e.preventDefault()

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
      }).then((value) => {
        if (value) {
          navigator.clipboard.writeText(id)
        }

        history.push('/')
      })
    } catch (error) {
      swal({
        title: 'Erro!',
        text: 'Erro no cadastro, tente novamente.',
        icon: 'error',
        button: 'Ok',
      })
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={LogoImage} alt="Be The Hero" />

          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrar
            casos da sua ONG.
          </p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Já tenho cadastro
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Nome da ONG"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            name=""
            id=""
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Whatsapp"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />

          <div className="input-group">
            <input
              type="text"
              placeholder="Cidade"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              type="text"
              placeholder="UF"
              style={{ width: 80 }}
              value={uf}
              onChange={(e) => setUf(e.target.value)}
            />
          </div>

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  )
}
