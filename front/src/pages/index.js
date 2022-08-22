import redirectLocale from 'nextjs-redirect-locale';
import { LocalesData } from '../components/Languages';

export default redirectLocale(Object.keys(LocalesData))