export function Footer() {
  return (
    <footer
      id="contact"
      className="text-center py-8 border-t mt-auto bg-white dark:bg-gray-900"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-6 justify-center">
          <a
            href="mailto:joaop3595@gmail.com"
            className="text-gray-600 dark:text-gray-300 hover:text-green-500 transition"
            aria-label="E-mail"
          >
            <svg className="inline mr-1 mb-1" fill="none" width={22} height={22} stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            E-mail
          </a>
          <a
            href="https://github.com/Joaopfq"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-green-500 transition"
            aria-label="GitHub"
          >
            <svg className="inline mr-1 mb-1" width={22} height={22} fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.42 7.86 10.96.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2.01-3.2.7-3.88-1.54-3.88-1.54-.52-1.32-1.26-1.67-1.26-1.67-1.03-.71.08-.7.08-.7 1.14.08 1.74 1.18 1.74 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.69 0-1.26.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18A11.07 11.07 0 0112 6.84c.98.01 1.97.13 2.89.37 2.2-1.5 3.17-1.18 3.17-1.18.62 1.58.23 2.75.12 3.04.74.8 1.18 1.82 1.18 3.08 0 4.42-2.7 5.39-5.27 5.68.41.36.77 1.08.77 2.18 0 1.57-.01 2.84-.01 3.22 0 .31.21.68.8.56C20.71 21.44 24 17.12 24 12.02 24 5.74 18.27.5 12 .5z"/>
            </svg>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jo%C3%A3o-paulo-freitas-queiroz-345439212/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-green-500 transition"
            aria-label="LinkedIn"
          >
            <svg className="inline mr-1 mb-1" width={22} height={22} fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.5 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm15 10.28h-3v-4.5c0-1.07-.02-2.43-1.48-2.43-1.48 0-1.71 1.16-1.71 2.36v4.57h-3v-9h2.89v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v4.74z"/>
            </svg>
            LinkedIn
          </a>
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          <span>
            Localização: Brasil &nbsp;|&nbsp; Feito com <span className="text-green-500">React</span> & <span className="text-cyan-500">Tailwind CSS</span>
          </span>
        </div>
        <p className="text-xs text-gray-400 mt-3">
          © {new Date().getFullYear()} João Paulo. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}