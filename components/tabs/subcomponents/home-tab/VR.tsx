import Script from "next/script";
import {useEffect} from "react";

const VR = () => {
    const htmlElement = `
    <link rel="icon" href="data:;base64,iVBORw0KGgo=">
    <script src="/static/js/aframe.min.js"></script>
    <script src="/static/js/aframe-ar.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/aframe-aabb-collider-component@3.2.0/dist/aframe-aabb-collider-component.min.js"></script>


    <body style="margin: 0px; overflow: hidden;">

        <script>
        var markerVisible = { m0: false, m1: false, m2: false, m3: false, m4: false };
        var distances = { m1: 0, m2: 0, m3: 0, m4: 0 }
        var shortestDistance = { mark: '', distance: 0 }
        var placeObject = false
        var activateSensor = {m1: false, m2: false, m3: false, m4: false };
        var shouldSensorActivate = {m1: false, m2: false, m3: false, m4: false };
        var shouldSensorActivatePreviousState = {m1: false, m2: false, m3: false, m4: false };
        var waitingToSend = false

        function calculateDistance (x1, y1, x2, y2) {
            return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
        }

        function calculateShortestDistance () {
            const arr = Object.values(distances).filter(x => x !== 0)
            if (arr.length > 0) {
                shortestDistance.distance = arr.reduce((a, b) => Math.min(Math.abs(a), Math.abs(b)))
                shortestDistance.mark = Object.keys(distances)
                    .find(x => distances[x] === shortestDistance.distance)
            }

        }

        function checkShowObject () {
            const virtualObject = document.getElementById("virtualObject")
            virtualObject.setAttribute('visible', placeObject)
        }

        function handleSensors () {
            const activeSensors = Object.keys(activateSensor).filter(x => activateSensor[x])
            const notActiveSensors = Object.keys(activateSensor).filter(x => !activateSensor[x])
            
            notActiveSensors.forEach(element => {
                document.getElementById('sensor_' + element).setAttribute('visible', false)
            })

            activeSensors.forEach(element => {
                document.getElementById('sensor_' + element).setAttribute('visible', true)
            })
        }

        function checkActiveSensors () {
            const activeSensors = Object.keys(activateSensor).filter(x => activateSensor[x])

            activeSensors.forEach(element => {
            if (element === shortestDistance.mark && shouldSensorActivate[element]) { 
                document.getElementById('sensor_' + shortestDistance.mark).setAttribute('material', 'color', 'green')
            } else {
                document.getElementById('sensor_' + element).setAttribute('material', 'color', 'red')
            }
            })
        }

        function sensorActivation(objectPoint, sensorPoint, sensor, m) {
            if(shouldSensorActivatePreviousState[sensor] !== shouldSensorActivate[sensor])
                shouldSensorActivatePreviousState[sensor] = shouldSensorActivate[sensor]

            shouldSensorActivate[sensor] = 
            Math.abs(sensorPoint.x - objectPoint.x) <= 0.5
            && shortestDistance.mark == sensor
        }

        function shouldSendData(sensor) {
            if (shouldSensorActivatePreviousState[sensor] !== shouldSensorActivate[sensor] && !waitingToSend) {
                waitingToSend = !waitingToSend
                // document.getElementById('python_button_' + sensor.replace('m', 'sensor_')).click()
            }
            setTimeout(() => {
                if (waitingToSend)
                    waitingToSend = !waitingToSend
            }, 450);
        }

        AFRAME.registerComponent('registerevents', {
            init: function () 
            {
                let marker = this.el;
                
                marker.addEventListener('markerFound', function() {
                    markerVisible[ marker.id ] = true;
                });

                marker.addEventListener('markerLost', function() {
                    markerVisible[ marker.id ] = false;
                });

                if (marker.id === 'm0')
                {
                    document.querySelector("#objekt").addEventListener("click", (e)=> {
                        placeObject = !placeObject
                        document.getElementById('python_button_sensor_1').click()
                    })
                }

                if (marker.id === 'm1')
                {
                    document.querySelector("#sensor1").addEventListener("click", (e)=> {
                        activateSensor.m1 = !activateSensor.m1
                    })
                }

                if (marker.id === 'm2')
                {
                    document.querySelector("#sensor2").addEventListener("click", (e)=> {
                        activateSensor.m2 = !activateSensor.m2
                    })
                }

                if (marker.id === 'm3')
                {
                    document.querySelector("#sensor3").addEventListener("click", (e)=> {
                        activateSensor.m3 = !activateSensor.m3
                    })
                }

                if (marker.id === 'm4')
                {
                    document.querySelector("#sensor4").addEventListener("click", (e)=> {
                        activateSensor.m4 = !activateSensor.m4
                    })
                }
            }
        });

        AFRAME.registerComponent('run', {
            init: function()
            {
                this.m0 = document.querySelector("#m0");
                this.m1 = document.querySelector("#m1");
                this.m2 = document.querySelector("#m2");
                this.m3 = document.querySelector("#m3");
                this.m4 = document.querySelector("#m4");
                this.p0 = new THREE.Vector3();
                this.p1 = new THREE.Vector3(); 
                this.p2 = new THREE.Vector3(); 
                this.p3 = new THREE.Vector3(); 
                this.p4 = new THREE.Vector3(); 
                
                this.geometry1 = new THREE.Geometry();
                this.geometry2 = new THREE.Geometry();
                this.geometry3 = new THREE.Geometry();
                this.geometry4 = new THREE.Geometry();

                this.geometry1.vertices.push( new THREE.Vector3(1, 1, 1) );
                this.geometry1.vertices.push( new THREE.Vector3( 1, 1, 1) );
                this.geometry2.vertices.push( new THREE.Vector3(-1,-1,-1) );
                this.geometry2.vertices.push( new THREE.Vector3( 1, 1, 1) );
                this.geometry3.vertices.push( new THREE.Vector3(-1,-1,-1) );
                this.geometry3.vertices.push( new THREE.Vector3( 1, 1, 1) );
                this.geometry4.vertices.push( new THREE.Vector3(-1,-1,-1) );
                this.geometry4.vertices.push( new THREE.Vector3( 1, 1, 1) );

                this.material = new THREE.LineBasicMaterial( {color: 0xFF0000} );

                this.line1 = new THREE.Line( this.geometry1, this.material );
                this.line2 = new THREE.Line( this.geometry2, this.material );
                this.line3 = new THREE.Line( this.geometry3, this.material );
                this.line4 = new THREE.Line( this.geometry4, this.material );

                let scene = document.querySelector('a-scene').object3D;
                scene.add( this.line1 );
                scene.add( this.line2 );
                scene.add( this.line3 );
                scene.add( this.line4 );

                // document.getElementById('start_python').click()
            },
            
            tick: function (time, deltaTime) 
            {
                if ( markerVisible["m0"] && markerVisible["m1"] && placeObject && activateSensor.m1)
                {
                    this.m0.object3D.getWorldPosition(this.p0);
                    this.m1.object3D.getWorldPosition(this.p1);
                    this.geometry1.vertices[0] = this.p0;
                    this.geometry1.vertices[1] = this.p1;
                    this.geometry1.verticesNeedUpdate = true;
                    this.line1.visible = true;
                    distances.m1 = calculateDistance(
                        this.p0.x,
                        this.p0.y,
                        this.p1.x,
                        this.p1.y,
                    )
                    sensorActivation(this.p0, this.p1, "m1")
                    shouldSendData("m1")
                } else {
                    this.line1.visible = false
                    distances.m1 = 0
                }
                if ( markerVisible["m0"] && markerVisible["m2"] && placeObject && activateSensor.m2)
                {
                    this.m0.object3D.getWorldPosition(this.p0);
                    this.m2.object3D.getWorldPosition(this.p2);
                    this.geometry2.vertices[0] = this.p0;
                    this.geometry2.vertices[1] = this.p2;
                    this.geometry2.verticesNeedUpdate = true;
                    this.line2.visible = true;

                    distances.m2 = calculateDistance(
                        this.p0.x,
                        this.p0.y,
                        this.p2.x,
                        this.p2.y,
                    )           
                    sensorActivation(this.p0, this.p2, "m2")
                    shouldSendData("m2")
                }else {
                    this.line2.visible = false
                    distances.m2 = 0
                }
                if ( markerVisible["m0"] && markerVisible["m3"] && placeObject && activateSensor.m3)
                {
                    this.m0.object3D.getWorldPosition(this.p0);
                    this.m3.object3D.getWorldPosition(this.p3);
                    this.geometry3.vertices[0] = this.p0;
                    this.geometry3.vertices[1] = this.p3;
                    this.geometry3.verticesNeedUpdate = true;
                    this.line3.visible = true;

                    distances.m3 = calculateDistance(
                        this.p0.x,
                        this.p0.y,
                        this.p3.x,
                        this.p3.y,
                    )   
                    sensorActivation(this.p0, this.p3, "m3")
                    shouldSendData("m3")
                } else {
                    this.line3.visible = false
                    distances.m3 = 0
                }
                if ( markerVisible["m0"] && markerVisible["m4"] && placeObject && activateSensor.m4)
                {
                    this.m0.object3D.getWorldPosition(this.p0);
                    this.m4.object3D.getWorldPosition(this.p4);
                    this.geometry4.vertices[0] = this.p0;
                    this.geometry4.vertices[1] = this.p4;
                    this.geometry4.verticesNeedUpdate = true;
                    this.line4.visible = true;

                    distances.m4 = calculateDistance(
                        this.p0.x,
                        this.p0.y,
                        this.p4.x,
                        this.p4.y,
                    )   
                    sensorActivation(this.p0, this.p4, "m4")
                    shouldSendData("m4")
                } else {
                    this.line4.visible = false
                    distances.m4 = 0
                }
                
                calculateShortestDistance()
                checkShowObject()
                handleSensors()
                checkActiveSensors()
            }
        });
        </script>
<!--  sourceUrl:../../data/videos/headtracking.mp4; sourceType: webcam; -->
        <a-scene embedded vr-mode-ui="enabled: false;" arjs="debugUIEnabled: false; sourceType: webcam; detectionMode: mono_and_matrix; matrixCodeType: 3x3;">

            <a-assets>
                <img id="grid" src="/static/images/border.png" />
            </a-assets>

            <a-marker type="barcode" value="0" id="m0" registerevents>
                <a-entity position="0 0 0" id="virtualObject" geometry="primitive:box; ">
                </a-entity>
            </a-marker>

            <a-marker type="barcode" value="1" id="m1" registerevents>
                <a-plane position="0 0 0" 
                        rotation="-90 0 0"
                        id="sensor_m1"
                        material="color: red; transparent: true; opacity: 1;">
                </a-plane>
            </a-marker>

            <a-marker type="barcode" value="2" id="m2" registerevents>
                <a-plane position="0 0 0" 
                        rotation="-90 0 0"
                        id="sensor_m2"
                        material="color: red; transparent: true; opacity: 1;">
                </a-plane>
            </a-marker>

            <a-marker type="barcode" value="3" id="m3" registerevents>
                <a-plane position="0 0 0" 
                        rotation="-90 0 0"
                        id="sensor_m3"
                        material="color: red; transparent: true; opacity: 1;">
                </a-plane>
            </a-marker>

            <a-marker type="barcode" value="4" id="m4" registerevents>
                <a-plane position="0 0 0" 
                        rotation="-90 0 0"
                        id="sensor_m4"
                        material="color: red; transparent: true; opacity: 1;">
                </a-plane>
            </a-marker>
            
            <a-marker type="pattern" url="data/kanji.patt" id="baseMarker" >
            </a-marker>

            <a-entity camera></a-entity>

            <a-entity run></a-entity>

        </a-scene>
    </body>
</html>

    `
    useEffect(() => {
        // document.getElementById('divId').innerHTML= htmlElement
    }, [])
    return (<>
        <div>
            <div id={'divId'} dangerouslySetInnerHTML={{__html: htmlElement}}></div>
        </div>
    </>)
}
export default VR