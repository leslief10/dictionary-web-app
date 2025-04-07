import logoIcon from '../assets/images/logo.svg';
import { ToggleButton } from './header/ToggleButton';

const Header = () => {
  return (
    <div className="flex flex-row p-6 justify-between">
      <img src={logoIcon} alt="Dictionary app logo" className="w-7 h-7" />
      <div>
        <ToggleButton />
      </div>
    </div>
  );
};

export { Header };
