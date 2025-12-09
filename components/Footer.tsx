export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6">
      <div className="container mx-auto text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Frontend Developer Portfolio. Built with React & Next.js
        </p>
        <div className="mt-4 flex justify-center gap-6">
          <a href="#" className="hover:text-primary transition-colors">
            GitHub
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            LinkedIn
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
