import { LiaLinkedin } from 'react-icons/lia';
import HeroImg from '../assets/hero.png'
import { AiOutlineLinkedin,AiOutlineGithub,AiOutlineMail } from "react-icons/ai";
export default function Hero()

{
    const config={
        subtitle:'I am a full stack developer',
        social:{
            linkedin:'https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit',
            github:'https://github.com/Sanjay-05?tab=repositories',
            mail:'https://mail.google.com/mail/u/0/#inbox'

        }
    }
    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
        <div className='md:w-1/2 flex-col'>
            <h1 className=' text-white text-6xl font-hero-font'>Hi,<br />Im Sanjay
            <p className='text-2xl'>{config.subtitle}</p></h1>

            <div className='flex py-10'>
                <a href={config.social.linkedin} className='pr-5 hover:text-white'><AiOutlineLinkedin size={40}/></a>
                <a href={config.social.github} className='pr-5 hover:text-white'><AiOutlineGithub  size={40}/></a>
                <a href={config.social.mail} className='hover:text-white'><AiOutlineMail  size={40}/></a>

                
            </div>
        </div>
        
        <img src={HeroImg} className='md:w-1/3' />
    </section>
}