// Cursor tracker
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor');
    const cursor2 = document.querySelector('.cursor2');
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
    cursor2.style.left = `${e.pageX}px`;
    cursor2.style.top = `${e.pageY}px`;
});

document.addEventListener('mousedown', () => {
    const cursor = document.querySelector('.cursor');
    const cursor2 = document.querySelector('.cursor2');
    cursor.style.transform = 'scale(0.8)';
    cursor2.style.transform = 'scale(1.2)';
});

document.addEventListener('mouseup', () => {
    const cursor = document.querySelector('.cursor');
    const cursor2 = document.querySelector('.cursor2');
    cursor.style.transform = 'scale(1)';
    cursor2.style.transform = 'scale(1)';
});

// Three.js Scene
let scene, camera, renderer, cube;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00e5ff });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    animate();
}

function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

init();
