export type BtnType = 'success' | 'error' | 'warning' | 'info' | 'default';

export const btnTypeMap: { [key in BtnType]: { bg: string, bgHover: string, color: string } } = {
  success: {
    bg: '#36b24c',
    bgHover: '#2f9e44',
    color: '#fff',
  },
  error: {
    bg: '#D92B2F',
    bgHover: '#c92a2e',
    color: '#fff',
  },
  warning: {
    bg: '#F0721D',
    bgHover: '#e0721d',
    color: '#fff',
  },
  info: {
    bg: '#2BA9FF',
    bgHover: '#2a98ff',
    color: '#fff',
  },
  default: {
    bg: '#727BFE',
    bgHover: '#727BFE',
    color: '#fff',
  }
}
