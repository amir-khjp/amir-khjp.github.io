import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = canvas.parentElement;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = container.clientWidth;
    let height = container.clientHeight;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
    camera.position.z = 60;

    const COUNT = window.innerWidth < 700 ? 80 : 170;
    const RANGE = 70;
    const positions = new Float32Array(COUNT * 3);
    const velocities = [];
    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * RANGE * 2;
      positions[i * 3 + 1] = (Math.random() - 0.5) * RANGE;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;
      velocities.push({
        x: (Math.random() - 0.5) * 0.03,
        y: (Math.random() - 0.5) * 0.03,
        z: (Math.random() - 0.5) * 0.015,
      });
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const points = new THREE.Points(geometry, new THREE.PointsMaterial({
      color: 0xc9a86a, size: 1.1, transparent: true, opacity: 0.85, sizeAttenuation: true,
    }));
    scene.add(points);

    const maxLines = COUNT * 6;
    const linePositions = new Float32Array(maxLines * 2 * 3);
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    const lines = new THREE.LineSegments(lineGeometry, new THREE.LineBasicMaterial({
      color: 0xc9a86a, transparent: true, opacity: 0.12,
    }));
    scene.add(lines);

    const LINK_DIST = 13;
    let targetRotX = 0, targetRotY = 0;

    const onMouseMove = (e) => {
      targetRotY = ((e.clientX / window.innerWidth) * 2 - 1) * 0.25;
      targetRotX = -((e.clientY / window.innerHeight) * 2 - 1) * 0.15;
    };
    window.addEventListener('mousemove', onMouseMove);

    const onResize = () => {
      width = container.clientWidth; height = container.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', onResize);

    let frameId;
    let visible = true;
    const io = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }, { threshold: 0.05 });
    io.observe(container);

    function animate() {
      frameId = requestAnimationFrame(animate);
      if (!visible) return;
      if (!reduced) {
        const pos = geometry.attributes.position.array;
        for (let i = 0; i < COUNT; i++) {
          pos[i * 3] += velocities[i].x;
          pos[i * 3 + 1] += velocities[i].y;
          pos[i * 3 + 2] += velocities[i].z;
          if (Math.abs(pos[i * 3]) > RANGE) velocities[i].x *= -1;
          if (Math.abs(pos[i * 3 + 1]) > RANGE / 1.4) velocities[i].y *= -1;
          if (Math.abs(pos[i * 3 + 2]) > 20) velocities[i].z *= -1;
        }
        geometry.attributes.position.needsUpdate = true;

        let idx = 0;
        for (let i = 0; i < COUNT && idx < maxLines; i++) {
          for (let j = i + 1; j < COUNT && idx < maxLines; j++) {
            const dx = pos[i * 3] - pos[j * 3];
            const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
            const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
            if (dx * dx + dy * dy + dz * dz < LINK_DIST * LINK_DIST) {
              linePositions[idx * 6] = pos[i * 3];
              linePositions[idx * 6 + 1] = pos[i * 3 + 1];
              linePositions[idx * 6 + 2] = pos[i * 3 + 2];
              linePositions[idx * 6 + 3] = pos[j * 3];
              linePositions[idx * 6 + 4] = pos[j * 3 + 1];
              linePositions[idx * 6 + 5] = pos[j * 3 + 2];
              idx++;
            }
          }
        }
        lineGeometry.setDrawRange(0, idx * 2);
        lineGeometry.attributes.position.needsUpdate = true;

        scene.rotation.y += (targetRotY - scene.rotation.y) * 0.03;
        scene.rotation.x += (targetRotX - scene.rotation.x) * 0.03;
        scene.rotation.z += 0.0006;
      }
      renderer.render(scene, camera);
    }
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      io.disconnect();
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      geometry.dispose();
      lineGeometry.dispose();
      points.material.dispose();
      lines.material.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-canvas" />;
}
