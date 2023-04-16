import { css } from "styled-components";
import { Colors, Media } from "ui";

const H1 = css`
  font-size: 40px;
  font-weight: 600px;
  line-height: 60px;
  color: ${Colors.GRAPHITE};
  ${Media.M} {
    font-size: 32px;
  }

  ${Media.XS} {
    font-size: 28px;
  }
`;

const H2 = css`
  font-size: 24px;
  font-weight: 600px;
  line-height: 36px;
  color: ${Colors.GRAPHITE};

  ${Media.XS} {
    font-size: 20px;
  }
`;

const H3 = css`
  font-size: 20px;
  line-height: 32px;
  font-weight: 600px;
  color: ${Colors.GRAPHITE};
  ${Media.XS} {
    font-size: 18px;
  }
`;

const S1 = css`
  font-size: 18px;
  font-weight: 600px;
  line-height: 24px;
`;

const S2 = css`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
`;

const S3 = css`
  font-size: 16px;
  font-weight: 600px;
  line-height: 24px;
`;

const B1 = css`
  font-size: 16px;
  font-weight: 400px;
  color: ${Colors.GRAPHITE};
`;

export const B2 = css`
  font-size: 12px;
  font-weight: 400px;
`;

export const Typography = { H1, H2, H3, S1, S2, S3, B1, B2 };
