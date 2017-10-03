//  Make your HTML 'hot reload' using 'DefinePlugin' & 'html-loader'.
if (process.env.NODE_ENV !== 'production') {
  // index.html is relative to main.js
  require('../index.html')
}

// Require|import the CSS file from styles folder to inject it into index.html automatically.
import "../styles/main.css";

console.log('Empty');

