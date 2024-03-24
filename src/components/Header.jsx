//Here we are importing a CSS file as a dependency
import '../styles/Header.css';
import Nav from './Nav';

 function Header() {
   return (
    <header >
       <h1>My Portfolio</h1>
       <Nav />
    </header>
   );
 }

 export default Header;
