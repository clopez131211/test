import React from 'react'

export default function HeroTwo({children, hero}) {
  return (
    <header className={hero}>
      {children}
    </header >
  )
}

HeroTwo.defaultProps ={
    hero:"defaultHero2"
};
