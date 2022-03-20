// Importing different properties & components to be used as variables.
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

// Function that positions the scene's pointlight relative to the Earth, when the globe has been spun by the user.
function PositionLightToCamera({ lightRef }) {
  const { camera } = useThree();
  useFrame(() => {
    lightRef.current.position.set(camera.position.x, camera.position.y, camera.position.z)
  })
  return null;
}

// The App() function acts as a main function. The entirety of the website's pages are based on this function.
function App() {
  const [loading, loadingStatus, error, data] = useCountryData('https://datahub.io/core/geo-countries/r/countries.geojson');

  const globeRef = useRef();
  const lightRef = useRef();
  
  return (
    /* Styling for the main page. */
    <>
      {/* The canvas element is our entire website's base. */}
      <Canvas style={{
        position: "absolute",
        top: "0px",
        bottom: "0px",
        width: "100%",
        height: "100%"
      }}>
        {/* Initializing the scene's background color. */}
        <color attach="background" args={["#0E0034"]} />
        {/* Initializing the scene's lighting (ambient & point). */}
        <ambientLight color={"#240085"} />
        <pointLight ref={lightRef} position={[8, 8, 8]} />
        {/* Use react-three-drei's stars property to generate our shining background stars. */}
        <Stars />
        
        {/* Callign the PositionLightToCamera function as a component. */}
        <PositionLightToCamera lightRef={lightRef} />

        <CountryDataContext.Provider
          value={{
            loading,
            loadingStatus,
            error,
            data
          }}
        >

          {/* Resetting the globe's position throught our router. */}
          <Router>
            {loading ? null :
              <Globe
                position={[0, 0, 0]}
                scale={1}
                ref={globeRef}
              />
            }

            {/* Displaying the loading status. */}
            <NotRoute path="/">
              {loading ?
                <Html fullscreen><h1 style={{position: "absolute", color: "white", bottom: "10px", right: "10px", fontFamily: "'Raleway'"}}>{loadingStatus}</h1></Html> : null}
            </NotRoute>
            
            {/* Parent element for the country's population. */}
            <Switch>
              {/* Main page - Orbit Contols are locked, globe is spinning & the camera's position is set. */}
              <Route path="/">
                <StartScreen />
                <Rotate refToRotate={globeRef} xAxis yAxis negative speed={0.001} />
                <Position refToPosition={globeRef} position={[0, 0, -3]} />
                <PositionCamera position={[0, 0, 5]} rotation={[0, 0, 0]} />
              </Route>
              {/* Start page -  Orbit Controls are now available and the heading as well as the subheading are now gone*/}
              <Route path="/start">
                <OrbitControls enablePan={false} minDistance={4.5} maxDistance={10} minPolarAngle={0.5} maxPolarAngle={2.2}/>
                <Position refToPosition={globeRef} position={[0, 0, 0]} />
                <PositionCamera position={[0, 0, 5]} />
              </Route>
              {/* Take me there page - Orbit Controls are now locked again & the Take Me There assets are loaded. */}
              <Route path="/map/:country">
                <PositionCamera position={[0, 0, 0]} />
                <TakeMeThere />
              </Route>
              {/* Information page - The globe is hidden from the user & all of the Information screen assets are shown. */}
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