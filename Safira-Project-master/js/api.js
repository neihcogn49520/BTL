$.get("http://localhost:3000/posts", (data) => {
    render(data);
});

function render(list) {
    list.map((val) => {
        if (val.data[0].val == 1) {
            $(".stack").click(function(e) {
                e.preventDefault();
                $(".nd-title").addClass("nd-til");
                $(".nd-til").append(`
                    <h1>${val.data[0].content1}</h1>
                    <p>${val.data[0].bai1[0].title}</p>
                `);
                $(".nd-definition").addClass("nd-def");
                $(".nd-def").append(`
                    <p>${val.data[0].bai1[0].noidung[0].DN}</p>
                    <p>${val.data[0].bai1[0].noidung[0].DN1}</p>
                `);
                $(".nd-operation").addClass("nd-deff");
                $(".nd-deff").append(`
                    <p>${val.data[0].bai1[0].noidung[0].DN}</p>
                    <p>${val.data[0].bai1[0].noidung[0].methods}</p>
                `);
                $(".nd-methods").addClass("nd-met");
                $(".nd-met").append(`
                    <p>${val.data[0].bai1[0].noidung[0].DN}</p>
                    <p>${val.data[0].bai1[0].noidung[0].methods}</p>
                `);
                $(".nd-application").addClass("nd-app");
                $(".nd-app").append(`
                    <p>${val.data[0].bai1[0].noidung[0].DN}</p>
                    <p>${val.data[0].bai1[0].noidung[0].methods}</p>
                `);
            });
        }
    });
}