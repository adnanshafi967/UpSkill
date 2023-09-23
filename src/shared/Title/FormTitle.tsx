import React, { FC } from 'react'

interface TitleProps {
  className?: string;
  title: string
}

const FormTitle: FC<TitleProps> = ({ className = "", title = "" }) => {
  return (
    <>
      <h1 className={`font-bold text-primary text-lg mt-5 ${className}`}>{title}</h1>
    </>
  )
}

export default FormTitle