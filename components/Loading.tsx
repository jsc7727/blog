import { ClimbingBoxLoader } from 'react-spinners';
import { css } from '@emotion/react';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Loading = () => {
  return (
    <div css={override}>
      <ClimbingBoxLoader color="#36d7b7" />;
    </div>
  );
};

export default Loading;
