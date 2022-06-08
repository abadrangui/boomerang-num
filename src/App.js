import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Checkbox, Container, Slider } from '@mui/material';

import AppBackground from './components/AppBackground';
import { images } from './constants'

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 24px;
  text-transform: uppercase;
`

const Footer = styled.div`
  bottom: 16px;
  font-size: 12px;
  padding: 0 12px;
  color: #2e2e2e;
`

function App() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [auto, setAuto] = useState(true)

  useEffect(() => {

    const intervalId = setInterval(() => {
      if (auto) {
        setActiveIndex(a => (a + 1) % 60)
      }
    }, 200);

    return () => {
      clearInterval(intervalId)
    }

  }, [auto])

  return (
    <AppBackground>
      <Container
        maxWidth="lg"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Title>Boomerang🪃</Title>
        {images[activeIndex % 60]}

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start'
          }}>
          <Checkbox
            size="medium"
            checked={auto}
            onChange={(e, c) => { setAuto(c) }}
          />

          Auto
        </div>
        <div
          style={{
            width: '100%',
            maxWidth: 600,
          }}
        >
          <Slider
            value={activeIndex}
            min={1}
            max={60}
            onChange={(e, v) => setActiveIndex(v)}
            disabled={auto}
          />
        </div>
        <Footer>Энэхүү веб сайтыг Ш.Мөнхжаргал багшийн Инженерийн физик хичээл дээр бүүмэрангийн хөдөлгөөнийг нарийн ажиглахад зориулан гүйцэтгэв.</Footer>
      </Container>
    </AppBackground >
  );
}

export default App;
