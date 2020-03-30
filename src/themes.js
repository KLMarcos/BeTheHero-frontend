import LogoLight from './assets/logoLight.svg'
import LogoDark from './assets/logoDark.svg'

const Light = {
  mainBackground: '#f0f0f5',
  mainText: '#303030',
  secondaryText: '#41414d',
  shadownColor: '#00000080',
  secondaryBackground: '#fff',
  inputBorder: '#dcdce6',
  inputColor: '#fff',

  images: {
    LogoImage: LogoLight,
  },
}

const Dark = {
  mainBackground: '#333333',
  mainText: '#ededed',
  secondaryText: '#bdbdbd',
  shadownColor: '#c2c2c280',
  secondaryBackground: '#1a1a1a',
  inputBorder: '#323236',
  inputColor: '#1a1a1a',

  images: {
    LogoImage: LogoDark,
  },
}

export default {
  Light,
  Dark,
}
