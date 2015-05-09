/// <reference path="typings/jquery/jquery.d.ts" />

class PaintersLoader {

    url: string;
    renderer: Renderer;

    constructor(url: string, renderer: Renderer) {
        this.url = url;
        this.renderer = renderer;
    }

    load() {
        $.getJSON(this.url,(data) => {
            this.mapData(data);
        });
    }

    mapData(data) {
        if (!data){
            this.renderer.error();
            return;
        }

        var paintersData: any[] = data.famousPainters;
        paintersData.forEach(painter => {
            painters.items.push(new Painter(painter.name, painter.style, painter.examples));
        });

        this.renderer.painters(painters.items);     
    }
}