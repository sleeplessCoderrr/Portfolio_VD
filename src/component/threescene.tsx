import * as THREE from 'three';

const width:number = 200;
const heigth:number  = 200;

const cameraSetting = {
    "cameraWidth" : width/2,
    "cameraHeight" : heigth/2
}

const ThreeScene = () => {
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(
        cameraSetting.cameraWidth,
        -cameraSetting.cameraWidth,
        cameraSetting.cameraHeight,
        -cameraSetting.cameraHeight,
    );




};

export default ThreeScene;