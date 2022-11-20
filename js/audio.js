
// -- Music all pages -- //
function setAudioVol(){
    var vol = document.getElementById("musicAll");
    vol.volume = 0.2;
    vol.load();
}
setAudioVol();

function opa_0() {
    document.getElementById("audioSet").style.opacity="0";
}

// check if audio is playing
const showAudioController = setTimeout(sto_sAC, 3000);
document.getElementById("audioSet").style.display="none";

function sto_sAC() {
    document.getElementById("audioSet").style.display="initial";
    document.getElementById("audioSet").classList.add("audioAppearStyle")
}

document.getElementById("thanksSet").style.display="none"
var AudioCheckPlaying = document.getElementById("musicAll");

AudioCheckPlaying.onplaying = function() {
    document.getElementById("thanksSet").style.display="initial"
    document.getElementById("thanksSet").classList.add("thanksetAnimation")

    const page_1_show = setTimeout(sto_page_1_show, 4000);
    document.getElementById("page_1").style.display="none";

    function sto_page_1_show() {
        document.getElementById("page_0").classList.add("allOut");
        document.getElementById("page_0").classList.remove("audioDecora");

        const page_0_none = setTimeout(sto_page_0_none, 2000);
        function sto_page_0_none(){
            document.getElementById("page_0").style.display="none";
        }
        document.getElementById("page_1").style.display="initial";    
    }
};