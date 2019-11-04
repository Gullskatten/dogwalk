import { css } from 'styled-components';

interface IMediaQuery extends IFontSetting {
  breakpoint: number;
}

interface IFontSetting {
  weight: number;
  size: number;
  family: string;
  mediaQueries?: IMediaQuery[];
}

function createMediaQuery(mq: IMediaQuery[]) {
  if (mq) {
    return mq.map((query: IMediaQuery) => {
      return css`
        @media all and (min-width: ${query.breakpoint}px) {
          font-family: ${query.family};
          font-size: ${query.size}rem;
          font-weight: ${query.weight};
        }
      `;
    });
  }
}

export default function createFontStyles(setting: IFontSetting) {
  return css`
    font-family: ${setting.family};
    font-size: ${setting.size}rem;
    font-weight: ${setting.weight};
    ${setting.mediaQueries && createMediaQuery(setting.mediaQueries)}
  `;
}
