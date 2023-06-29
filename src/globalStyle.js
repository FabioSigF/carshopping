import styled, { createGlobalStyle, css } from "styled-components";
import { IoSpeedometerOutline, IoShieldCheckmarkOutline, IoPricetagOutline, IoHeartOutline, IoCarSportOutline, IoCarOutline, IoPeople, IoChevronUpCircleOutline, IoChevronDownCircleOutline, IoSearch, IoCalculatorOutline, IoClose, IoCalendarNumberOutline, IoChatboxEllipsesSharp, IoShareSocial, IoStar, IoChevronDown, IoChevronUp } from 'react-icons/io5'
import { FaApple, FaArrowLeft, FaArrowRight, FaBehance, FaCarSide, FaCheck, FaClock, FaEdit, FaEye, FaFacebookF, FaGooglePlay, FaHandPointUp, FaInstagram, FaLinkedin, FaRegTrashAlt, FaTrash, FaTwitter } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'
import { GiPaintBrush, GiSteeringWheel } from 'react-icons/gi'
import { RiOilLine } from 'react-icons/ri'
import { VscTools} from 'react-icons/vsc'
import { MdCreditScore } from 'react-icons/md'
import chevronDown from './assets/img/icons/chevron-down.svg'
export const colors = {
  body: '#F8F8F8',
  bodyBg: '#FFF',
  primary: '#FC0012',
  primaryLight: '#FFF2F3',
  secondary: '#111010',
  text: '#575757',
  textDark: '#111010',
  textLight: '#ffffffcc',
  titleDark: '#333',
  titleLight: '#fff',
  //accent: '#077765',
  success: '#5cc9a7',
  //info: '#50b5ff',
  warning: '#ffb116',
  danger: '#f25767',
  light: '#fff',
  dark: '#0b163f',
  link: '#FC0012',
  linkHover: '#c9000e',
  //code: '#d63384',
  //highlightBg: '#fff3cd',
  homeBgLinear: 'linear-gradient(180deg, #111010 0%, rgba(17, 16, 16, 0.81) 100%)',
  white: '#FFF',
  black: '#111010',
  lightGray: '#e8e8e8',
  gray: '#7a7a7a',
  yellow: '#FF9729'
}

export const borderRadius = {
  small: '5px',
  normal: '10px',
}

export const fontFamily = {
  sansSerif: "'Plus Jakarta Sans', sans-serif",
}

export const fontSize = {
  smallX: '.7rem',
  small: '.875rem',
  body: '1rem',
  bodyLarge: '1.25rem',
  titleSmall: '1.375rem',
  title: '2rem',
  titleLarge: '3.5rem',
}

export const transition = {
  default: '200ms ease-in-out',
}

export const pseudoElementCfg = {
  content: "''",
  display: 'block',
  position: 'absolute',
}

export const deviceSize = {
  mobileS: '320px',
  mobileM: '425px',
  mobileL: '576px',
  tablet: '768px',
  laptopS: '992px',
  laptop: '1024px',
  laptopM: '1200px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const margin = {
  mheader: `70px`,
}

export const paddingS = {
  bSection: '4rem',
}

export const iconsList = {
  speed: <IoSpeedometerOutline />,
  steeringWheel: <GiSteeringWheel />,
  oil: <RiOilLine />,
  shield: <IoShieldCheckmarkOutline />,
  priceTag: <IoPricetagOutline />,
  heart: <IoHeartOutline />,
  carSport: <IoCarSportOutline />,
  carOut: <IoCarOutline />,
  carSide: <FaCarSide />,
  calendar: <IoCalendarNumberOutline />,
  color: <GiPaintBrush />,
  chat: <IoChatboxEllipsesSharp />,
  people: <IoPeople />,
  tools: <VscTools />,
  chevronCircleUp: <IoChevronUpCircleOutline />,
  chevronCircleDown: <IoChevronDownCircleOutline />,
  chevronDown: <IoChevronDown />,
  chevronUp: <IoChevronUp />,
  phoneCall: <FiPhoneCall />,
  hand: <FaHandPointUp />,
  search: <IoSearch />,
  calculator: <IoCalculatorOutline />,
  close: <IoClose />,
  check: <FaCheck />,
  //brand
  googlePlay: <FaGooglePlay />,
  apple: <FaApple />,
  //social
  facebook: <FaFacebookF />,
  linkedin: <FaLinkedin />,
  twitter: <FaTwitter />,
  instagram: <FaInstagram />,
  behance: <FaBehance />,
  arrowRight: <FaArrowRight />,
  arrowLeft: <FaArrowLeft />,
  creditCard: <MdCreditScore />,
  eye: <FaEye />,
  clock: <FaClock />,
  share: <IoShareSocial />,
  star: <IoStar />,
  edit: <FaEdit />,
  trash: <FaRegTrashAlt />,
}

export const SectionWrapper = styled.div `
  background-color: ${props => props.sectionWhite ? 'white' : 'transparent'};
  padding-top: ${paddingS.bSection};
  padding-bottom: ${paddingS.bSection};
`

export const Container = styled.div`
    box-sizing: border-box;
    padding-left: 6%;
    padding-right: 6%;
    width: 100%;
    
    @media screen and (min-width: ${deviceSize.mobileL}) {
      padding-left: 0;
      padding-right: 0;
      max-width: 540px;
      margin: 0 auto;
    }
    @media screen and (min-width: ${deviceSize.tablet}) {
      max-width: 720px;
    }
    @media screen and (min-width: ${deviceSize.laptop}) {
      max-width: 960px;
    }
    @media screen and (min-width: ${deviceSize.laptopM}) {
      max-width: 1140px;
    }
    @media screen and (min-width: ${deviceSize.laptopL}) {
      max-width: 1320px;
    }
`

export const ErrorWarning = styled.p`
  text-align: center;
  border-radius: ${borderRadius.small};
  padding: 1rem;
  border: 1px solid ${colors.lightGray};
  color: ${colors.white};
  background-color: ${colors.danger};
`

export const SuccessWarning = styled(ErrorWarning) `
  background-color: ${colors.success};
  color: ${colors.black};
`

export const TagTitle = styled.h3`
  color: ${colors.primary};
  font-size: ${fontSize.bodyLarge};
  font-weight: 600;
`

export const Title = styled.h2`
  color: ${colors.titleDark};
  font-size: ${fontSize.titleSmall};
  line-height: calc(${fontSize.bodyLarge} + .5rem);
  font-weight: 700;

  @media screen and (min-width: ${deviceSize.laptopM}){
    font-size: ${fontSize.title};
    line-height: calc(${fontSize.title} + .5rem);
  }
`

export const HeaderCont = styled.header `
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  ${props =>
    props.alignCenter && css`
      align-items: center;
      text-align: center;
    `
  }
`

export const Description = styled.p`
  font-size: ${fontSize.body};
  line-height: calc(${fontSize.body} + .5rem);
`

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: ${fontSize.body};
    font-family: ${fontFamily.sansSerif};
    background-color: ${colors.body};
    color: ${colors.text};
  }
  button,
  input {
    background: none;
    border: none;
  }
  button {
    transition: ${transition.default};
    cursor: pointer;
    font-family: ${fontFamily.sansSerif};
  }
  select {
    font-family: ${fontFamily.sansSerif};
    appearance: none;
  }
  ul, li {
    list-style: none;
  }

  input::placeholder,
  textarea::placeholder {
    font-family: ${fontFamily.sansSerif};
    color: ${colors.lightGray};
    font-size: ${fontSize.small};
  }

  input:focus,
  textarea:focus,
  select:focus{
    outline: none;
  }

  a, 
  textarea {
    text-decoration: none;
    font-family: ${fontFamily.sansSerif};
  }
  input {
    background-color: ${colors.bodyBg};
    border-radius: ${borderRadius.small};
    border: 1px solid ${colors.lightGray};
    padding: 1rem;
  }
  select {
    border: 1px solid ${colors.lightGray};
    border-radius: ${borderRadius.small};
    color: ${colors.text};
    font-size: ${fontSize.small};
    padding: .75rem 2rem .75rem .75rem;
    background-image: url(${chevronDown});
    background-size: 14px;
    background-repeat: no-repeat;
    background-position: calc(100% - 1rem);

  }

  option {
    font-size: ${fontSize.small};

    &:disabled {
      color: ${colors.lightGray};
    }
  }

  textarea {
    background-color: ${colors.bodyBg};
    border: 1px solid ${colors.lightGray};
    border-radius: ${borderRadius.small};
    padding: 1rem;
    height: 100px;
    resize: none;
  }
`

