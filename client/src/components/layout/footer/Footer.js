import React from 'react'
import { GitHubIcon, WhatsAppIcon, LinkedInIcon, EmailIcon } from '../../material-ui/material-ui'

const Footer = () => {
    return (
   
            <div style={{ minHeight: '100vh', position: 'relative', marginTop:'5rem' }}>
                <footer className='footer'>
        
                    
                   
                    <div className='footer__media'>
                        
                        <a href="https://api.whatsapp.com/send?phone=21988749262&text=Send%20me%20a%20message!" 
                        target="_blank"
                        >
                            <WhatsAppIcon style={{ cursor: 'pointer', color: '#fff'}} 
                            fontSize="large" />
                        </a>
                        <a href="https://www.linkedin.com/in/jo%C3%A3o-vitor-alves-estrella-b3a74815a/" 
                        target="_blank"
                        >
                            <LinkedInIcon style={{ cursor: 'pointer', color: '#fff'}} 
                            fontSize="large" />
                        </a>
                        <a href="https://github.com/joaovitor2614" 
                        target="_blank"
                        >
                            <GitHubIcon style={{ cursor: 'pointer', color: '#fff'}} 
                            fontSize="large" />
                        </a>
                        
                 
                    </div>
                    <div>
                        Desenvolvido por João Vitor Alves Estrella
                    </div>
                </footer>
            </div>
    
    )
}

export default Footer
