import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Globe } from './components/Globe';
import { Html, OrbitControls, Stars } from '@react-three/drei';
import CountryDataContext from './CountryDataContext';
import { StartScreen } from './components/StartScreen';
import { useRef, useState } from 'react';
import { Switch, Router, Route, useRoute } from "wouter"
import { Rotate } from './components/Rotate';
import { useCountryData } from './util/countryData';
import { Position } from './components/Position';
import { PositionCamera } from './components/PositionCamera';
import { About } from './components/About';
import { CoordinateScreen } from './components/CoordinateScreen';
import { Information } from './components/Information';

/**
 * mmmmmmmmmmm
 */
function App() {
  const [loading, loadingStatus, error, data] = useCountryData('https://datahub.io/core/geo-countries/r/countries.geojson');

  const globeRef = useRef();
  
  return (
    <>
      <Canvas style={{
        position: "absolute",
        top: "0px",
        bottom: "0px",
        width: "100%",
        height: "100%"
      }}>
        <color attach="background" args={["#0E0034"]} />
        <ambientLight color={"#240085"} />
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
          <Router>
            {loading ? null :
              <Globe
                position={[0, 0, 0]}
                scale={0.6}
                ref={globeRef}
              />
            }
            <Switch>
              <Route path="/">
                <StartScreen />
                <Rotate refToRotate={globeRef} xAxis yAxis negative speed={0.001} />
                <Position refToPosition={globeRef} position={[0, 0, -3]} />
                <PositionCamera position={[0, 0, 5]} rotation={[0, 0, 0]} />
              </Route>
              <Route path="/start">
                <OrbitControls enablePan={false} minDistance={3} maxDistance={10} minPolarAngle={0.5} maxPolarAngle={2.2}/>
                <Position refToPosition={globeRef} position={[0, 0, 0]} />
              </Route>
              <Route path="/map/:coords">
                <CoordinateScreen />
              </Route>
            </Switch>
          </Router>
        </CountryDataContext.Provider>
      </Canvas>
      {/* <About /> */}
    </>
  )

}

export default App