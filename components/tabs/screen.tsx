import {useEffect} from "react";
import * as THREE from 'three'

const Screen = () => {

   useEffect(() => {
       let camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
       camera.position.z = 0.01;

       let scene = new THREE.Scene();

       const video = document.getElementById('video');


       const geometry = new THREE.PlaneGeometry(16, 9);
       geometry.scale(0.5, 0.5, 0.5);

       let renderer = new THREE.WebGLRenderer({antialias: true});
       renderer.setPixelRatio(window.devicePixelRatio);
       renderer.setSize(window.innerWidth, window.innerHeight);
       // document.body.appendChild(renderer.domElement);

       //

       if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {

           const constraints = {video: {width: 1280, height: 720, facingMode: 'user'}};

           navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {

               // apply the stream to the video element used in the texture

               video.srcObject = stream;
               video.play();

           }).catch(function (error) {

               console.error('Unable to access the camera/webcam.', error);

           });

       } else {

           console.error('MediaDevices interface not available.');

       }

       function onWindowResize() {

           camera.aspect = window.innerWidth / window.innerHeight;
           camera.updateProjectionMatrix();

           renderer.setSize(window.innerWidth, window.innerHeight);

       }

       function animate() {

           requestAnimationFrame(animate);
           renderer.render(scene, camera);
       }
       onWindowResize()
       animate()
   }, [])

    return (<>
            <video id="video"  autoPlay playsInline></video>
    </>)
}

export default Screen