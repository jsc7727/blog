import { useEffect } from 'react';

export const useUtterances = (commentNodeId: string, theme?: string) => {
  useEffect(() => {
    const scriptParentNode = document.getElementById(commentNodeId);
    if (scriptParentNode !== null) {
      const script = document.createElement('script');
      script.src = 'https://utteranc.es/client.js';
      script.async = true;
      script.setAttribute('repo', 'jsc7727/blog');
      script.setAttribute('issue-term', 'pathname');
      script.setAttribute('label', 'comment :speech_balloon:');
      script.setAttribute('theme', theme === 'light' ? 'github-light' : 'photon-dark');
      script.setAttribute('crossorigin', 'anonymous');
      scriptParentNode.appendChild(script);
    }

    return () => {
      scriptParentNode?.firstChild && scriptParentNode.removeChild(scriptParentNode.firstChild);
    };
  }, [commentNodeId, theme]);
};
