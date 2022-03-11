import { Canvas } from '@react-three/fiber';
import { Globe } from './components/Globe';
import { OrbitControls, Stars } from '@react-three/drei';
import { Html } from '@react-three/drei';
import CoordinateContext from './CoordinateContext';
import { StartScreen } from './components/StartScreen';
import { Suspense, useState } from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';



function App() {
  const [coordinate, setCoordinate] = useState([-1, -1]);

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
      
      <CoordinateContext.Provider
        value={{
          coordinate,
          setCoordinate
        }}
      >
        <Globe
          position={[0, 0, 0]}
          scale={0.6}
        />
      </CoordinateContext.Provider>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartScreen />} />
          <Route path="/start" element={<OrbitControls minDistance={3} maxDistance={10} minPolarAngle={0.5} maxPolarAngle={2.2}/>} />
        </Routes>
      </BrowserRouter>
    </Canvas>
  )

}

export default App
