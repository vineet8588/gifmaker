// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".App {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.head {\n    font-family:fantasy;\n    font-size: 200%;\n}\n\nbody {\nbackground-color: #282c34;\nfont-size: calc(10px + 2vmin);\ncolor: white;\nfont-family: Arial, Helvetica, sans-serif;\n}\n\ninput {\nborder: none;\ncolor: white;\npadding: 12px 30px;\nfont-size: 16px;\n}\n\n/* Style buttons */\n.downloadBtn {\nbackground-color: green;\nborder: none;\ncolor: white;\npadding: 12px 30px;\ncursor: pointer;\nfont-size: 20px;\nmargin:8px;\ntext-decoration: none;\n}\n\n/* Darker background on mouse-over */\n.downloadBtn:hover {\nbackground-color: #016101;\n}\n\n.convertBtn {\nbackground-color: DodgerBlue;\nborder: none;\ncolor: white;\npadding: 12px 30px;\ncursor: pointer;\nfont-size: 20px;\nmargin:8px;\n}\n\n/* Darker background on mouse-over */\n.convertBtn:hover {\nbackground-color: RoyalBlue;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}