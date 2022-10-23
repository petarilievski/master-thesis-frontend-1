import Script from "next/script";
import {useEffect} from "react";

interface IProps {
    state: boolean
    tasterOne: boolean
    tasterTwo: boolean
    buttonOne: boolean
    buttonTwo: boolean
    sliderValue: number
}

const VR = ({state, tasterOne, tasterTwo, buttonOne, buttonTwo, sliderValue}: IProps) => {


    const htmlElement = `
    <link rel="icon" href="data:;base64,iVBORw0KGgo=">
    <script src="/static/js/aframe.min.js"></script>
    <script src="/static/js/aframe-ar.js"></script>
    <script>
    // Write the custom code here
    
    </script>

    <body style="margin: 0px; overflow: hidden;">
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