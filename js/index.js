/* INICIO NAV */
document.getElementById("inicio").onmouseover = function() {
    mouseOverInicio();
};
document.getElementById("inicio").onmouseout = function() {
    mouseOutInicio();
};

function mouseOverInicio() {
    document.getElementById("inicio").style.color = "#ff8c00";
};
function mouseOutInicio() {
    document.getElementById("inicio").style.color = "red";
};

/* A EMPRESA NAV */
document.getElementById("empresa").onmouseover = function() {
    mouseOverEmpresa();
};
document.getElementById("empresa").onmouseout = function() {
    mouseOutEmpresa();
};

function mouseOverEmpresa() {
    document.getElementById("empresa").style.color = "#ff8c00";
    document.getElementById("inicio").style.color = "white";
};
function mouseOutEmpresa() {
    document.getElementById("empresa").style.color = "white";
    document.getElementById("inicio").style.color = "red";        
};


/* SERVICOS NAV */
document.getElementById("servicos").onmouseover = function() {
    mouseOverServicos();
};
document.getElementById("servicos").onmouseout = function() {
    mouseOutServicos();
};

function mouseOverServicos() {
    document.getElementById("servicos").style.color = "#ff8c00";
    document.getElementById("inicio").style.color = "white";
};
function mouseOutServicos() {
    document.getElementById("servicos").style.color = "white";
    document.getElementById("inicio").style.color = "red";        
};

/** CONTATO NAV */
document.getElementById("contato").onmouseover = function() {
    mouseOverContato();
};
document.getElementById("contato").onmouseout = function() {
    mouseOutContato();
};

function mouseOverContato() {
    document.getElementById("contato").style.color = "#ff8c00";
    document.getElementById("inicio").style.color = "white";
};
function mouseOutContato() {
    document.getElementById("contato").style.color = "white";
    document.getElementById("inicio").style.color = "red";  
};


