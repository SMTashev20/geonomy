import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Globe } from './components/Globe';
import { Html, OrbitControls, Stars } from '@react-three/drei';
import CountryDataContext from './CountryDataContext';
import { StartScreen } from './components/StartScreen';
import { useEffect, useRef, useState } from 'react';
import { Switch, Router, Route, useRoute } from "wouter"
import { Rotate } from './components/Rotate';
import { useCountryData } from './util/countryData';
import { Position } from './components/Position';
import { PositionCamera } from './components/PositionCamera';
import { About } from './components/About';
import { CoordinateScreen } from './components/CoordinateScreen';
import { Information } from './components/Information';
import { TakeMeThere } from './components/TakeMeThere';
import { NotRoute } from './components/NotRoute';

/**
 * mmmmmmmmmmm
 * 
 */

function PositionLightToCamera({ lightRef }) {
  const { camera } = useThree();
  useFrame(() => {
    lightRef.current.position.set(camera.position.x, camera.position.y, camera.position.z)
  })
  return null;
}

function App() {
  const [loading, loadingStatus, error, data] = useCountryData('https://datahub.io/core/geo-countries/r/countries.geojson');

  const globeRef = useRef();
  const lightRef = useRef();
  
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
        <pointLight ref={lightRef} position={[8, 8, 8]} />
        <Stars />
        
        <PositionLightToCamera lightRef={lightRef} />

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
                scale={1}
                ref={globeRef}
              />
            }

            <NotRoute path="/">
              {loading ?
                <Html fullscreen><h1 style={{position: "absolute", color: "white", bottom: "10px", right: "10px", fontFamily: "'Raleway'"}}>{loadingStatus}</h1></Html> : null}
            </NotRoute>

            <Switch>
              <Route path="/">
                <StartScreen />
                <Rotate refToRotate={globeRef} xAxis yAxis negative speed={0.001} />
                <Position refToPosition={globeRef} position={[0, 0, -3]} />
                <PositionCamera position={[0, 0, 5]} rotation={[0, 0, 0]} />
              </Route>
              <Route path="/start">
                <OrbitControls enablePan={false} minDistance={4.5} maxDistance={10} minPolarAngle={0.5} maxPolarAngle={2.2}/>
                <Position refToPosition={globeRef} position={[0, 0, 0]} />
                <PositionCamera position={[0, 0, 5]} />
              </Route>
              <Route path="/map/:country">
                <PositionCamera position={[0, 0, 0]} />
                <TakeMeThere />
              </Route>
              <Route path="/map/:country/learn_more">
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