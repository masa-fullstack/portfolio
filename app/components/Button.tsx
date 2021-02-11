import React from 'react'

type ButtonClassName = {
  BASE: string
  BLUE: string
  WHITE: string
}

type ButtonType = keyof ButtonClassName

type Props = {
  buttonType: ButtonType
  title: string
  hrefURL: string
}

const buttonClassName: ButtonClassName = {
  BASE:
    'text-base no-underline border-2 border-blue-500 rounded-xl py-2 px-5 mx-1',
  BLUE: 'bg-blue-500 text-white',
  WHITE: 'bg-white text-blue-500',
}

const getClassName = (obj: ButtonClassName, key: ButtonType) => {
  return obj[key]
}

const Button = ({ buttonType, title, hrefURL }: Props) => {
  return (
    <a
      className={`${getClassName(buttonClassName, 'BASE')} ${getClassName(
        buttonClassName,
        buttonType
      )}`}
      href={hrefURL}
      target="_blank"
      rel="noopener noreferrer"
    >
      {title}
    </a>
  )
}

export default React.memo(Button)
