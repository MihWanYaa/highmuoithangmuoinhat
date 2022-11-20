// -- No Copy IMG tags -- //
function nocontext(e) {
    var clickedTag = (e==null) ? event.srcElement.tagName : e.target.tagName;
    if (clickedTag == "IMG")
      return false;
  }
document.oncontextmenu = nocontext;

// -- Hide Loading - Show playButton -- // When done --
const hideLoading_playButton = setTimeout(stoHide_SplayB, 20000);
document.getElementById("playButton").style.display="none";

function stoHide_SplayB() {
    document.getElementById("loading_Page").style.display="none";   
    document.getElementById("playButton").style.display="initial";
}

// -- Hide Loading - Show exitButton -- // When done --
const hideLoading_exitButton = setTimeout(stoHide_SexitB, 19000);
document.getElementById("exitButton").style.display="none";

function stoHide_SexitB() {
    document.getElementById("loading_Exit").style.display="none";   
    document.getElementById("exitButton").style.display="initial";
}

// -- Exit tab - Exit Button -- // Off page
function exitPage() {
    close();
}

// -- Continue notification appears //
const showContinue_Notif = setTimeout(stoShowNotif_ScontinueB, 19500);
document.getElementById("timeNotif").style.display="none";

function stoShowNotif_ScontinueB() {
    document.getElementById("timeNotif").style.display="initial";    
}

// -- Hide contents - Show continueButton -- // When done --
const hideContents_continueButton = setTimeout(stoHide_ScontinueB, 56000); //56000
document.getElementById("continueButton").style.display="none";

function stoHide_ScontinueB() {
    document.getElementById("continueButton").style.display="initial";
}

// -- Contents start -- // When click Play BTN
document.getElementById("continueButton").disabled = true;

function clickP_btn(){
    document.getElementById("playButton").style.display ="none";
    document.getElementById("timeNotif").style.display="none"; 

    document.getElementById("pB_content_0").style.display ="initial";
    document.getElementById("pB_content_1").style.display ="initial";
    document.getElementById("pB_content_2").style.display ="initial";
    document.getElementById("pB_content_3").style.display ="initial";
    document.getElementById("pB_content_3_5").style.display ="initial";
    document.getElementById("pB_content_4").style.display ="initial";
    document.getElementById("pB_content_5").style.display ="initial";
    document.getElementById("pB_content_6").style.display ="initial";
    document.getElementById("pB_content_7").style.display ="initial";
    document.getElementById("pB_content_8").style.display ="initial";

    document.getElementById("continueButton").disabled = false;
    document.getElementById("continueButton").style.background= "linear-gradient(229deg, #f9ff00, #00e6ff, #56ff00)";
}

// Body 2 start -- // When click Continue BTN
function clickC_btn(){
    let toRemovep1 = document.querySelector("#page_1");
    toRemovep1.remove();

    document.getElementById("page_2").style.display ="initial";
    document.getElementById("page_2_Contents").style.zIndex = "5"

    // Continue_2 Button shows after 24s // 
    const ContinueBtn_2_p2 = setTimeout(stoShowContinueB_2_p2_Scontinue_2_B, 22000);
    document.getElementById("Continue_2_Button").style.display="none";

    function stoShowContinueB_2_p2_Scontinue_2_B() {
        document.getElementById("Continue_2_Button").style.display="initial";
    }
}  

// Content Body 2 -- // Set Time Out
    // 1
const showContent_1_p2 = setTimeout(stoShowCnt_1_p2_ScontinueB, 4000);
document.getElementById("page_2_Cnt_1").style.display="none";

function stoShowCnt_1_p2_ScontinueB() {
    document.getElementById("page_2_Cnt_1").style.display="initial";   
}

    // 2
const showContent_2_p2 = setTimeout(stoShowCnt_2_p2_ScontinueB, 4000);
document.getElementById("page_2_Cnt_2").style.display="none";

function stoShowCnt_2_p2_ScontinueB() {
    document.getElementById("page_2_Cnt_2").style.display="initial";   
}

    // 3
const showContent_3_p2 = setTimeout(stoShowCnt_3_p2_ScontinueB, 4000);
document.getElementById("page_2_Cnt_3").style.display="none";

function stoShowCnt_3_p2_ScontinueB() {
    document.getElementById("page_2_Cnt_3").style.display="initial";  
}

    // 4
const showContent_4_p2 = setTimeout(stoShowCnt_4_p2_ScontinueB, 4000);
document.getElementById("page_2_Cnt_4").style.display="none";

function stoShowCnt_4_p2_ScontinueB() {
    document.getElementById("page_2_Cnt_4").style.display="initial";   
}

    // 5
const showContent_5_p2 = setTimeout(stoShowCnt_5_p2_ScontinueB, 4000);
document.getElementById("page_2_Cnt_5").style.display="none";

function stoShowCnt_5_p2_ScontinueB() {
    document.getElementById("page_2_Cnt_5").style.display="initial";   
}

    // add background for contents
const addBg = setTimeout(sto_add_background_p2, 99000);

function sto_add_background_p2() {
    document.getElementById("page_2_Contents").classList.add("backgroundSetCnts_p2")
}


// -- Continue_2 Button Show -- // Set Time Out
const ContinueBtn_2_p2 = setTimeout(stoShowContinueB_2_p2_Scontinue_2_B, 24000);
document.getElementById("Continue_2_Button").style.display="none";

function stoShowContinueB_2_p2_Scontinue_2_B() {
    document.getElementById("Continue_2_Button").style.display="initial";
}

// Body 3 start -- // When click Continue_2 BTN
document.getElementById("page_3").style.display = "none"
document.getElementById("showCa").style.display = "none";
document.getElementById("Continue_3_Button").style.display ="none";

function clickC_2_btn(){
    let toRemovep2 = document.querySelector("#page_2");
    toRemovep2.remove();

    document.getElementById("page_3").style.display="flex"
    document.getElementById("showCa").style.display="initial";
    document.getElementById("Continue_3_Button").style.display="initial";

    const ContinueBtn_3_p3 = setTimeout(stoShowContinueB_3_p3_Scontinue_3_B, 14000);
    document.getElementById("Continue_3_Button").style.display="none";

    function stoShowContinueB_3_p3_Scontinue_3_B() {
        document.getElementById("Continue_3_Button").style.display="initial";
    }  
}

// Body 4 start -- // When click Continue_3 BTN
document.getElementById("all_part_p4").style.display="none";
function clickC_3_btn(){
    let toRemovep3 = document.querySelector("#page_3");
    toRemovep3.remove();
    
    
    document.getElementById("all_part_p4").style.display="grid";


}