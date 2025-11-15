import React from 'react'
import { Parallax ,Background  } from 'react-parallax';

export default function Museum() {
  return (
    <>
<Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={'/gallery/lion.jpg'}
        bgImageAlt="the dog"
        strength={-200}
    >
        Blur transition from min to max
        <div style={{ height: '200px' }} />
    </Parallax>
    </>

  )
}
