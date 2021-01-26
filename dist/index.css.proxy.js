// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".App {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nbody {\n  background-color: #282c34;\n  font-size: calc(10px + 2vmin);\n  color: white;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\ninput {\n  border: none;\n  color: white;\n  padding: 12px 30px;\n  font-size: 20px;\n}\n\n/* Style buttons */\n.downloadBtn {\n  background-color: green;\n  border: none;\n  color: white;\n  padding: 12px 30px;\n  cursor: pointer;\n  font-size: 20px;\n  margin:8px;\n  text-decoration: none;\n}\n\n/* Darker background on mouse-over */\n.downloadBtn:hover {\n  background-color: #016101;\n}\n\n.convertBtn {\n  background-color: DodgerBlue;\n  border: none;\n  color: white;\n  padding: 12px 30px;\n  cursor: pointer;\n  font-size: 20px;\n  margin:8px;\n}\n\n/* Darker background on mouse-over */\n.convertBtn:hover {\n  background-color: RoyalBlue;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}