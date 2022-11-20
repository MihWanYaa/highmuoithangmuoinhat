// hover    
    // leave hover
function out(){
    document.getElementById("hoverGradient").style.display ="none";
    document.getElementById("minhWan").style.color="black";
    document.getElementById("truongGiang").style.color="black";
    document.getElementById("thuAl").style.color="black";
}

    // mw hover
function minhWan_hover() {
    document.getElementById("minhWan").style.color="cyan"

    document.getElementById("hoverGradient").style.display ="initial";
    document.getElementById("fullName").innerText="Phạm Minh Quân";
    document.getElementById("className").innerText="11A1";
    document.getElementById("SWFContents").innerText="Em rất cảm ơn và mong thầy cô xem cái này bằng máy tính.";
}

    // tg hover
function truongGiang_hover() {
    document.getElementById("truongGiang").style.color="cyan"

    document.getElementById("hoverGradient").style.display ="initial";
    document.getElementById("fullName").innerText="Nguyễn Trường Giang";
    document.getElementById("className").innerText="11A1";
    document.getElementById("SWFContents").innerText="Em";
}

    // ta hover
function thuAl_hover() {
    document.getElementById("thuAl").style.color="cyan"

    document.getElementById("hoverGradient").style.display ="initial";
    document.getElementById("fullName").innerText="Lương Thu An";
    document.getElementById("className").innerText="11D1";
    document.getElementById("SWFContents").innerText="Em không mún bị đúpp";
}