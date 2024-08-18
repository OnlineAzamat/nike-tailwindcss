import { headerLogo } from '../assets/images/index';
import { hamburger } from '../assets/icons/index';

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
      </nav>
    </header>
  )
}

export default Nav