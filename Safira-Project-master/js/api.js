$.get("http://localhost:3000/posts", (data) => {
    data.map((val) => {
        if (val.data[0].val == 1) {
            $(".stack").click(function(e) {
                e.preventDefault();
                $(".nd-title").toggleClass("nd-til");
                $(".nd-til").append(`
                    <h1>${val.data[0].content1}</h1>
                    <p>${val.data[0].bai1[0].title}</p>
                `);
                $(".nd-definition").toggleClass("nd-def");
                $(".nd-def").append(`
                    <p>${val.data[0].bai1[0].noidung[0].DN}</p>
                    <img src="${val.data[0].bai1[0].noidung[0].img1}" alt="Stack data structures" style="width: 100%">
                    <p>${val.data[0].bai1[0].noidung[0].DN1}</p>
                `);
                $(".nd-operation").toggleClass("nd-deff");
                $(".nd-deff").append(`
                    <h2>LIFO Priciple</h2>
                    <p>${val.data[0].bai1[0].noidung[0].methods}</p>
                    <img src="${val.data[0].bai1[0].noidung[0].img2}" alt="Stack LIFO" style="width: 100%">
                    <h2>Basic operation of Stack</h2>
                    <p>${val.data[0].bai1[0].noidung[0].operation}</p>
                    <h2>Working of Stack</h2>
                    <p>${val.data[0].bai1[0].noidung[0].work}</p>
                `);
                $(".nd-complexity").toggleClass("nd-com");
                $(".nd-com").append(`
                    <p>${val.data[0].bai1[0].noidung[0].complex1}</p>
                    <pre class="exec" style="max-height: 600px; width: 660px;"><code class="cpp hljs">
                    ${val.data[0].bai1[0].noidung[0].complex2}
                    </code></pre>
                    <p>${val.data[0].bai1[0].noidung[0].complex3}</p>
                `);
                $(".nd-application").toggleClass("nd-app");
                $(".nd-app").append(`
                    <p>${val.data[0].bai1[0].noidung[0].application}</p>
                `);
            });
        }
    });
    //  render(list);
});
$.get("http://localhost:3000/posts", (data) => {
    data.map((val) => {
        if (val.data[0].val1 == 2) {
            $(".queue").click(function(e) {
                e.preventDefault();

                $(".nd-title").removeClass("nd-til");
                $(".nd-title").empty();
                $(".nd-definition").removeClass("nd-def");
                $(".nd-definition").empty();
                $(".nd-operation").removeClass("nd-deff");
                $(".nd-operation").empty();
                $(".nd-complexity").removeClass("nd-com");
                $(".nd-complexity").empty();
                $(".nd-application").removeClass("nd-app");
                $(".nd-application").empty();

                $(".nd-title").toggleClass("nd-til");
                $(".nd-til").append(`
                    <h1>${val.data[0].content2}</h1>
                    <p>${val.data[0].bai2[0].title}</p>
                `);
                $(".nd-definition").toggleClass("nd-def");
                $(".nd-def").append(`
                    <p>${val.data[0].bai2[0].noidung[0].DN}</p>
                    <img src="${val.data[0].bai2[0].noidung[0].img1}" alt="Stack data structures" style="width: 100%">
                    <p>${val.data[0].bai2[0].noidung[0].DN1}</p>
                `);
                $(".nd-operation").toggleClass("nd-deff");
                $(".nd-deff").append(`
                    <h2>Working of Queue</h2>
                    <p>${val.data[0].bai2[0].noidung[0].methods}</p>
                    <h2>Basic operation of Queue</h2>
                    <p>${val.data[0].bai2[0].noidung[0].operation}</p>
                    <h2>Enqueue Operation</h2>
                    <p>${val.data[0].bai2[0].noidung[0].enope}</p>
                    <h2>Dequeue Operation</h2>
                    <p>${val.data[0].bai2[0].noidung[0].deope}</p>
                `);
                $(".nd-complexity").toggleClass("nd-com");
                $(".nd-com").append(`
                    <p>${val.data[0].bai2[0].noidung[0].complex1}</p>
                    <pre class="exec" style="max-height: 600px; width: 660px;">
                    <code class="cpp hljs">
                    ${val.data[0].bai2[0].noidung[0].complex2}
                    ${val.data[0].bai2[0].noidung[0].complex3}
                    </code></pre>
                    <p>${val.data[0].bai2[0].noidung[0].complex4}</p>
                `);
                $(".nd-application").toggleClass("nd-app");
                $(".nd-app").append(`
                    <p>${val.data[0].bai2[0].noidung[0].application}</p>
                `);
            });
        }
    });
    //  render(list);
});