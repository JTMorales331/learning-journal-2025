import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'


export default function Footer() {
  return (
    <footer className="footer footer-center rounded py-7">
      <aside className="grid-flow-col items-center">
      <a className="btn btn-ghost text-lg">Learning Journal</a>
      </aside>
      
      <nav className="">
        <div className="grid grid-flow-col gap-4">
          <a href="#" aria-label="GitHub">
            <FaGithub size={24} />
          </a>
          <a href="#" aria-label="Facebook">
            <FaFacebook size={24} />
          </a>
          <a href="#" aria-label="LinkedIn">
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
