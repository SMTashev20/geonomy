import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Globe } from './components/Globe';
import { OrbitControls, Stars } from '@react-three/drei';
import CoordinateContext from './CoordinateContext';
import CountryDataContext from './CountryDataContext';
import { StartScreen } from './components/StartScreen';
import { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Rotate } from './components/Rotate';
import { useCountryData } from './util/countryData';
import { Position } from './components/Position';
import { Camera } from 'three';
import { PositionCamera } from './components/PositionCamera';

function App() {
  const [coordinate, setCoordinate] = useState([-1, -1]);
  const [loading, loadingStatus, error, data] = useCountryData('https://datahub.io/core/geo-countries/r/countries.geojson');

  const globeRef = useRef();
  
  return (
    <Canvas style={{
      position: "absolute",
      top: "0px",
      bottom: "0px",
      width: "100%",
      height: "100%"
    }}>
      <color attach="background" args={["black"]} />
      <ambientLight color={[0.25, 0.25, 0.25]} />
      <pointLight position={[8, 8, 8]} />
      <Stars />
      
      <CountryDataContext.Provider
        value={{
          loading,
          loadingStatus,
          error,
          data
        }}
      >
        <CoordinateContext.Provider
          value={{
            coordinate,
            setCoordinate
          }}
        >
          {loading ? null :
            <Globe
              position={[0, 0, 0]}
              scale={0.6}
              ref={globeRef}
            />
          }

          <BrowserRouter>
            <Routes>
              <Route path="/" element={<>
                <StartScreen />
                <Rotate refToRotate={globeRef} xAxis yAxis negative speed={0.001} />
                <Position refToPosition={globeRef} position={[0, 0, -3]} />
                <PositionCamera position={[0, 0, 5]} rotation={[0, 0, 0]} />
              </>} />
              <Route path="/start" element={<>
                <OrbitControls minDistance={3} maxDistance={10} minPolarAngle={0.5} maxPolarAngle={2.2}/>
                <Position refToPosition={globeRef} position={[0, 0, 0]} />
              </>} />
            </Routes>
          </BrowserRouter>
        </CoordinateContext.Provider>
      </CountryDataContext.Provider>
    </Canvas>
  )

}

export default App
