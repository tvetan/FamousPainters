//Add your initialization logic here

var renderer = new Renderer();
var painters: Painters<Painter> = new Painters<Painter>();

var paintersLoader = new PaintersLoader("/json/famousPainters.json", renderer);
paintersLoader.load();

var paintersList = (<HTMLOListElement>document.getElementById("painters"));

paintersList.onclick = (element) => {
    loadPainterInformation($(element.target).text());
}

function loadPainterInformation(name: string) {
    var painter = painters.items.filter((item) => {
        return item.name === name;
    })[0];

    renderer.renderPainter(painter);
}