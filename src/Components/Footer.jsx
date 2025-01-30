import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'


export default function Footer() {
  return (
    <footer className="footer container footer-center rounded py-7 mt-12">
      <aside className="grid-flow-col items-center">
      <a className="btn btn-ghost text-lg">Learning Journal</a>
      </aside>
      
      <nav className="">
        <div className="grid grid-flow-col gap-4">
          <a href="https://github.com/JTMorales331" aria-label="GitHub">
            <FaGithub size={24} />
          </a>
          <a href="https://www.facebook.com/john.t.morales.7" aria-label="Facebook">
            <FaFacebook size={24} />
          </a>
          <a href="https://www.linkedin.com/in/john-terence-morales-b7078a325/" aria-label="LinkedIn">
            <FaLinkedin size={24} />
          </a>
        </div>
      </nav>

      <aside className="grid-flow-col items-center">
        <p>Copyright @ {new Date().getFullYear()} - All right reserved</p>
      </aside>
    </footer>
  )
}
