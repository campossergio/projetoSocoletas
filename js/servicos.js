/** SERVIÇOS NAV */
document.getElementById("servicos").addEventListener("mouseover", mouseOverServicos);
document.getElementById("servicos").addEventListener("mouseout", mouseOutServicos);

function mouseOverServicos() {
    document.getElementById("servicos").style.color = "#ff8c00";
};
function mouseOutServicos() {
    document.getElementById("servicos").style.color = "red";
};

/** INICIO NAV */
document.getElementById("inicio").addEventListener("mouseover", mouseOverInicio);
document.getElementById("inicio").addEventListener("mouseout", mouseOutInicio);

function mouseOverInicio() {
    document.getElementById("inicio").style.color = "#ff8c00";
    document.getElementById("servicos").style.color = "white";
};
function mouseOutInicio() {
    document.getElementById("inicio").style.color = "white";
    document.getElementById("servicos").style.color = "red";
};

/** A EMPRESA NAV */
document.getElementById("empresa").addEventListener("mouseover", mouseOverEmpresa);
document.getElementById("empresa").addEventListener("mouseout", mouseOutEmpresa);

function mouseOverEmpresa() {
    document.getElementById("empresa").style.color = "#ff8c00";
    document.getElementById("servicos").style.color = "white";
};
function mouseOutEmpresa() {
    document.getElementById("empresa").style.color = "white";
    document.getElementById("servicos").style.color = "red";
};

/** CONTATO NAV */
document.getElementById("contato").addEventListener("mouseover", mouseOverContato);
document.getElementById("contato").addEventListener("mouseout", mouseOutContato);

function mouseOverContato() {
    document.getElementById("contato").style.color = "#ff8c00";
    document.getElementById("servicos").style.color = "white";
};
function mouseOutContato() {
    document.getElementById("contato").style.color = "white";
    document.getElementById("servicos").style.color = "red";
};
