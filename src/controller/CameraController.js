/**
 * CLASS PURPOSE: Deal with the intelligence of the camera
 * DEVELOPER: Kauan Schaeffer, HCODE Instructors
 */
class CameraController {

    constructor(videoEl) {

        this._videoEl = videoEl;

        navigator.mediaDevices.getUserMedia({
            video: true
        }).then(stream => {
            this._videoEl.srcObject = stream;
            //this._videoEl.src = URL.createObjectURL(stream); DEPRECATED: Converting the stream to a URl so the videoEl can use it
            this._videoEl.play();
        }).catch(err => {
            console.error(err);
        });

    }


}