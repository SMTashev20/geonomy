import { Canvas } from '@react-three/fiber';
import { Globe } from './components/Globe';
import { CameraController } from './components/CameraController';

function App() {
  return (
    <Canvas style={{
      position: "absolute",
      top: "0px",
      bottom: "0px",
      width: "100%",
      height: "100%"
    }}>
      <CameraController />
      <ambientLight />
      <pointLight position={[5, 5, 5]} />
      <Globe
        position={[0, 0, 0]}
        scale={0.6}
      />
    </Canvas>
  )
}

export default App
