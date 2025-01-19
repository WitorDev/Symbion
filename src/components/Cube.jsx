import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import { SphereGeometry } from 'three';

export default function Cube({ scaling, color }) {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001;
      meshRef.current.rotation.z += 0.001;
      
      if (scaling & meshRef.current.scale.x < 2.5){
          meshRef.current.scale.x += 0.08;
          meshRef.current.scale.y += 0.08;
          meshRef.current.scale.z += 0.08;
      } else {
          if(scaling == false & meshRef.current.scale.x > 2) {
              meshRef.current.scale.x -= 0.04;
              meshRef.current.scale.y -= 0.04;
              meshRef.current.scale.z -= 0.04;
          }
      }
    }
  });

  return (
      <mesh scale={2} ref={meshRef}>
        {scaling ? <sphereGeometry /> : <torusGeometry />}
        <meshStandardMaterial color={color} wireframe={true} />
      </mesh>
  );
}
