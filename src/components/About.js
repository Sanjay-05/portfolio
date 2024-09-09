import AboutImg from '../assets/about.png'

export default function About()
{
    const config={
        line1:"Hello, my name is Sanjay C. I graduated in 2024 with  Bachelor of Engineering in Computer Science from Unnamalai Institute of Technology, Kovilpatti.",
        line2:"I have a strong foundation in web development with skills in HTML, CSS, JavaScript, and frameworks like React.js and Django. I am also proficient in Python for software development and have experience working with databases such as MySQL.",
        line3:""
    }
    return <section id='about'className='flex flex-col md:flex-row bg-secondary px-5'> 
        <div className=' py-5 md:w-1/2'>
            <img src={AboutImg}></img>
        </div>
        <div className='w-1/2 flex justify-center text-white'>
        <div className='flex flex-col justify-center'>
        <h1 className='text-4xl border-b-4  border-primary mb-5 w-[160px] font-bold'> About Me</h1>
        <p className='pb-5'>{config.line1}</p>
        <p>{config.line2}</p>
        </div>

            
        </div>
    </section>
}