import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-text footer-links">
        <p>
          Made with{' '}
          <span role="img" aria-label="hotdog">
            🌭
          </span>{' '}
          by{' '}
          <a
            href="https://github.com/melancholy14/mybeer/issues"
            target="_blank"
            rel="noopener noreferrer"
          >
            Melancholy14
          </a>
          . Licensed under the MIT License. Referenced by{' '}
          <a
            href="https://data.opendatasoft.com/explore/dataset/open-beer-database%40public-us/information"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://data.opendatasoft.com/explore/dataset/open-beer-database%40public-us/information
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
