import { useUtterances } from 'hooks/useUtterances';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const Utterances = () => {
  const [commentNodeId, setCommentNodeId] = useState('');
  useEffect(() => setCommentNodeId('comments'), []);
  const { resolvedTheme } = useTheme();
  useUtterances(commentNodeId, resolvedTheme);
  return <section id={commentNodeId}></section>;
};

export default Utterances;
