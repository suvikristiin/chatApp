import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link'
import '../styles/Header.css'

function Header() {
  
    
return (
    <>
        <AppBar className='AppBar' style={{backgroundColor: '#008394', color: '#000'}} position="static">
            <Toolbar className='toolbar' style={{display: 'flex'}}>
                <Typography className='typography' style={{flex: 1, marginLeft: '40px', fontSize: '40px'}}>Chat Application</Typography>
                
                    <Button style={{ backgroundColor: '#fff', color: '#000', fontSize: '16px'}}> Sign Up
                        <Link></Link>
                    </Button>
                    <Button style={{ backgroundColor: '#fff', color: '#000', marginLeft: '20px', fontSize: '16px'}}> Log In
                        <Link></Link>
                    </Button>                 
            </Toolbar>
        </AppBar>
        
    </>
    )
}

export default Header;