const renderCateOnSideBar = (list, selection) => {
    list.forEach((val, idx) => {
        $(`
        <li>
            <span class="format-child btn-${val.category}"><a href="">${val.content}<i class="fas fa-chevron-down"></i></a></span>
            <ul class="dropright chickpea content-${val.category}">
                <li class="dsa1-${val.category}"><a href="">${val.itemsChild[0].content}<i class="fas fa-chevron-down"></i></a> 
                    <ul class="items1-${val.category}">
                        <li class="pd-20">${val.itemsChild[0].items[0].content}</li>
                        <li class="pd-20">${val.itemsChild[0].items[1].content}</li>
                        <li class="pd-20">${val.itemsChild[0].items[2].content}</li>
                    </ul>
                </li>
                <li class="dsa2-${val.category}"><a href="">${val.itemsChild[1].content}<i class="fas fa-chevron-down"></i></a>
                    <ul class="items2-${val.category}">
                        <li>${val.itemsChild[1].items[0].content}</li>
                        <li>${val.itemsChild[1].items[1].content}</li>
                    </ul>
                </li>
                <li class="tree-${val.category}"><a href="">${val.itemsChild[2].content}<i class="fas fa-chevron-down"></i></a>
                    <ul class="items3-${val.category}">
                        <li>${val.itemsChild[2].items[0].content}</li>
                        <li>${val.itemsChild[2].items[1].content}</li>
                        <li>${val.itemsChild[2].items[2].content}</li>
                    </ul>
                </li>
                <li class="graph-${val.category}"><a href="">${val.itemsChild[3].content}<i class="fas fa-chevron-down"></i></a>
                    <ul class="items4-${val.category}">
                        <li>${val.itemsChild[3].items[0].content}</li>
                        <li>${val.itemsChild[3].items[1].content}</li>
                    </ul>
                </li>
            </ul>
        </li>
        
        `).appendTo(selection);
        $(`.btn-${val.category}`).click(function(event) {
            $(`.content-${val.category}`).toggleClass("show");
            $(`.child-${val.category}`).toggleClass("rotate");
            event.preventDefault();
        });
        $(`.dsa1-${val.category}`).click(function(event) {
            $(`.items1-${val.category}`).toggleClass("show");
            event.preventDefault();
        });
        $(`.dsa2-${val.category}`).click(function(event) {
            $(`.items2-${val.category}`).toggleClass("show");
            event.preventDefault();
        });
        $(`.tree-${val.category}`).click(function(event) {
            $(`.items3-${val.category}`).toggleClass("show");
            event.preventDefault();
        });
        $(`.graph-${val.category}`).click(function(event) {
            $(`.items4-${val.category}`).toggleClass("show");
            event.preventDefault();
        });
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
                    items: [{
                            content: "Stack",
                        },
                        {
                            content: "Queue",
                        },
                        {
                            content: "Priority Queue",
                        },
                    ],
                },
                {
                    content: "Data Structures (II)",
                    link: "#",
                    id: "C2",
                    items: [{
                            content: "Single Linked List",
                        },
                        {
                            content: "Double Linked List",
                        },
                    ],
                },
                {
                    content: "Tree based DSA",
                    link: "#",
                    id: "C3",
                    items: [{
                            content: "Tree Data Structure",
                        },
                        {
                            content: "Binary Tree",
                        },
                        {
                            content: "Binary Search Tree",
                        },
                    ],
                },
                {
                    content: "Graph based DSA",
                    link: "#",
                    id: "C4",
                    items: [{
                            content: "Graph Data Structure",
                        },
                        {
                            content: "DFS Algorithm",
                        },
                    ],
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
                    items: [{
                            content: "Stack",
                        },
                        {
                            content: "Queue",
                        },
                        {
                            content: "Priority Queue",
                        },
                    ],
                },
                {
                    content: "Data Structures (II)",
                    link: "#",
                    id: "C2",
                    items: [{
                            content: "Single Linked List",
                        },
                        {
                            content: "Double Linked List",
                        },
                    ],
                },
                {
                    content: "Tree based DSA",
                    link: "#",
                    id: "C3",
                    items: [{
                            content: "Tree Data Structure",
                        },
                        {
                            content: "Binary Tree",
                        },
                        {
                            content: "Binary Search Tree",
                        },
                    ],
                },
                {
                    content: "Graph based DSA",
                    link: "#",
                    id: "C4",
                    items: [{
                            content: "Graph Data Structure",
                        },
                        {
                            content: "DFS Algorithm",
                        },
                    ],
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
                    items: [{
                            content: "Stack",
                        },
                        {
                            content: "Queue",
                        },
                        {
                            content: "Priority Queue",
                        },
                    ],
                },
                {
                    content: "Data Structures (II)",
                    link: "#",
                    id: "C2",
                    items: [{
                            content: "Single Linked List",
                        },
                        {
                            content: "Double Linked List",
                        },
                    ],
                },
                {
                    content: "Tree based DSA",
                    link: "#",
                    id: "C3",
                    items: [{
                            content: "Tree Data Structure",
                        },
                        {
                            content: "Binary Tree",
                        },
                        {
                            content: "Binary Search Tree",
                        },
                    ],
                },
                {
                    content: "Graph based DSA",
                    link: "#",
                    id: "C4",
                    items: [{
                            content: "Graph Data Structure",
                        },
                        {
                            content: "DFS Algorithm",
                        },
                    ],
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
                    items: [{
                            content: "Stack",
                        },
                        {
                            content: "Queue",
                        },
                        {
                            content: "Priority Queue",
                        },
                    ],
                },
                {
                    content: "Data Structures (II)",
                    link: "#",
                    id: "C2",
                    items: [{
                            content: "Single Linked List",
                        },
                        {
                            content: "Double Linked List",
                        },
                    ],
                },
                {
                    content: "Tree based DSA",
                    link: "#",
                    id: "C3",
                    items: [{
                            content: "Tree Data Structure",
                        },
                        {
                            content: "Binary Tree",
                        },
                        {
                            content: "Binary Search Tree",
                        },
                    ],
                },
                {
                    content: "Graph based DSA",
                    link: "#",
                    id: "C4",
                    items: [{
                            content: "Graph Data Structure",
                        },
                        {
                            content: "DFS Algorithm",
                        },
                    ],
                },
            ],
        },
    ];
    $("#myTable").empty();
    $(".list-content").empty();
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
                console.log(courses[k].category);
                final.push(courses[k]);
            }
        }
    }
    renderCateOnSideBar(final, "#myTable");
};