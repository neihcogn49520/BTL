$.get("http://localhost:3000/posts", (data) => {
    data.map((val) => {
        if (val.data[0].val == 1) {
            $(".stack").click(function(e) {
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
                    <h1>${val.data[0].content1}</h1>
                    <p>${val.data[0].bai1[0].title}</p>
                `);
                $(".nd-definition").toggleClass("nd-def");
                $(".nd-def").append(`
                    <p>${val.data[0].bai1[0].noidung[0].DN}</p>
                    <img src="${val.data[0].bai1[0].noidung[0].img1}" alt="Stack data structures" style="width: 50%">
                    <p>${val.data[0].bai1[0].noidung[0].DN1}</p>
                `);
                $(".nd-operation").toggleClass("nd-deff");
                $(".nd-deff").append(`
                    <h2>LIFO Priciple</h2>
                    <p>${val.data[0].bai1[0].noidung[0].methods}</p>
                    <img src="${val.data[0].bai1[0].noidung[0].img2}" alt="Stack LIFO" style="width: 50%">
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
                    <img src="${val.data[0].bai2[0].noidung[0].img1}" alt="Stack data structures" style="width: 50%">
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
$.get("http://localhost:3000/posts", (data) => {
    data.map((val) => {
        if (val.data[0].val2 == 3) {
            $(".priority").click(function(e) {
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
                    <h1>${val.data[0].content3}</h1>
                    <p>${val.data[0].bai3[0].title}</p>
                `);
                $(".nd-definition").toggleClass("nd-def");
                $(".nd-def").append(`
                    <p>${val.data[0].bai3[0].noidung[0].DN}</p>
                    <p>${val.data[0].bai3[0].noidung[0].DN1}</p>
                    <p>${val.data[0].bai3[0].noidung[0].DN3}</p>
                    <p>${val.data[0].bai3[0].noidung[0].DN31}</p>
                    <img src="${val.data[0].bai3[0].noidung[0].img1}" alt="Priority Queue data structures" style="width: 50%">
                `);
                $(".nd-operation").toggleClass("nd-deff");
                $(".nd-deff").append(`
                    <p>${val.data[0].bai3[0].noidung[0].operation}</p>
                    <h2>1. Inserting an Element into the Priority Queue</h2>
                    <p>${val.data[0].bai3[0].noidung[0].oper1}</p>
                    <img src="${val.data[0].bai3[0].noidung[0].img2}" alt="Priority Queue data structures" style="width: 50%">
                    <p>${val.data[0].bai3[0].noidung[0].oper12}</p>
                    <img src="${val.data[0].bai3[0].noidung[0].img3}" alt="Priority Queue data structures" style="width: 50%">
                    <p>${val.data[0].bai3[0].noidung[0].oper13}</p>
                    <h2>2. Deleting an Element from the Priority Queue</h2>
                    <p>${val.data[0].bai3[0].noidung[0].oper2}</p>
                    <img src="${val.data[0].bai3[0].noidung[0].img4}" alt="Priority Queue data structures" style="width: 50%">
                    <p>${val.data[0].bai3[0].noidung[0].oper22}</p>
                    <img src="${val.data[0].bai3[0].noidung[0].img5}" alt="Priority Queue data structures" style="width: 50%">
                    <p>${val.data[0].bai3[0].noidung[0].oper23}</p>
                    <img src="${val.data[0].bai3[0].noidung[0].img6}" alt="Priority Queue data structures" style="width: 50%">
                    <p>${val.data[0].bai3[0].noidung[0].oper24}</p>
                    <img src="${val.data[0].bai3[0].noidung[0].img7}" alt="Priority Queue data structures" style="width: 50%">
                    <p>${val.data[0].bai3[0].noidung[0].oper25}</p>
                    <h2>3. Peeking from the Priority Queue (Find max/min)</h2>
                    <p>${val.data[0].bai3[0].noidung[0].oper31}</p>
                    <h2>4. Extract-Max/Min from the Priority Queue</h2>
                    <p>${val.data[0].bai3[0].noidung[0].oper41}</p>
                `);
                $(".nd-complexity").toggleClass("nd-com");
                $(".nd-com").append(`
                    <p>${val.data[0].bai3[0].noidung[0].complex}</p>
                    <pre class="exec" style="max-height: 600px; width: 660px;">
                    <code class="cpp hljs">
                    ${val.data[0].bai3[0].noidung[0].complex1}
                    ${val.data[0].bai3[0].noidung[0].complex2}
                    </code></pre>
                `);
                $(".nd-application").toggleClass("nd-app");
                $(".nd-app").append(`
                    <p>${val.data[0].bai3[0].noidung[0].application}</p>
                `);
            });
        }
    });
    //  render(list);
});
$.get("http://localhost:3000/posts", (data) => {
    data.map((val) => {
        if (val.category == "DSII") {
            $(".single").click(function(e) {
                e.preventDefault();
                console.log(val.data[0].content1);
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
                    <h1>${val.data[0].content1}</h1>
                    <p>${val.data[0].bai1[0].title}</p>
                `);
                $(".nd-definition").toggleClass("nd-def");
                $(".nd-def").append(`
                    <p>${val.data[0].bai1[0].noidung[0].DN}</p>
                    <p>${val.data[0].bai1[0].noidung[0].DN1}</p>
                    <p>${val.data[0].bai1[0].noidung[0].DN2}</p>
                    <img src="${val.data[0].bai1[0].noidung[0].img1}" alt="Single Linked List" style="width: 50%">
                `);
                $(".nd-operation").toggleClass("nd-deff");
                $(".nd-deff").append(`
                    <p>${val.data[0].bai1[0].noidung[0].work1}</p>
                    <h2>Representation of Linked List</h2>
                    <p>${val.data[0].bai1[0].noidung[0].work2}</p>
                    <img src="${val.data[0].bai1[0].noidung[0].img2}" alt="Priority Queue data structures" style="width: 50%">
                    <p>${val.data[0].bai1[0].noidung[0].work3}</p>
                `);
                $(".nd-complexity").toggleClass("nd-com");
                $(".nd-com").append(`
                    <p>${val.data[0].bai1[0].noidung[0].complex}</p>
                    <p>${val.data[0].bai1[0].noidung[0].complex1}</p>
                    <pre class="exec" style="max-height: 600px; width: 660px;">
                    <code class="cpp hljs">
                    ${val.data[0].bai1[0].noidung[0].complex12}
                    </code></pre>
                    <p>${val.data[0].bai1[0].noidung[0].complex2}</p>
                    <pre class="exec" style="max-height: 600px; width: 660px;">
                    <code class="cpp hljs">
                    ${val.data[0].bai1[0].noidung[0].complex22}
                    </code></pre>
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
        if (val.category == "DSII") {
            $(".double").click(function(e) {
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
                    <img src="${val.data[0].bai2[0].noidung[0].img1}" alt="Double Linked List" style="width: 50%">
                `);
                $(".nd-operation").toggleClass("nd-deff");
                $(".nd-deff").append(`
                    <h2>${val.data[0].bai2[0].noidung[0].oper1}</h2>
                    <p>${val.data[0].bai2[0].noidung[0].ND1}</p>
                    <h2>${val.data[0].bai2[0].noidung[0].oper2}</h2>
                    <p>${val.data[0].bai2[0].noidung[0].ND2}</p>
                `);
                $(".nd-complexity").toggleClass("nd-com");
                $(".nd-com").append(`
                    <p>${val.data[0].bai2[0].noidung[0].complex}</p>
                    <p>${val.data[0].bai2[0].noidung[0].complex1}</p>
                    <pre class="exec" style="max-height: 600px; width: 660px;">
                      <code class="cpp hljs">
                      ${val.data[0].bai2[0].noidung[0].complex12}
                      </code>
                    </pre>
                    <p>${val.data[0].bai2[0].noidung[0].complex2}</p>
                    <pre class="exec" style="max-height: 600px; width: 660px;">
                      <code class="cpp hljs">
                      ${val.data[0].bai2[0].noidung[0].complex22}
                      </code>
                    </pre>
                    <h2>${val.data[0].bai2[0].noidung[0].complex3}</h2>
                    <p>${val.data[0].bai2[0].noidung[0].complex32}</p>
                    <h2>${val.data[0].bai2[0].noidung[0].complex4}</h2>
                    <p>${val.data[0].bai2[0].noidung[0].complex42}</p>
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
$.get("http://localhost:3000/posts", (data) => {
    data.map((val) => {
        if (val.category == "TreeI") {
            $(".tdt").click(function(e) {
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
                    <h1>${val.data[0].content1}</h1>
                    <p>${val.data[0].bai1[0].title}</p>
                `);
                $(".nd-definition").toggleClass("nd-def");
                $(".nd-def").append(`
                    <p>${val.data[0].bai1[0].noidung[0].DN}</p>
                    <img src="${val.data[0].bai1[0].noidung[0].img1}" alt="Tree Data Structure" style="width: 50%">
                `);
                $(".nd-operation").toggleClass("nd-deff");
                $(".nd-deff").append(`
                    <h2>${val.data[0].bai1[0].noidung[0].oper1}</h2>
                    <p>${val.data[0].bai1[0].noidung[0].ND1}</p>
                    <h2>${val.data[0].bai1[0].noidung[0].oper2}</h2>
                    <p>${val.data[0].bai1[0].noidung[0].ND21}</p>
                    <p>${val.data[0].bai1[0].noidung[0].ND22}</p>
                    <img src="${val.data[0].bai1[0].noidung[0].img2}" alt="Tree Data Structure" style="width: 50%">
                    <p>${val.data[0].bai1[0].noidung[0].ND23}</p>
                    <p>${val.data[0].bai1[0].noidung[0].ND24}</p>
                    <p>${val.data[0].bai1[0].noidung[0].ND25}</p>
                    <p>${val.data[0].bai1[0].noidung[0].ND26}</p>
                    <img src="${val.data[0].bai1[0].noidung[0].img3}" alt="Tree Data Structure" style="width: 50%">
                    <p>${val.data[0].bai1[0].noidung[0].ND27}</p>
                    <p>${val.data[0].bai1[0].noidung[0].ND28}</p>
                    <img src="${val.data[0].bai1[0].noidung[0].img4}" alt="Tree Data Structure" style="width: 50%">
                    <h2>${val.data[0].bai1[0].noidung[0].oper3}</h2>
                    <p>${val.data[0].bai1[0].noidung[0].ND3}</p>
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
        if (val.category == "TreeI") {
            $(".binary").click(function(e) {
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
                    <img src="${val.data[0].bai2[0].noidung[0].img1}" alt="Double Linked List" style="width: 50%">
                `);
                $(".nd-operation").toggleClass("nd-deff");
                $(".nd-deff").append(`
                    <h2>Types of Binary Tree</h2>
                    <h3>${val.data[0].bai2[0].noidung[0].oper1}</h3>
                    <p>${val.data[0].bai2[0].noidung[0].ND1}</p>
                    <img src="${val.data[0].bai2[0].noidung[0].img2}" alt="Double Linked List" style="width: 50%">
                    
                    <h3>${val.data[0].bai2[0].noidung[0].oper2}</h3>
                    <p>${val.data[0].bai2[0].noidung[0].ND2}</p>
                    <img src="${val.data[0].bai2[0].noidung[0].img3}" alt="Double Linked List" style="width: 50%">
                    
                    <h3>${val.data[0].bai2[0].noidung[0].oper3}</h3>
                    <p>${val.data[0].bai2[0].noidung[0].ND3}</p>
                    <img src="${val.data[0].bai2[0].noidung[0].img4}" alt="Double Linked List" style="width: 50%">
                    
                    <h3>${val.data[0].bai2[0].noidung[0].oper4}</h3>
                    <p>${val.data[0].bai2[0].noidung[0].ND4}</p>
                    <img src="${val.data[0].bai2[0].noidung[0].img5}" alt="Double Linked List" style="width: 50%">
                    
                    <h3>${val.data[0].bai2[0].noidung[0].oper5}</h3>
                    <p>${val.data[0].bai2[0].noidung[0].ND5}</p>
                    <img src="${val.data[0].bai2[0].noidung[0].img6}" alt="Double Linked List" style="width: 50%">
                    
                    <h3>${val.data[0].bai2[0].noidung[0].oper6}</h3>
                    <p>${val.data[0].bai2[0].noidung[0].ND6}</p>
                    <img src="${val.data[0].bai2[0].noidung[0].img7}" alt="Double Linked List" style="width: 50%">
                `);
                $(".nd-complexity").toggleClass("nd-com");
                $(".nd-com").append(`
                    <h2>${val.data[0].bai2[0].noidung[0].complex1}</h2>
                    <p>${val.data[0].bai2[0].noidung[0].complex12}</p>
                    <pre class="exec" style="max-height: 600px; width: 660px;">
                      <code class="cpp hljs">
                      ${val.data[0].bai2[0].noidung[0].complex13}
                      </code>
                    </pre>
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
$.get("http://localhost:3000/posts", (data) => {
    data.map((val) => {
        if (val.category == "TreeI") {
            $(".bst").click(function(e) {
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
                  <h1>${val.data[0].content3}</h1>
                  <p>${val.data[0].bai3[0].title}</p>
              `);
                $(".nd-definition").toggleClass("nd-def");
                $(".nd-def").append(`
                      <p>${val.data[0].bai3[0].noidung[0].DN1}</p>
                      <img src="${val.data[0].bai3[0].noidung[0].img1}" alt="Double Linked List" style="width: 50%">
                      <p>${val.data[0].bai3[0].noidung[0].DN2}</p>
                  `);
                $(".nd-operation").toggleClass("nd-deff");
                $(".nd-deff").append(`
                    <h2>${val.data[0].bai3[0].noidung[0].oper1}</h2>
                    <p>${val.data[0].bai3[0].noidung[0].ND11}</p>
                    <p>${val.data[0].bai3[0].noidung[0].ND12}</p>
                    <img src="${val.data[0].bai3[0].noidung[0].img2}" alt="Search Operation 1" style="width: 50%">
                    <img src="${val.data[0].bai3[0].noidung[0].img3}" alt="Search Operation 2" style="width: 50%">
                    <img src="${val.data[0].bai3[0].noidung[0].img4}" alt="Search Operation 3" style="width: 50%">
                    <img src="${val.data[0].bai3[0].noidung[0].img5}" alt="Search Operation 4" style="width: 50%">
                    <p>${val.data[0].bai3[0].noidung[0].ND13}</p>
                    <img src="${val.data[0].bai3[0].noidung[0].img6}" alt="Search Operation 5" style="width: 50%">
                    <p>${val.data[0].bai3[0].noidung[0].ND14}</p>

                    <h2>${val.data[0].bai3[0].noidung[0].oper2}</h2>
                    <p>${val.data[0].bai3[0].noidung[0].ND21}</p>
                    <p>${val.data[0].bai3[0].noidung[0].ND22}</p>
                    <img src="${val.data[0].bai3[0].noidung[0].img7}" alt="Double Linked List" style="width: 50%">
                    <img src="${val.data[0].bai3[0].noidung[0].img8}" alt="Double Linked List" style="width: 50%">
                    <img src="${val.data[0].bai3[0].noidung[0].img9}" alt="Double Linked List" style="width: 50%">
                    <img src="${val.data[0].bai3[0].noidung[0].img10}" alt="Double Linked List" style="width: 50%">
                    <p>${val.data[0].bai3[0].noidung[0].ND23}</p>
                    <img src="${val.data[0].bai3[0].noidung[0].img11}" alt="Double Linked List" style="width: 50%">

                    <h2>${val.data[0].bai3[0].noidung[0].oper3}</h2>
                    <p>${val.data[0].bai3[0].noidung[0].ND31}</p>
                    <p>${val.data[0].bai3[0].noidung[0].ocase1}</p>
                    <p>${val.data[0].bai3[0].noidung[0].ocase2}</p>
                    <p>${val.data[0].bai3[0].noidung[0].ocase3}</p>
                `);
                $(".nd-complexity").toggleClass("nd-com");
                $(".nd-com").append(`
                    <pre class="exec" style="max-height: 600px; width: 660px;">
                      <code class="cpp hljs">
                      ${val.data[0].bai3[0].noidung[0].complex1}
                      ${val.data[0].bai3[0].noidung[0].complex12}
                      </code>
                    </pre>
                    <p>${val.data[0].bai3[0].noidung[0].complex13}</p>
                `);
                $(".nd-application").toggleClass("nd-app");
                $(".nd-app").append(`
                    <p>${val.data[0].bai3[0].noidung[0].application}</p>
                `);
            });
        }
    });
    //  render(list);
});
$.get("http://localhost:3000/posts", (data) => {
    data.map((val) => {
        if (val.category == "Graph") {
            $(".gds").click(function(e) {
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
                  <h1>${val.data[0].content1}</h1>
                  <p>${val.data[0].bai1[0].title}</p>
                `);
                $(".nd-definition").toggleClass("nd-def");
                $(".nd-def").append(`
                  <p>${val.data[0].bai1[0].noidung[0].DN1}</p>
                  <img src="${val.data[0].bai1[0].noidung[0].img1}" alt="Graph Data Structure" style="width: 50%">
                  <p>${val.data[0].bai1[0].noidung[0].DN2}</p>
                  <img src="${val.data[0].bai1[0].noidung[0].img2}" alt="Graph Data Structure" style="width: 50%">
                  <p>${val.data[0].bai1[0].noidung[0].DN3}</p>
                  <p>${val.data[0].bai1[0].noidung[0].DN4}</p>
              `);
                $(".nd-operation").toggleClass("nd-deff");
                $(".nd-deff").append(`
                <p>${val.data[0].bai1[0].noidung[0].oper1}</p>
                <h2>${val.data[0].bai1[0].noidung[0].oper2}</h2>
                <p>${val.data[0].bai1[0].noidung[0].ND21}</p>
                <h2>${val.data[0].bai1[0].noidung[0].oper3}</h2>
                <p>${val.data[0].bai1[0].noidung[0].ND3}</p>
                <h3>${val.data[0].bai1[0].noidung[0].ND31}</h3>
                <p>${val.data[0].bai1[0].noidung[0].ND312}</p>
                <img src="${val.data[0].bai1[0].noidung[0].img3}" alt="Graph Data Structure" style="width: 50%">
                <p>${val.data[0].bai1[0].noidung[0].ND313}</p>
                <h3>${val.data[0].bai1[0].noidung[0].ND32}</h3>
                <p>${val.data[0].bai1[0].noidung[0].ND321}</p>
                <img src="${val.data[0].bai1[0].noidung[0].img4}" alt="Search Operation 2" style="width: 50%">
                <p>${val.data[0].bai1[0].noidung[0].ND322}</p>
            `);
                $(".nd-application").toggleClass("nd-app");
                $(".nd-app").append(`
                <h2>${val.data[0].bai1[0].noidung[0].application1}</h2>
                <p>${val.data[0].bai1[0].noidung[0].application11}</p>
                <h2>${val.data[0].bai1[0].noidung[0].application2}</h2>
                <p>${val.data[0].bai1[0].noidung[0].application21}</p>
            `);
            });
        }
    });
    //  render(list);
});
$.get("http://localhost:3000/posts", (data) => {
    data.map((val) => {
        if (val.category == "Graph") {
            $(".dfs").click(function(e) {
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
                      <p>${val.data[0].bai2[0].noidung[0].DN1}</p>
                  `);
                $(".nd-operation").toggleClass("nd-deff");
                $(".nd-deff").append(`
                    <h2>${val.data[0].bai2[0].noidung[0].oper1}</h2>
                    <p>${val.data[0].bai2[0].noidung[0].ND1}</p>
                    <img src="${val.data[0].bai2[0].noidung[0].img1}" alt="Graph Data Structure" style="width: 50%">
                    <p>${val.data[0].bai2[0].noidung[0].ND2}</p>
                    <img src="${val.data[0].bai2[0].noidung[0].img2}" alt="Graph Data Structure" style="width: 50%">
                    <p>${val.data[0].bai2[0].noidung[0].ND3}</p>
                    <img src="${val.data[0].bai2[0].noidung[0].img3}" alt="Graph Data Structure" style="width: 50%">
                    <p>${val.data[0].bai2[0].noidung[0].ND4}</p>
                    <img src="${val.data[0].bai2[0].noidung[0].img4}" alt="Graph Data Structure" style="width: 50%">
                    <img src="${val.data[0].bai2[0].noidung[0].img5}" alt="Graph Data Structure" style="width: 50%">
                    <p>${val.data[0].bai2[0].noidung[0].ND5}</p>
                    <img src="${val.data[0].bai2[0].noidung[0].img6}" alt="Search Operation 2" style="width: 50%">
                `);
                $(".nd-complexity").toggleClass("nd-com");
                $(".nd-com").append(`
                    <p>${val.data[0].bai2[0].noidung[0].complex}</p>
                    <pre class="exec" style="max-height: 600px; width: 660px;">
                      <code class="cpp hljs">
                      ${val.data[0].bai2[0].noidung[0].complex1}
                      </code>
                    </pre>
                    <h2>${val.data[0].bai2[0].noidung[0].complex2}</h2>
                    <p>${val.data[0].bai2[0].noidung[0].complex21}</p>
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
$.get("http://localhost:3000/posts", (data) => {
    data.map((val) => {
        if (val.category == "Sort") {
            $(".buble").click(function(e) {
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
                  <h1>${val.data[0].content1}</h1>
                  <p>${val.data[0].bai1[0].title}</p>
                `);
                $(".nd-definition").toggleClass("nd-def");
                $(".nd-def").append(`
                      <p>${val.data[0].bai1[0].noidung[0].DN}</p>
                  `);
                $(".nd-operation").toggleClass("nd-deff");
                $(".nd-deff").append(`
                    <h2>${val.data[0].bai1[0].noidung[0].oper1}</h2>
                    <p>${val.data[0].bai1[0].noidung[0].ND1}</p>
                    <h2>${val.data[0].bai1[0].noidung[0].oper2}</h2>
                    <p>${val.data[0].bai1[0].noidung[0].ND21}</p>
                    <img src="${val.data[0].bai1[0].noidung[0].img1}" alt="Graph Data Structure" style="width: 50%">
                    <h2>${val.data[0].bai1[0].noidung[0].oper3}</h2>
                    <p>${val.data[0].bai1[0].noidung[0].ND31}</p>
                    <img src="${val.data[0].bai1[0].noidung[0].img2}" alt="Graph Data Structure" style="width: 50%">
                    <p>${val.data[0].bai1[0].noidung[0].ND32}</p>
                    <img src="${val.data[0].bai1[0].noidung[0].img3}" alt="Graph Data Structure" style="width: 50%">
                    <p>${val.data[0].bai1[0].noidung[0].ND33}</p>
                    <img src="${val.data[0].bai1[0].noidung[0].img4}" alt="Graph Data Structure" style="width: 50%">
                `);
                $(".nd-complexity").toggleClass("nd-com");
                $(".nd-com").append(`
                    <pre class="exec" style="max-height: 600px; width: 660px;">
                      <code class="cpp hljs">
                      ${val.data[0].bai1[0].noidung[0].complex1}
                      </code>
                    </pre>
                    <h2>${val.data[0].bai1[0].noidung[0].complex2}</h2>
                    <p>${val.data[0].bai1[0].noidung[0].complex21}</p>
                    <h2>${val.data[0].bai1[0].noidung[0].complex3}</h2>
                    <p>${val.data[0].bai1[0].noidung[0].complex31}</p>
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
        if (val.category == "Sort") {
            $(".select").click(function(e) {
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
                  `);
                $(".nd-operation").toggleClass("nd-deff");
                $(".nd-deff").append(`
                    <h2>${val.data[0].bai2[0].noidung[0].oper1}</h2>
                    <p>${val.data[0].bai2[0].noidung[0].ND11}</p>
                    <img src="${val.data[0].bai2[0].noidung[0].img1}" alt="Graph Data Structure" style="width: 50%">
                    <p>${val.data[0].bai2[0].noidung[0].ND12}</p>
                    <img src="${val.data[0].bai2[0].noidung[0].img2}" alt="Graph Data Structure" style="width: 50%">
                    <p>${val.data[0].bai2[0].noidung[0].ND13}</p>
                    <img src="${val.data[0].bai2[0].noidung[0].img3}" alt="Graph Data Structure" style="width: 50%">
                    <p>${val.data[0].bai2[0].noidung[0].ND14}</p>
                    <img src="${val.data[0].bai2[0].noidung[0].img4}" alt="Graph Data Structure" style="width: 50%">
                    <img src="${val.data[0].bai2[0].noidung[0].img5}" alt="Graph Data Structure" style="width: 50%">
                    <img src="${val.data[0].bai2[0].noidung[0].img6}" alt="Graph Data Structure" style="width: 50%">
                    <img src="${val.data[0].bai2[0].noidung[0].img7}" alt="Graph Data Structure" style="width: 50%">
                `);
                $(".nd-complexity").toggleClass("nd-com");
                $(".nd-com").append(`
                    <pre class="exec" style="max-height: 600px; width: 660px;">
                      <code class="cpp hljs">
                      ${val.data[0].bai2[0].noidung[0].complex1}
                      </code>
                    </pre>
                    <h2>${val.data[0].bai2[0].noidung[0].complex2}</h2>
                    <p>${val.data[0].bai2[0].noidung[0].complex21}</p>
                    <h2>${val.data[0].bai2[0].noidung[0].complex3}</h2>
                    <p>${val.data[0].bai2[0].noidung[0].complex31}</p>
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
$.get("http://localhost:3000/posts", (data) => {
    data.map((val) => {
        if (val.category == "Sort") {
            $(".insert").click(function(e) {
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
                  <h1>${val.data[0].content3}</h1>
                  <p>${val.data[0].bai3[0].title}</p>
                `);
                $(".nd-definition").toggleClass("nd-def");
                $(".nd-def").append(`
                      <p>${val.data[0].bai3[0].noidung[0].DN}</p>
                  `);
                $(".nd-operation").toggleClass("nd-deff");
                $(".nd-deff").append(`
                    <h2>${val.data[0].bai3[0].noidung[0].oper1}</h2>
                    <img src="${val.data[0].bai3[0].noidung[0].img1}" alt="" style="width: 50%">
                    <p>${val.data[0].bai3[0].noidung[0].ND1}</p>
                    <img src="${val.data[0].bai3[0].noidung[0].img2}" alt="" style="width: 50%">
                    <p>${val.data[0].bai3[0].noidung[0].ND2}</p>
                    <img src="${val.data[0].bai3[0].noidung[0].img3}" alt="" style="width: 50%">
                    <p>${val.data[0].bai3[0].noidung[0].ND3}</p>
                    <img src="${val.data[0].bai3[0].noidung[0].img4}" alt="" style="width: 50%">
                    <img src="${val.data[0].bai3[0].noidung[0].img5}" alt="" style="width: 50%">
                `);
                $(".nd-complexity").toggleClass("nd-com");
                $(".nd-com").append(`
                    <pre class="exec" style="max-height: 600px; width: 660px;">
                      <code class="cpp hljs">
                      ${val.data[0].bai3[0].noidung[0].complex1}
                      </code>
                    </pre>
                    <h2>${val.data[0].bai3[0].noidung[0].complex2}</h2>
                    <p>${val.data[0].bai3[0].noidung[0].complex21}</p>
                    <h2>${val.data[0].bai3[0].noidung[0].complex3}</h2>
                    <p>${val.data[0].bai3[0].noidung[0].complex31}</p>
                `);
                $(".nd-application").toggleClass("nd-app");
                $(".nd-app").append(`
                    <p>${val.data[0].bai3[0].noidung[0].application}</p>
                `);
            });
        }
    });
    //  render(list);
});
$.get("http://localhost:3000/posts", (data) => {
    data.map((val) => {
        if (val.category == "Searching") {
            $(".linear").click(function(e) {
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
                  <h1>${val.data[0].content1}</h1>
                  <p>${val.data[0].bai1[0].title}</p>
                `);
                $(".nd-definition").toggleClass("nd-def");
                $(".nd-def").append(`
                      <p>${val.data[0].bai1[0].noidung[0].DN}</p>
                  `);
                $(".nd-operation").toggleClass("nd-deff");
                $(".nd-deff").append(`
                    <h2>${val.data[0].bai1[0].noidung[0].oper1}</h2>
                    <p>${val.data[0].bai1[0].noidung[0].ND1}</p>
                    <img src="${val.data[0].bai1[0].noidung[0].img1}" alt="" style="width: 50%">
                    <p>${val.data[0].bai1[0].noidung[0].ND2}</p>
                    <img src="${val.data[0].bai1[0].noidung[0].img2}" alt="" style="width: 50%">
                    <p>${val.data[0].bai1[0].noidung[0].ND3}</p>
                    <img src="${val.data[0].bai1[0].noidung[0].img3}" alt="" style="width: 50%">
                    <p>${val.data[0].bai1[0].noidung[0].ND4}</p>
                `);
                $(".nd-complexity").toggleClass("nd-com");
                $(".nd-com").append(`
                    <pre class="exec" style="max-height: 600px; width: 660px;">
                      <code class="cpp hljs">
                      ${val.data[0].bai1[0].noidung[0].complex1}
                      </code>
                    </pre>
                    <h2>${val.data[0].bai1[0].noidung[0].complex2}</h2>
                    <p>${val.data[0].bai1[0].noidung[0].complex}</p>
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
        if (val.category == "Searching") {
            $(".bs").click(function(e) {
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
                  `);
                $(".nd-operation").toggleClass("nd-deff");
                $(".nd-deff").append(`
                    <h2>${val.data[0].bai2[0].noidung[0].oper1}</h2>
                    <p>${val.data[0].bai2[0].noidung[0].ND1}</p>
                    <img src="${val.data[0].bai2[0].noidung[0].img1}" alt="Graph Data Structure" style="width: 50%">
                    <p>${val.data[0].bai2[0].noidung[0].ND2}</p>
                    <img src="${val.data[0].bai2[0].noidung[0].img2}" alt="Graph Data Structure" style="width: 50%">
                    <p>${val.data[0].bai2[0].noidung[0].ND3}</p>
                    <img src="${val.data[0].bai2[0].noidung[0].img3}" alt="Graph Data Structure" style="width: 50%">
                    <p>${val.data[0].bai2[0].noidung[0].ND4}</p>
                    <img src="${val.data[0].bai2[0].noidung[0].img4}" alt="Graph Data Structure" style="width: 50%">
                    <p>${val.data[0].bai2[0].noidung[0].ND5}</p>
                    <img src="${val.data[0].bai2[0].noidung[0].img5}" alt="Graph Data Structure" style="width: 50%">
                    <p>${val.data[0].bai2[0].noidung[0].ND6}</p>
                    <img src="${val.data[0].bai2[0].noidung[0].img6}" alt="Graph Data Structure" style="width: 50%">
                `);
                $(".nd-complexity").toggleClass("nd-com");
                $(".nd-com").append(`
                    <pre class="exec" style="max-height: 600px; width: 660px;">
                      <code class="cpp hljs">
                      ${val.data[0].bai2[0].noidung[0].complex1}
                      </code>
                    </pre>
                    <h2>${val.data[0].bai2[0].noidung[0].complex2}</h2>
                    <p>${val.data[0].bai2[0].noidung[0].complex}</p>
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
$.get("http://localhost:3000/posts", (data) => {
    data.map((val) => {
        if (val.category == "Greedy") {
            $(".greedy").click(function(e) {
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
                  <h1>${val.data[0].content1}</h1>
                  <p>${val.data[0].bai1[0].title}</p>
                `);
                $(".nd-definition").toggleClass("nd-def");
                $(".nd-def").append(`
                      <p>${val.data[0].bai1[0].noidung[0].DN}</p>
                  `);
                $(".nd-operation").toggleClass("nd-deff");
                $(".nd-deff").append(`
                    <h2>${val.data[0].bai1[0].noidung[0].oper1}</h2>
                    <p>${val.data[0].bai1[0].noidung[0].ND1}</p>
                    <h2>${val.data[0].bai1[0].noidung[0].oper2}</h2>
                    <p>${val.data[0].bai1[0].noidung[0].ND21}</p>
                    <img src="${val.data[0].bai1[0].noidung[0].img1}" alt="" style="width: 50%">
                    <h2>${val.data[0].bai1[0].noidung[0].oper3}</h2>
                    <p>${val.data[0].bai1[0].noidung[0].ND31}</p>
                    <img src="${val.data[0].bai1[0].noidung[0].img2}" alt="" style="width: 50%">
                    <p>${val.data[0].bai1[0].noidung[0].ND32}</p>
                `);
                $(".nd-complexity").toggleClass("nd-com");
                $(".nd-com").append(`
                    <h2>${val.data[0].bai1[0].noidung[0].complex}</h2>
                    <p>${val.data[0].bai1[0].noidung[0].complex11}</p>
                    <pre class="exec" style="max-height: 600px; width: 660px;">
                      <code class="cpp hljs">
                      ${val.data[0].bai1[0].noidung[0].complex12}
                      </code>
                    </pre>
                    <h2>${val.data[0].bai1[0].noidung[0].complex2}</h2>
                    <p>${val.data[0].bai1[0].noidung[0].complex21}</p>
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
        if (val.category == "Greedy") {
            $(".dij").click(function(e) {
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
                  `);
                $(".nd-operation").toggleClass("nd-deff");
                $(".nd-deff").append(`
                    <h2>${val.data[0].bai2[0].noidung[0].oper1}</h2>
                    <p>${val.data[0].bai2[0].noidung[0].ND1}</p>
                    <img src="${val.data[0].bai2[0].noidung[0].img1}" alt="Graph Data Structure" style="width: 50%">
                    <p>${val.data[0].bai2[0].noidung[0].ND2}</p>
                    <h2>${val.data[0].bai2[0].noidung[0].oper3}</h2>
                    <p>${val.data[0].bai2[0].noidung[0].ND31}</p>
                    <p>${val.data[0].bai2[0].noidung[0].ND32}</p>
                    <img src="${val.data[0].bai2[0].noidung[0].img2}" alt="Graph Data Structure" style="width: 50%">
                    <p>${val.data[0].bai2[0].noidung[0].ND33}</p>
                    <img src="${val.data[0].bai2[0].noidung[0].img3}" alt="Graph Data Structure" style="width: 50%">
                    <p>${val.data[0].bai2[0].noidung[0].ND34}</p>
                    <img src="${val.data[0].bai2[0].noidung[0].img4}" alt="Graph Data Structure" style="width: 50%">
                    <p>${val.data[0].bai2[0].noidung[0].ND35}</p>
                    <img src="${val.data[0].bai2[0].noidung[0].img5}" alt="Graph Data Structure" style="width: 50%">
                    <p>${val.data[0].bai2[0].noidung[0].ND36}</p>
                    <img src="${val.data[0].bai2[0].noidung[0].img6}" alt="Graph Data Structure" style="width: 50%">
                    <p>${val.data[0].bai2[0].noidung[0].ND37}</p>
                    <img src="${val.data[0].bai2[0].noidung[0].img7}" alt="Graph Data Structure" style="width: 50%">
                    <p>${val.data[0].bai2[0].noidung[0].ND38}</p>
                    <img src="${val.data[0].bai2[0].noidung[0].img8}" alt="Graph Data Structure" style="width: 50%">
                    <p>${val.data[0].bai2[0].noidung[0].ND39}</p>
                    <img src="${val.data[0].bai2[0].noidung[0].img9}" alt="Graph Data Structure" style="width: 50%">
                `);
                $(".nd-complexity").toggleClass("nd-com");
                $(".nd-com").append(`
                    <pre class="exec" style="max-height: 600px; width: 660px;">
                      <code class="cpp hljs">
                      ${val.data[0].bai2[0].noidung[0].complex1}
                      </code>
                    </pre>
                    <h2>${val.data[0].bai2[0].noidung[0].complex2}</h2>
                    <p>${val.data[0].bai2[0].noidung[0].complex21}</p>
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