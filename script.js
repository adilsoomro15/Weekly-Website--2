document.getElementById('infoCake').style.display = 'none';
document.getElementById('infoFrosting').style.display = 'none';

function hidePanels() {
    document.getElementById('infoCake').style.display = 'none';
    document.getElementById('infoFrosting').style.display = 'none';
    document.getElementById('infoCakeTab').className = 'accordionPanelTab btn btn-outline-light btn-lg';
    document.getElementById('infoFrostingTab').className = 'accordionPanelTab btn btn-outline-light btn-lg';

}

function showCake() {
    hidePanels();
    document.getElementById('infoCake').style.display = 'block';
    document.getElementById('infoCakeTab').className = 'accordionPanelTab btn btn-outline-light btn-lg btn-primary';
}

function showFrosting() {
    hidePanels();
    document.getElementById('infoFrosting').style.display = 'block';
    document.getElementById('infoFrostingTab').className = 'accordionPanelTab btn btn-outline-light btn-lg btn-primary';
}
