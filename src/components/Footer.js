import React from 'react';
import { Button }from './Button.js';
import './Footer.css';


function Footer() {
  return (
    <div className='footer-container'>
         <section className="footer-subscription">
             <p className='footer-subscription-heading'>
                 Join the Adventure newsletter to recieve
                  our best vacation deals.
             </p>
             <p className='footer-subscription-text'>
                 You can unsubscribe at ant time.
             </p>
             <div className='input-areas'>
                 <form >
                    <input type="email" name="email" 
                        placeholder="Your Email" className="footer-input"/>
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                 </form>
             </div>
         </section>
         <div class='footer-links'>
            <div className='footer-link-wrapper'>
                <div class='footer-link-items'>
                    <h2>About Us</h2>
                    <a href='/sign-up'>How it works</a>
                    <a href='/'>Testimonials</a>
                    <a href='/'>Careers</a>
                    <a href='/'>Investors</a>
                    <a href='/'>Terms of Service</a>
                </div>
                <div class='footer-link-items'>
                    <h2>Contact Us</h2>
                    <a href='/'>Contact</a>
                    <a href='/'>Support</a>
                    <a href='/'>Destinations</a>
                    <a href='/'>Sponsorships</a>
                </div>
            </div>
            <div className='footer-link-wrapper'>
                <div class='footer-link-items'>
                    <h2>Videos</h2>
                    <a href='/'>Submit Video</a>
                    <a href='/'>Ambassadors</a>
                    <a href='/'>Agency</a>
                    <a href='/'>Influencer</a>
                </div>
                <div class='footer-link-items'>
                    <h2>Social Media</h2>
                    <a href='/'>Instagram</a>
                    <a href='/'>Facebook</a>
                    <a href='/'>Youtube</a>
                    <a href='/'>Twitter</a>
                </div>
            </div>
        </div>
        <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='footer-logo'>
                    <a href='/' className='social-logo'>
                        JrSounds <i className='fab fa-typo3'/>
                    </a>
                </div>
                <small className='website-rights'>JR @ 2022</small>
                <div className='social-icons'>
                    <a 
                    className='social-icon-link facebook'
                    href='/'
                    target='_blank'
                    aria-label='Facebook'    
                    >
                        <i className='fab fa-facebook-f' />
                    </a>
                    <a 
                    className='social-icon-link instagram'
                    href='/'
                    target='_blank'
                    aria-label='Instagram'    
                    >
                        <i className='fab fa-instagram' />
                    </a>
                    <a
                    class='social-icon-link youtube'
                    href='/'
                    target='_blank'
                    aria-label='Youtube'
                    >
                    <i class='fab fa-youtube' />
                    </a>
                    <a
                    class='social-icon-link twitter'
                    href='/'
                    target='_blank'
                    aria-label='Twitter'
                    >
                    <i class='fab fa-twitter' />
                    </a>
                    <a
                    class='social-icon-link twitter'
                    href='/'
                    target='_blank'
                    aria-label='LinkedIn'
                    >
                    <i class='fab fa-linkedin' />
                    </a>
                </div>
            </div>
        </section>  
    </div>
  );
}

export default Footer;