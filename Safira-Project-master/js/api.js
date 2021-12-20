$.get("http://localhost:3000/posts",
    (data) => {
        render(data)
    }
);

function render(list) {

    list.map(val => {
        $(".definition").append(`
            <p>${bai1.title}</p>
        `);
    })
}