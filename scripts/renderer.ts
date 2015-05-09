class Renderer {

    painters(painters: Painter[]) {

        var paintersList: HTMLOListElement = (<HTMLOListElement>document.getElementById("painters"));

        painters.forEach((item: Painter) => {

            var painter: HTMLLIElement = document.createElement("li");

            painter.textContent = item.name;

            painter.addEventListener("click", function () {
                $("#painters li").removeClass("selected");
                $(this).addClass("selected");
            })

            paintersList.appendChild(painter);
        })               
    }

    renderPainter(painter: Painter) {
        var name: HTMLElement = (<HTMLElement>document.getElementById("name")),
            style: HTMLElement = (<HTMLElement>document.getElementById("style")),
            examples = (<HTMLElement>document.getElementById("examples"));

        name.textContent = painter.name;
        style.textContent = "Style: " + painter.style;

        examples.textContent = "Examples: " + painter.examples.join(", ");
    }

    error() {
        var content: HTMLElement = (<HTMLElement>document.getElementById("content"));

        content.textContent = "Cound't load elements";
    }
}