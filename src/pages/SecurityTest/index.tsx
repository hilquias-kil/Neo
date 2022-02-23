import React from "react";

const code = `<h1>This is a html Model</h1>
<img src="" onerror="javascript:alert('você foi hakeado')" />
<p>time de produtos Pismo</p>`;

const removeJs = (code: string) => {
  return code.replaceAll("javascript", "");
};

const SecurityTest: React.FC = () => {
  return <div dangerouslySetInnerHTML={{ __html: removeJs(code) }}></div>;
};

export default SecurityTest;
