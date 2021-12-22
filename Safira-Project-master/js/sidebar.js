const renderCateOnSideBar = (list, selection) => {
    list.forEach((val, idx) => {
        $(`
        <li>
            <span class="format-child">${val.itemsChild[0].content}</span>
            <span class="icon-nav"><i class="fas fa-chevron-right"></i></span>
            <ul class="dropright chickpea">
            <li class="stack"><a href="">Stack</a> </li>
            <li class="queue"><a href="">Queue</a> </li>
            <li class="priority"><a href="">Priority Queue</a></li>
        </ul>
        </li>
        `).appendTo(selection);


        $(`.btn-${val.category}`).click(function(event) {
            $(`.content-${val.category}`).toggleClass("show");
            $(`.child-${val.category}`).toggleClass("rotate");
            event.preventDefault()
        });





        renderContent(val.category);

    });
};
const updateList = () => {
    const courses = [{
            content: "Definition",
            link: "#",
            category: "Def",

            itemsChild: [{
                    content: "Data Structures (I)",
                    link: "#",
                    id: "C1",

                },
                {
                    content: "Data Structures (II)",
                    link: "#",
                    id: "C2",
                },
                {
                    content: "Tree based DSA",
                    link: "#",
                    id: "C3",
                },
                {
                    content: "Graph based DSA",
                    link: "#",
                    id: "C4",

                },

            ],
        },
        {
            content: "Operation",
            link: "#",
            category: "Ope",
            itemsChild: [{
                    content: "Data Structures (I)",
                    link: "#",
                    id: "C1",

                },
                {
                    content: "Data Structures (II)",
                    link: "#",
                    id: "C2",
                },
                {
                    content: "Tree based DSA",
                    link: "#",
                    id: "C3",
                },
                {
                    content: "Graph based DSA",
                    link: "#",
                    id: "C4",

                },

            ],
        },
        {
            content: "Complexity",
            link: "#",
            category: "Com",
            itemsChild: [{
                    content: "Data Structures (I)",
                    link: "#",
                    id: "C1",

                },
                {
                    content: "Data Structures (II)",
                    link: "#",
                    id: "C2",
                },
                {
                    content: "Tree based DSA",
                    link: "#",
                    id: "C3",
                },
                {
                    content: "Graph based DSA",
                    link: "#",
                    id: "C4",

                },

            ],
        },
        {
            content: "Application",
            link: "#",
            category: "App",
            itemsChild: [{
                    content: "Data Structures (I)",
                    link: "#",
                    id: "C1",

                },
                {
                    content: "Data Structures (II)",
                    link: "#",
                    id: "C2",
                },
                {
                    content: "Tree based DSA",
                    link: "#",
                    id: "C3",
                },
                {
                    content: "Graph based DSA",
                    link: "#",
                    id: "C4",

                },

            ],
        },
    ];
    $("#myTable").empty();
    let allCheckBox = document.querySelectorAll(".vehicle");

    let item = [];
    for (i = 0; i < allCheckBox.length; i++) {
        if (allCheckBox[i].checked) {
            item.push(allCheckBox[i].defaultValue);
        }
    }
    let final = [];
    for (j = 0; j < item.length; j++) {
        for (k = 0; k < courses.length; k++) {

            if (item[j] === courses[k].category) {

                final.push(courses[k]);
            }
        }
    }
}