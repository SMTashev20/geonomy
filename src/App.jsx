import { Canvas } from '@react-three/fiber';
import { Globe } from './components/Globe';
import { OrbitControls, Stars, Plane } from '@react-three/drei';
import { Html } from '@react-three/drei';
import CoordinateContext from './CoordinateContext';

function App() {
  return (
    <Canvas style={{
      position: "absolute",
      top: "0px",
      bottom: "0px",
      width: "100%",
      height: "100%"
    }}>
      <OrbitControls minDistance={3} maxDistance={10} minPolarAngle={0.5} maxPolarAngle={2.2}/>
      <color attach="background" args={["black"]} />
      <ambientLight color={[0.25, 0.25, 0.25]} />
      <pointLight position={[8, 8, 8]} />

      <Html
        as='div'
        occlude
        center
        transform
        position={[0, 0, 3]}
      >
        <h1 style={{color: "white"}}>Geonomy</h1>
      </Html>
      
      <Stars />
      <CoordinateContext.Provider
        value={{
          available: false,
          coordinates: [ 0.0, 0.0 ]
        }}
      >
        <Globe
          position={[0, 0, 0]}
          scale={0.6}
        />
      </CoordinateContext.Provider>
      
    </Canvas>
  )
}

export default App
