import React, { useEffect, useRef } from 'react';
import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/a11y-dark.css'; // Importa un estilo CSS para resaltar la sintaxis

// Importa los lenguajes de programación que deseas resaltar
import javascript from 'highlight.js/lib/languages/javascript';
import python from 'highlight.js/lib/languages/python';

// Registra los lenguajes de programación
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('python', python);

const CodeEditor = () => {
  const codeRef = useRef(null);

  useEffect(() => {
    if(codeRef.current)
    hljs.highlightBlock(codeRef.current);
  }, []);

  return (
    <pre>
      <code ref={codeRef} className={'javascript'}>
        {`
import React, { useEffect, useRef } from 'react';
import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/default.css'; // Importa un estilo CSS para resaltar la sintaxis

// Importa los lenguajes de programación que deseas resaltar
import javascript from 'highlight.js/lib/languages/javascript';
import python from 'highlight.js/lib/languages/python';

// Registra los lenguajes de programación
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('python', python);

const CodeEditor = () => {
  const codeRef = useRef(null);

  useEffect(() => {
    if(codeRef.current)
    hljs.highlightBlock(codeRef.current);
  }, []);

  return (
    <pre>
      <code ref={codeRef} className={'javascript'}>
        {'numeros = 10'}
      </code>
    </pre>
  );
};

export default CodeEditor;        
        `}
      </code>
    </pre>
  );
};

export default CodeEditor;
