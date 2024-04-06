import logo from './logo.svg'
import './App.css';
import { Button } from '@relume_io/relume-ui';
import { Header1 } from './Header1';
import { defaultProps } from './Header1';
import { Navbar1,Navbar1Defaults} from './Nav';
import { Pricing17,Pricing17Defaults } from './Pricing';
import { Blog44,Blog44Defaults } from './Cards';
import { Faq1, Faq1Defaults } from './Faq';
import { Contact6, Contact6Defaults } from './Contact';
import { Footer2, Footer2Defaults } from './Footer';


export default function App(){


  return (
    <>
      <Navbar1 {...Navbar1Defaults} />
      <Header1 {...defaultProps} />
      <Blog44 {...Blog44Defaults}/>
      <Pricing17 {...Pricing17Defaults} />
      <Faq1 {...Faq1Defaults} />
      <Contact6 {...Contact6Defaults} /> 
      <Footer2 {...Footer2Defaults} /> 
    </>
  )
}
