import React from 'react';
import {
    Nav,
    NavItem,
    NavLink,
    Navbar,
    NavbarBrand,
    Collapse,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Form,
    Input
} from 'reactstrap';

/*--------------------------------------------------------------------------------*/
/* Import images which are need for the HEADER                                    */
/*--------------------------------------------------------------------------------*/
import logodarkicon from '../../assets/images/logo-icon.png';
import logolighticon from '../../assets/images/logo-light-icon.png';
import logodarktext from '../../assets/images/logo-text.png';
import logolighttext from '../../assets/images/logo-light-text.png';
import profilephoto from '../../assets/images/users/1.jpg';

const Header = () => {

    return (
        <header className="topbar navbarbg" style={{backgroundColor:"#5c2d90", fontSize: 20}} data-navbarbg="skin4">
            <Navbar className="top-navbar" dark expand="md">
                
                   
                    <Nav className="ml-auto float-right" navbar>
                        <NavItem style={{ padding:25}}>
                           <span style={{color:'#fdca7b'}}>Hello User</span>
                        </NavItem>
                       
                            <div nav caret style={{marginTop:12,padding:4, marginRight: 8}} className="pro-pic">
                                <img
                                    src={profilephoto}
                                    alt="user"
                                    className="rounded-circle"
                                    width="37"
                                />
                            </div>
                            
                       
                       
                    </Nav>
               
            </Navbar>
        </header>
    );
}
export default Header;
