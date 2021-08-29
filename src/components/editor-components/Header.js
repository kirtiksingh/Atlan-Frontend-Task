import logo from '../../assets/logo.svg'

const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <img src={logo} width="100px" height="100%" alt="atlan logo" />
      </div>
    </div>
  )
}

export default Header