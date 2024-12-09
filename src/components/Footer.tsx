const Footer = () => {
    return (
      <footer className="bg-[#044E83] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p>Email: your.email@example.com</p>
              <p>Phone: +1 234 567 8900</p>
            </div>
  
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul>
                <li className="mb-2"><a href="#" className="hover:text-gray-300">Home</a></li>
                <li className="mb-2"><a href="#" className="hover:text-gray-300">About</a></li>
                <li className="mb-2"><a href="#" className="hover:text-gray-300">Projects</a></li>
                <li className="mb-2"><a href="#" className="hover:text-gray-300">Contact</a></li>
              </ul>
            </div>
  
            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-300">LinkedIn</a>
                <a href="#" className="hover:text-gray-300">GitHub</a>
                <a href="#" className="hover:text-gray-300">Twitter</a>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8 pt-8 border-t border-white/10">
            <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  