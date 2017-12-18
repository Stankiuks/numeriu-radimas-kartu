var auto = [
    ['ZBG 123', 98450, 3645],
    ['ABC 345', 1500, 91],
    ['LRS 222', 49506, 3250],
    ['LRS 223', 0, 0]
];

var headerAuto = ['Valstybiniai numeriai', 'Nuvaziuotas atstumas, km', 'Sugaistas laikas, h'];
//Kvieciame funkcija, kuri sukuria lentele
createTable(auto,headerAuto, '.pradiniai-duomenys');

//Funkcija skirta lenteles sukurimui
function createTable(auto, headerAuto, selector ) {

    //Gaunama html kur bus talpinama lentele
    var htmlTable = document.querySelector(selector);

    //Sukuriame lentele
    var table = document.createElement('table');

    //-----------------------------------Table head START---------------------------

    //Sukuriame lenteles head dali
    var tableHead = document.createElement('thead');

    //Sukuriame lenteles eilute
    var tableHeadRow = document.createElement('tr');

    for(var i = 0; i < headerAuto.length; i++) {

        var tableHeadCell = document.createElement('td');

        //Sukuriame celes Name
        var tableHeadCellName = document.createTextNode(headerAuto[i]);

        //Pridedame teksta i cele
        tableHeadCell.appendChild(tableHeadCellName);

        //Prideda cele i header eilute
        tableHeadRow.appendChild(tableHeadCell);
    }

    //I lenteles head dali idedame eilute
    tableHead.appendChild(tableHeadRow);

    //I lentele pridedame jos head dali
    table.appendChild(tableHead);

    //------------------------------------Table head END----------------------------

    //-----------------------------------Table head START---------------------------

    //Sukuriame lenteles body
    var tableBody = document.createElement('tbody');

    for(var i = 0; i < auto.length; i++) {

        //sukuriame lenteles body eilute
        var tableBodyRow = document.createElement('tr');

        var atstumas, laikas;

        for(var j=0; j < auto[i].length; j++) {

            //Sukuriame lenteles eilutes cele
            var tableRowCell = document.createElement('td');

            var cellValue;

            switch (j){
                case 1:
                    atstumas = (auto[i][j] / 1000).toFixed(2);
                    cellValue = atstumas;
                    break;

                case 2:
                    laikas = (auto[i][j] / 3600).toFixed(2);
                    cellValue = laikas;
                    break;

                default:
                    cellValue = auto[i][j];
            }

            //Pridedame teksta i eilutes cele
            var tableBodyRowCellValue = document.createTextNode(cellValue);

            //Pridedame celes reiksme
            tableRowCell.appendChild(tableBodyRowCellValue);

            //Pridedame cele i eilute
            tableBodyRow.appendChild(tableRowCell);
        }

        //Pridedame i lentele jos body
        tableBody.appendChild(tableBodyRow);

    }

    //Pridedame i lentele jos body
    table.appendChild(tableBody);

    //Uzdedame lentelei border
    table.setAttribute('border', 2);

    //Ataizduojame lentele html
    htmlTable.appendChild(table);

}

document.querySelector('#rasti').addEventListener('click', function () {
    var result = new Array ();

    var pradiniaiDuomenys = auto;

    for(var i=0; i<pradiniaiDuomenys.length; i++){
        var atstumas, laikas, greitis;

        for(var j=0; j< pradiniaiDuomenys [i].length; j++){
            switch (j){
                case 1:
                    atstumas = (pradiniaiDuomenys [i][j]/1000).toFixed (2);
                    break;
                case 2:
                    laikas = (pradiniaiDuomenys [i][j]/3600).toFixed (2);
                    break;
            }
        }

        greitis = (atstumas/laikas).toFixed (2);
        pradiniaiDuomenys [i].push(greitis);


        if(greitis > 60){
            result.push(pradiniaiDuomenys[i]);
        }

    }

    var header = ['Valstybiniai numeriai', 'Nuvaziuotas atstumas, km', 'Sugaistas laikas, h', 'Vidutinis greitis, km/h'];
    document.querySelector('.rezultatai').style.display = 'block';
    document.querySelector('.rezultatai').style.marginBottom = '20px';
    createTable(result, header, '.rezultatai');

});
