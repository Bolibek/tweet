import React from 'react';

export default function Footer() {
  return (
    <footer className="page-footer">
      <div className="footer-copyright">
        <div className="container left">
          © {new Date().getFullYear()} Copyright Text
          <a className="grey-text text-lighten-4 right" href="#">Twitter</a>
        </div>
      </div>
    </footer>
  )
}
