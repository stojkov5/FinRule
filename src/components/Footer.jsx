const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 ">
      <div className="container mx-auto mt-auto text-center">
        <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
        <p>
          Follow us on{' '}
          <a href="https://twitter.com" className="text-blue-400 hover:underline">
            Twitter
          </a>{' '}
          and{' '}
          <a href="https://facebook.com" className="text-blue-400 hover:underline">
            Facebook
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;