import React from 'react'

export default function HeroOne({children, hero}) {
  return (
    <header className={hero}>
      {children}
    </header >
  )
}

HeroOne.defaultProps ={
    hero:"defaultHero1"
};
