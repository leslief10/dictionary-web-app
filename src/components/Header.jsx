import logoIcon from '../assets/images/logo.svg';
import { ToggleButton } from './header/ToggleButton';

const Header = () => {
  return (
    <div className="flex flex-row p-6 md:px-10 md:pt-15 justify-between md:min-w-3xl md:max-w-3xl">
      <img src={logoIcon} alt="Dictionary app logo" className="w-7 h-7" />
      <div>
        <ToggleButton />
      </div>
    </div>
  );
};

export { Header };
