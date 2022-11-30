import { ClimbingBoxLoader } from 'react-spinners';
import { css } from '@emotion/react';

const override = css`
  width: 100%;
  height: 100%;
  backdrop-filter: saturate(180%) blur(20px);
`;

const Loading = () => {
  return (
    <div css={override}>
      <ClimbingBoxLoader color="#36d7b7" />;
    </div>
  );
};

export default Loading;
