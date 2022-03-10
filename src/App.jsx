import { Canvas } from '@react-three/fiber';
import { Globe } from './components/Globe';
import { OrbitControls, Stars, Text, GradientTexture } from '@react-three/drei';
import { Html } from '@react-three/drei';
import CoordinateContext from './CoordinateContext';
import { Suspense } from 'react'; 

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

        <Suspense fallback={null}>
          <Text 
        position={[0, 0, 3]}
            color={'#8A4ADD'}
            // outlineWidth={0.01}
            // outlineColor={'#8A4ADD'}
            font="./fonts/JosefinSans-Bold.woff"
            fontSize={1}
      >
            <meshBasicMaterial>
              <GradientTexture stops={[0, 1]} colors={['#fff', '#8A4ADD']} size={100}/>
            </meshBasicMaterial>
            GEONOMY
          </Text>
          
          <Text
            position={[0, -0.5, 3]}
            font="./fonts/Raleway-SemiBold.woff"
            fontSize={0.2}
          >
            <meshBasicMaterial/>
            The world is in your hands!
          </Text>
          
        </Suspense>
      
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
