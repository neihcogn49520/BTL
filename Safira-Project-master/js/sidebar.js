const renderCateOnSideBar = (list, selection) => {
    list.forEach((val, idx) => {
        $(`
        <li>
            <span class="format-child btn-${val.category}"><a href="">${val.content}<i class="fas fa-chevron-down"></i></a></span>
            <ul class="dropright chickpea content-${val.category}">
                <li class="dsa1-${val.category}"><a href="">${val.itemsChild[0].content}<i class="fas fa-chevron-down"></i></a> 
                    <ul class="items1-${val.category}">
                        <li class="pd-20 ${val.category}-b1">${val.itemsChild[0].items[0].content}</li>
                        <li class="pd-20 ${val.category}-b2">${val.itemsChild[0].items[1].content}</li>
                        <li class="pd-20 ${val.category}-b3">${val.itemsChild[0].items[2].content}</li>
                    </ul>
                </li>
                <li class="dsa2-${val.category}"><a href="">${val.itemsChild[1].content}<i class="fas fa-chevron-down"></i></a>
                    <ul class="items2-${val.category}">
                        <li class="pd-20 ${val.category}-b4">${val.itemsChild[1].items[0].content}</li>
                        <li class="pd-20 ${val.category}-b5">${val.itemsChild[1].items[1].content}</li>
                    </ul>
                </li>
                <li class="tree-${val.category}"><a href="">${val.itemsChild[2].content}<i class="fas fa-chevron-down"></i></a>
                    <ul class="items3-${val.category}">
                        <li class="pd-20 ${val.category}-b6>${val.itemsChild[2].items[0].content}</li>
                        <li class="pd-20 ${val.category}-b7>${val.itemsChild[2].items[1].content}</li>
                        <li class="pd-20 ${val.category}-b8>${val.itemsChild[2].items[2].content}</li>
                    </ul>
                </li>
                <li class="graph-${val.category}"><a href="">${val.itemsChild[3].content}<i class="fas fa-chevron-down"></i></a>
                    <ul class="items4-${val.category}">
                        <li class="pd-20 ${val.category}-b9>${val.itemsChild[3].items[0].content}</li>
                        <li class="pd-20 ${val.category}-b10>${val.itemsChild[3].items[1].content}</li>
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
        rendercontent(val.category);
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
            content: "Implementations",
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

const rendercontent = (id) => {
    if (id == "Def") {
        $(`.${id}-b1`).click(function(e) {
            e.preventDefault();
            $(".services-safira").empty();
            $(".nd").toggleClass("nd-b1");
            $(".nd-b1").append(`
                <h1>Definition of Stack</h1>
                <p>A stack is a linear data structure that follows the principle of Last In First Out (LIFO). This means the last element inserted inside the stack is removed first.<br>You can think of the stack data structure as the pile of plates on top of another.</p>
                <img src="https://cdn.programiz.com/sites/tutorial2program/files/stack-of-plates_0.png" alt="Stack data structures" style="width: 50%">
                <p>Here, you can:<br>- Put a new plate on top<br>- Remove the top plate<br>And, if you want the plate at the bottom, you must first remove all the plates on top. This is exactly how the stack data structure works.</p>
            `);
        });
        $(`.${id}-b2`).click(function(e) {
            e.preventDefault();
            $(".services-safira").empty();
            $(".nd").toggleClass("nd-b2");
            $(".nd-b2").append(`
                <h1>Definition of Queue</h1>
                <p>A queue is a special type of queue in which each element is associated with a priority value. And, elements are served on the basis of their priority. That is, higher priority elements are served first.<br>However, if elements with the same priority occur, they are served according to their order in the queue.</p>
                <img src="https://cdn.programiz.com/sites/tutorial2program/files/queue.png" alt="Stack data structures" style="width: 50%">
                <p>In the above image, since 1 was kept in the queue before 2, it is the first to be removed from the queue as well. It follows the FIFO rule.<br>In programming terms, putting items in the queue is called enqueue, and removing items from the queue is called dequeue.</p>
            `);
        });
        $(`.${id}-b3`).click(function(e) {
            e.preventDefault();
            $(".services-safira").empty();
            $(".nd").toggleClass("nd-b3");
            $(".nd-b3").append(`
                <h1>Definition of Priority Queue</h1>
                <p>A priority queue is a special type of queue in which each element is associated with a priority value. And, elements are served on the basis of their priority. That is, higher priority elements are served first.<br>However, if elements with the same priority occur, they are served according to their order in the queue.</p>
                <p>In the above image, since 1 was kept in the queue before 2, it is the first to be removed from the queue as well. It follows the FIFO rule.<br>In programming terms, putting items in the queue is called enqueue, and removing items from the queue is called dequeue.</p>
                <p>Assigning Priority Value</p>
                <p>Generally, the value of the element itself is considered for assigning the priority. For example,<br><br>The element with the highest value is considered the highest priority element. However, in other cases, we can assume the element with the lowest value as the highest priority element.<br><br>We can also set priorities according to our needs.</p>
                <img src="https://cdn.programiz.com/sites/tutorial2program/files/Introduction.png" alt="Priority Queue data structures" style="width: 50%">
            `);
        });
        $(`.${id}-b4`).click(function(e) {
            e.preventDefault();
            $(".services-safira").empty();
            $(".nd").toggleClass("nd-b4");
            $(".nd-b4").append(`
                <h1>Definition of Single Linked List</h1>
                <p>A linked list is a linear data structure that includes a series of connected nodes. Here, each node stores the data and the address of the next node.</p>
                <p>You have to start somewhere, so we give the address of the first node a special name called HEAD. Also, the last node in the linked list can be identified because its next portion points to NULL.<br>Linked lists can be of multiple types: singly, doubly, and circular linked list. In this article, we will focus on the singly linked list.</p>
                <p>Each node has data and a pointer to the next node.</p>
                <img src="https://cdn.programiz.com/sites/tutorial2program/files/linked-list-concept_0.png" alt="Single Linked List" style="width: 50%">
            `);
        });
        $(`.${id}-b5`).click(function(e) {
            e.preventDefault();
            $(".services-safira").empty();
            $(".nd").toggleClass("nd-b5");
            $(".nd-b5").append(`
                <p>A doubly linked list is a type of linked list in which each node consists of 3 components:<br>- *prev - address of the previous node<br>- data - data item<br>- *next - address of next node</p>
                <img src="https://cdn.programiz.com/cdn/farfuture/nNhJNDR7OYb-5wiTX-x2gNaPHBy9YWCXJ_ohHDrQn6s/mtime:1620967408/sites/tutorial2program/files/dll-node.png" alt="Double Linked List" style="width: 50%">
            `);
        });
        $(`.${id}-b6`).click(function(e) {
            e.preventDefault();
            $(".services-safira").empty();
            $(".nd").toggleClass("nd-b6");
            $(".nd-b6").append(`
                <h1>Definition of Tree Data Structure</h1>
                <p>A tree is a nonlinear hierarchical data structure that consists of nodes connected by edges.</p>
                <img src="https://cdn.programiz.com/sites/tutorial2program/files/tree_0.png" alt="Tree Data Structure" style="width: 50%">
            `);
        });
        $(`.${id}-b7`).click(function(e) {
            e.preventDefault();
            $(".services-safira").empty();
            $(".nd").toggleClass("nd-b7");
            $(".nd-b7").append(`
                <h1>Definition of Binary Tree</h1>
                <p>A binary tree is a tree data structure in which each parent node can have at most two children. Each node of a binary tree consists of three items:<br><br>- data item<br><br>- address of left child<br><br>- address of right child</p>
                <img src="https://cdn.programiz.com/sites/tutorial2program/files/binary_tree_1.png" alt="Double Linked List" style="width: 50%">
            `);
        });
        $(`.${id}-b8`).click(function(e) {
            e.preventDefault();
            $(".services-safira").empty();
            $(".nd").toggleClass("nd-b8");
            $(".nd-b8").append(`
                <h1>Definition of Binary Search Tree</h1>
                <p>Binary search tree is a data structure that quickly allows us to maintain a sorted list of numbers.<br><br>- It is called a binary tree because each tree node has a maximum of two children.<br><br>- It is called a search tree because it can be used to search for the presence of a number in O(log(n)) time.<br><br>The properties that separate a binary search tree from a regular binary tree is<br><br>1. All nodes of left subtree are less than the root node<br><br>2. All nodes of right subtree are more than the root node<br><br>3. Both subtrees of each node are also BSTs i.e. they have the above two properties</p>
                <img src="https://cdn.programiz.com/sites/tutorial2program/files/bst-vs-not-bst.png" alt="Double Linked List" style="width: 50%">
                <p>The binary tree on the right isn't a binary search tree because the right subtree of the node 3 contains a value smaller than it.</p>
            `);
        });
        $(`.${id}-b9`).click(function(e) {
            e.preventDefault();
            $(".services-safira").empty();
            $(".nd").toggleClass("nd-b9");
            $(".nd-b9").append(`
                <h1>Definition of Graph Data Structure</h1>
                <p>A graph data structure is a collection of nodes that have data and are connected to other nodes.<br><br>Let's try to understand this through an example. On facebook, everything is a node. That includes User, Photo, Album, Event, Group, Page, Comment, Story, Video, Link, Note...anything that has data is a node.<br><br>Every relationship is an edge from one node to another. Whether you post a photo, join a group, like a page, etc., a new edge is created for that relationship.</p>
                <img src="https://cdn.programiz.com/sites/tutorial2program/files/facebook-graph.png" alt="Graph Data Structure" style="width: 50%">
                <p>Let's try to understand this through an example. On facebook, everything is a node. That includes User, Photo, Album, Event, Group, Page, Comment, Story, Video, Link, Note...anything that has data is a node.<br>Every relationship is an edge from one node to another. Whether you post a photo, join a group, like a page, etc., a new edge is created for that relationship.</p>
                <img src="https://cdn.programiz.com/sites/tutorial2program/files/graph-vertices-edges_0.png" alt="Graph Data Structure" style="width: 50%">
                <p>In the graph,</p>
                <p>V = {0, 1, 2, 3}<br>E = {(0,1), (0,2), (0,3), (1,2)}<br>G = {V, E}</p>
            `);
        });
        $(`.${id}-b10`).click(function(e) {
            e.preventDefault();
            $(".services-safira").empty();
            $(".nd").toggleClass("nd-b10");
            $(".nd-b10").append(`
                <h1>Definition of DFS Algorithm</h1>
                <p>Depth first Search or Depth first traversal is a recursive algorithm for searching all the vertices of a graph or tree data structure. Traversal means visiting all the nodes of a graph.</p>
                <p>A standard DFS implementation puts each vertex of the graph into one of two categories:<br><br>1. Visited<br><br>2. Not Visited<br><br>The purpose of the algorithm is to mark each vertex as visited while avoiding cycles.<br><br>The DFS algorithm works as follows:<br><br>1. Start by putting any one of the graph's vertices on top of a stack.<br><br>2. Take the top item of the stack and add it to the visited list.<br><br>3. Create a list of that vertex's adjacent nodes. Add the ones which aren't in the visited list to the top of the stack.<br><br>4. Keep repeating steps 2 and 3 until the stack is empty.</p>
            `);
        });
    } else if (id == "Ope") {
        $(`.${id}-b1`).click(function(e) {
            e.preventDefault();
            $(".services-safira").empty();
            $(".nd").toggleClass("nd-b1");
            $(".nd-b1").append(`
                <h1>Operation of Stack</h1>
                <h2>LIFO Priciple</h2>
                <p>In programming terms, putting an item on top of the stack is called push and removing an item is called pop.<br>In the above image, although item 3 was kept last, it was removed first. This is exactly how the LIFO (Last In First Out) Principle works.</p>
                <img src="https://cdn.programiz.com/sites/tutorial2program/files/stack.png" alt="Stack LIFO" style="width: 50%">
                <h2>Basic operation of Stack</h2>
                <p>There are some basic operations that allow us to perform different actions on a stack.<br>- Push: Add an element to the top of a stack<br>- Pop: Remove an element from the top of a stack<br>- IsEmpty: Check if the stack is empty<br>- IsFull: Check if the stack is full<br>- Peek: Get the value of the top element without removing it</p>
                <h2>Working of Stack</h2>
                <p>The operations work as follows:<br>1. A pointer called TOP is used to keep track of the top element in the stack.<br>2. When initializing the stack, we set its value to -1 so that we can check if the stack is empty by comparing TOP == -1.<br>3. On pushing an element, we increase the value of TOP and place the new element in the position pointed to by TOP.<br>4. On popping an element, we return the element pointed to by TOP and reduce its value.<br>5. Before pushing, we check if the stack is already full.<br>6. Before popping, we check if the stack is already empty</p>
            `);
        });
        $(`.${id}-b2`).click(function(e) {
            e.preventDefault();
            $(".services-safira").empty();
            $(".nd").toggleClass("nd-b2");
            $(".nd-b2").append(`
                <h1>Operation of Queue</h1>
                <h2>Working of Queue</h2>
                <p>Queue operations work as follows:<br>- two pointers FRONT and REAR<br>- FRONT track the first element of the queue<br>- REAR track the last element of the queue<br>- initially, set value of FRONT and REAR to -1</p>
                <h2>Basic operation of Queue</h2>
                <p>A queue is an object (an abstract data structure - ADT) that allows the following operations:<br>- Enqueue: Add an element to the end of the queue<br>- Dequeue: Remove an element from the front of the queue<br>- IsEmpty: Check if the queue is empty<br>- IsFull: Check if the queue is full<br>- Peek: Get the value of the front of the queue without removing it</p>
                <h2>Enqueue Operation</h2>
                <p>- check if the queue is full<br>- for the first element, set the value of FRONT to 0<br>- increase the REAR index by 1<br>- add the new element in the position pointed to by REAR</p>
                <h2>Dequeue Operation</h2>
                <p>- check if the queue is empty<br>- return the value pointed by FRONT<br>- increase the FRONT index by 1<br>- for the last element, reset the values of FRONT and REAR to -1</p>
            `);
        });
        $(`.${id}-b3`).click(function(e) {
            e.preventDefault();
            $(".services-safira").empty();
            $(".nd").toggleClass("nd-b3");
            $(".nd-b3").append(`
                <h1>Operation of Priority Queue</h1>
                <p>Basic operations of a priority queue are inserting, removing, and peeking elements.</p>
                <h2>1. Inserting an Element into the Priority Queue</h2>
                <p>Inserting an element into a priority queue (max-heap) is done by the following steps.<br><br>- Insert the new element at the end of the tree.</p>
                <img src="https://cdn.programiz.com/sites/tutorial2program/files/insert-1_0.png" alt="Priority Queue data structures" style="width: 50%">
                <p>- Heapify the tree.</p>
                <img src="https://cdn.programiz.com/sites/tutorial2program/files/insert-2_0.png" alt="Priority Queue data structures" style="width: 50%">
                <p>- For Min Heap, the above algorithm is modified so that parentNode is always smaller than newNode.</p>
                <h2>2. Deleting an Element from the Priority Queue</h2>
                <p>Deleting an element from a priority queue (max-heap) is done as follows:<br>- Select the element to be deleted.</p>
                <img src="https://cdn.programiz.com/sites/tutorial2program/files/delete-1_0.png" alt="Priority Queue data structures" style="width: 50%">
                <p>- Swap it with the last element.</p>
                <img src="https://cdn.programiz.com/sites/tutorial2program/files/delete-2_0.png" alt="Priority Queue data structures" style="width: 50%">
                <p>- Remove the last element.</p>
                <img src="https://cdn.programiz.com/sites/tutorial2program/files/delete-3.png" alt="Priority Queue data structures" style="width: 50%">
                <p>- Heapify the tree.</p>
                <img src="https://cdn.programiz.com/sites/tutorial2program/files/delete-4.png" alt="Priority Queue data structures" style="width: 50%">
                <p>- For Min Heap, the above algorithm is modified so that the both childNodes are smaller than currentNode.</p>
                <h2>3. Peeking from the Priority Queue (Find max/min)</h2>
                <p>Peek operation returns the maximum element from Max Heap or minimum element from Min Heap without deleting the node.<br>For both Max heap and Min Heap: return rootNode</p>
                <h2>4. Extract-Max/Min from the Priority Queue</h2>
                <p>Extract-Max returns the node with maximum value after removing it from a Max Heap whereas Extract-Min returns the node with minimum value after removing it from Min Heap.</p>
            `);
        });
        $(`.${id}-b4`).click(function(e) {
            e.preventDefault();
            $(".services-safira").empty();
            $(".nd").toggleClass("nd-b4");
            $(".nd-b4").append(`
                <h1>Operation of Single Linked List</h1>
                <p>- Traversal can occur in one way only (forward direction).<br><br>- It requires less space.<br><br>- It can be implemented on the stack.</p>
                <h2>Representation of Linked List</h2>
                <p>Let's see how each node of the linked list is represented. Each node consists:<br><br>    - A data item<br>    - An address of another node<br><br>Understanding the structure of a linked list node is the key to having a grasp on it.<br>Each struct node has a data item and a pointer to another struct node. Let us create a simple Linked List with three items to understand how this works.<br><br>In just a few steps, we have created a simple linked list with three nodes.</p>
                <img src="https://cdn.programiz.com/sites/tutorial2program/files/linked-list-with-data.png" alt="Priority Queue data structures" style="width: 50%">
                <p>The power of a linked list comes from the ability to break the chain and rejoin it. E.g. if you wanted to put an element 4 between 1 and 2, the steps would be:<br>- Create a new struct node and allocate memory to it.<br>- Add its data value as 4<br>Point its next pointer to the struct node containing 2 as the data value<br>- Change the next pointer of '1' to the node we just created.<br>Doing something similar in an array would have required shifting the positions of all the subsequent elements.</p>
            `);
        });
        $(`.${id}-b5`).click(function(e) {
            e.preventDefault();
            $(".services-safira").empty();
            $(".nd").toggleClass("nd-b5");
            $(".nd-b5").append(`
                <h1>Operation of Double Linked List</h1>
                <h2>Insertion on a Doubly Linked List</h2>
                <p>Pushing a node to a doubly-linked list is similar to pushing a node to a linked list, but extra work is required to handle the pointer to the previous node.<br><br>We can insert elements at 3 different positions of a doubly-linked list:<br><br>- Insertion at the beginning<br><br>- Insertion in-between nodes<br><br>- Insertion at the End<br><br>Suppose we have a double-linked list with elements 1, 2, and 3.</p>
                <h2>Deletion from a Doubly Linked List</h2>
                <p>Similar to insertion, we can also delete a node from 3 different positions of a doubly linked list.<br><br>- Delete the First Node of Doubly Linked List<br><br>- Deletion of the Inner Node<br><br>- Delete the Last Node of Doubly Linked List</p>
            `);
        });
        $(`.${id}-b6`).click(function(e) {
            e.preventDefault();
            $(".services-safira").empty();
            $(".nd").toggleClass("nd-b6");
            $(".nd-b6").append(`
                <h1>Operation of Tree Data Structure</h1>
                <h2>Why Tree Data Structure?</h2>
                <p>Other data structures such as arrays, linked list, stack, and queue are linear data structures that store data sequentially. In order to perform any operation in a linear data structure, the time complexity increases with the increase in the data size. But, it is not acceptable in today's computational world.<br>Different tree data structures allow quicker and easier access to the data as it is a non-linear data structure.</p>
                <h2>Tree Terminologies</h2>
                <p>A node is an entity that contains a key or value and pointers to its child nodes.<br><br>The last nodes of each path are called leaf nodes or external nodes that do not contain a link/pointer to child nodes.<br>The node having at least a child node is called an internal node.</p>
                <p>It is the link between any two nodes.</p>
                <img src="https://cdn.programiz.com/sites/tutorial2program/files/nodes-edges_0.png" alt="Tree Data Structure" style="width: 50%">
                <p>It is the topmost node of a tree.</p>
                <p>The height of a node is the number of edges from the node to the deepest leaf (ie. the longest path from the node to a leaf node).</p>
                <p>The depth of a node is the number of edges from the root to the node.</p>
                <p>The height of a Tree is the height of the root node or the depth of the deepest node.</p>
                <img src="https://cdn.programiz.com/sites/tutorial2program/files/height-depth_1.png" alt="Tree Data Structure" style="width: 50%">
                <p>The degree of a node is the total number of branches of that node.</p>
                <p>A collection of disjoint trees is called a forest.<br>You can create a forest by cutting the root of a tree.</p>
                <img src="https://cdn.programiz.com/sites/tutorial2program/files/forest_0.png" alt="Tree Data Structure" style="width: 50%">
                <h2>Types of Tree</h2>
                <p>- Binary Tree<br>- Binary Search Tree<br>- B-Tree</p>
            `);
        });
        $(`.${id}-b7`).click(function(e) {
            e.preventDefault();
            $(".services-safira").empty();
            $(".nd").toggleClass("nd-b7");
            $(".nd-b7").append(`
                <h1>Operation of Binary Tree</h1>
                <h2>Types of Binary Tree</h2>
                <h3>1. Full Binary Tree</h3>
                <p>A full Binary tree is a special type of binary tree in which every parent node/internal node has either two or no children.</p>
                <img src="https://cdn.programiz.com/sites/tutorial2program/files/full-binary-tree_0.png" alt="Double Linked List" style="width: 50%">
                
                <h3>2. Perfect Binary Tree</h3>
                <p>A perfect binary tree is a type of binary tree in which every internal node has exactly two child nodes and all the leaf nodes are at the same level.</p>
                <img src="https://cdn.programiz.com/sites/tutorial2program/files/perfect-binary-tree_0.png" alt="Double Linked List" style="width: 50%">
                
                <h3>3. Complete Binary Tree</h3>
                <p>A complete binary tree is just like a full binary tree, but with two major differences<br><br>1. Every level must be completely filled<br><br>2. All the leaf elements must lean towards the left.<br><br>3. The last leaf element might not have a right sibling i.e. a complete binary tree doesn't have to be a full binary tree.</p>
                <img src="https://cdn.programiz.com/sites/tutorial2program/files/complete-binary-tree_0.png" alt="Double Linked List" style="width: 50%">
                
                <h3>4. Degenerate or Pathological Tree</h3>
                <p>A degenerate or pathological tree is the tree having a single child either left or right.</p>
                <img src="https://cdn.programiz.com/sites/tutorial2program/files/degenerate-binary-tree_0.png" alt="Double Linked List" style="width: 50%">
                
                <h3>5. Skewed Binary Tree</h3>
                <p>A skewed binary tree is a pathological/degenerate tree in which the tree is either dominated by the left nodes or the right nodes. Thus, there are two types of skewed binary tree: left-skewed binary tree and right-skewed binary tree.</p>
                <img src="https://cdn.programiz.com/sites/tutorial2program/files/skewed-binary-tree_0.png" alt="Double Linked List" style="width: 50%">
                
                <h3>6. Balanced Binary Tree</h3>
                <p>It is a type of binary tree in which the difference between the height of the left and the right subtree for each node is either 0 or 1.</p>
                <img src="https://cdn.programiz.com/sites/tutorial2program/files/height-balanced_1.png" alt="Double Linked List" style="width: 50%">
            `);
        });
        $(`.${id}-b8`).click(function(e) {
            e.preventDefault();
            $(".services-safira").empty();
            $(".nd").toggleClass("nd-b8");
            $(".nd-b8").append(`
                <h1>Operation of Binary Search Tree</h1>
                <h2>Search Operation</h2>
                <p>The algorithm depends on the property of BST that if each left subtree has values below root and each right subtree has values above the root.<br><br>If the value is below the root, we can say for sure that the value is not in the right subtree; we need to only search in the left subtree and if the value is above the root, we can say for sure that the value is not in the left subtree; we need to only search in the right subtree.</p>
                <p>Let us try to visualize this with a diagram.</p>
                <img src="https://cdn.programiz.com/sites/tutorial2program/files/bst-search-1.png" alt="Search Operation 1" style="width: 50%">
                <img src="https://cdn.programiz.com/sites/tutorial2program/files/bst-search-2.png" alt="Search Operation 2" style="width: 50%">
                <img src="https://cdn.programiz.com/sites/tutorial2program/files/bst-search-3.png" alt="Search Operation 3" style="width: 50%">
                <img src="https://cdn.programiz.com/sites/tutorial2program/files/bst-search-1.png" alt="Search Operation 4" style="width: 50%">
                <p>If the value is found, we return the value so that it gets propagated in each recursion step as shown in the image below.<br><br>If you might have noticed, we have called return search(struct node*) four times. When we return either the new node or NULL, the value gets returned again and again until search(root) returns the final result.</p>
                <img src="https://cdn.programiz.com/sites/tutorial2program/files/bst-search-5.png" alt="Search Operation 5" style="width: 50%">
                <p>If the value is not found, we eventually reach the left or right child of a leaf node which is NULL and it gets propagated and returned.</p>
                <h2>Insert Operation</h2>
                <p>Inserting a value in the correct position is similar to searching because we try to maintain the rule that the left subtree is lesser than root and the right subtree is larger than root.<br><br>We keep going to either right subtree or left subtree depending on the value and when we reach a point left or right subtree is null, we put the new node there.</p>
                <p>The algorithm isn't as simple as it looks. Let's try to visualize how we add a number to an existing BST.</p>
                <img src="https://cdn.programiz.com/sites/tutorial2program/files/bst-insert-1.png" alt="Double Linked List" style="width: 50%">
                <img src="https://cdn.programiz.com/sites/tutorial2program/files/bst-insert-2.png" alt="Double Linked List" style="width: 50%">
                <img src="https://cdn.programiz.com/sites/tutorial2program/files/bst-insert-3.png" alt="Double Linked List" style="width: 50%">
                <img src="https://cdn.programiz.com/sites/tutorial2program/files/bst-insert-4.png" alt="Double Linked List" style="width: 50%">
                <p>We have attached the node but we still have to exit from the function without doing any damage to the rest of the tree. This is where the return node; at the end comes in handy. In the case of NULL, the newly created node is returned and attached to the parent node, otherwise the same node is returned without any change as we go up until we return to the root.<br><br>This makes sure that as we move back up the tree, the other node connections aren't changed.</p>
                <img src="https://cdn.programiz.com/sites/tutorial2program/files/bst-insert-5.png" alt="Double Linked List" style="width: 50%">
                <h2>Deletion Operation</h2>
                <p>There are three cases for deleting a node from a binary search tree.</p>
                <p>In the first case, the node to be deleted is the leaf node. In such a case, simply delete the node from the tree.</p>
                <p>In the second case, the node to be deleted lies has a single child node. In such a case follow the steps below:<br><br>1. Replace that node with its child node.<br><br>2. Remove the child node from its original position.</p>
                <p>In the third case, the node to be deleted has two children. In such a case follow the steps below:<br><br>1. Get the inorder successor of that node.<br><br>2. Replace the node with the inorder successor.<br><br>3. Remove the inorder successor from its original position.</p>
            `);
        });
        $(`.${id}-b9`).click(function(e) {
            e.preventDefault();
            $(".services-safira").empty();
            $(".nd").toggleClass("nd-b9");
            $(".nd-b9").append(`
                <h1>Operation of Graph Data Structure</h1>
                <p>The most common graph operations are:<br><br>- Check if the element is present in the graph<br><br>- Graph Traversal<br><br>- Add elements(vertex, edges) to graph<br><br>- Finding the path from one vertex to another</p>
                <h2>Graph Terminologies</h2>
                <p>Adjacency: A vertex is said to be adjacent to another vertex if there is an edge connecting them. Vertices 2 and 3 are not adjacent because there is no edge between them.<br><br>Path: A sequence of edges that allows you to go from vertex A to vertex B is called a path. 0-1, 1-2 and 0-2 are paths from vertex 0 to vertex 2.<br><br>Directed Graph: A graph in which an edge (u,v) doesn't necessarily mean that there is an edge (v, u) as well. The edges in such a graph are represented by arrows to show the direction of the edge.</p>
                <h2>Graph Representation</h2>
                <p>Graphs are commonly represented in two ways:</p>
                <h3>1. Adjacency Matrix</h3>
                <p>An adjacency matrix is a 2D array of V x V vertices. Each row and column represent a vertex.<br><br>If the value of any element a[i][j] is 1, it represents that there is an edge connecting vertex i and vertex j.<br><br>The adjacency matrix for the graph we created above is</p>
                <img src="https://cdn.programiz.com/sites/tutorial2program/files/adjacency-matrix_1.png" alt="Graph Data Structure" style="width: 50%">
                <p>Since it is an undirected graph, for edge (0,2), we also need to mark edge (2,0); making the adjacency matrix symmetric about the diagonal.<br><br>Edge lookup(checking if an edge exists between vertex A and vertex B) is extremely fast in adjacency matrix representation but we have to reserve space for every possible link between all vertices(V x V), so it requires more space.</p>
                <h3>2. Adjacency List</h3>
                <p>An adjacency list represents a graph as an array of linked lists.<br><br>The index of the array represents a vertex and each element in its linked list represents the other vertices that form an edge with the vertex.<br><br>The adjacency list for the graph we made in the first example is as follows:</p>
                <img src="https://cdn.programiz.com/sites/tutorial2program/files/adjacency-list.png" alt="Search Operation 2" style="width: 50%">
                <p>An adjacency list is efficient in terms of storage because we only need to store the values for the edges. For a graph with millions of vertices, this can mean a lot of saved space.</p>
            `);
        });
        $(`.${id}-b10`).click(function(e) {
            e.preventDefault();
            $(".services-safira").empty();
            $(".nd").toggleClass("nd-b10");
            $(".nd-b10").append(`
                <h1>Operation of DFS Algorithm</h1>
                <h2>Depth First Search Example</h2>
                <p>Let's see how the Depth First Search algorithm works with an example. We use an undirected graph with 5 vertices.</p>
                <img src="https://cdn.programiz.com/sites/tutorial2program/files/graph-dfs-step-0.png" alt="Graph Data Structure" style="width: 50%">
                <p>We start from vertex 0, the DFS algorithm starts by putting it in the Visited list and putting all its adjacent vertices in the stack.</p>
                <img src="https://cdn.programiz.com/sites/tutorial2program/files/graph-dfs-step-1.png" alt="Graph Data Structure" style="width: 50%">
                <p>Next, we visit the element at the top of stack i.e. 1 and go to its adjacent nodes. Since 0 has already been visited, we visit 2 instead.</p>
                <img src="https://cdn.programiz.com/sites/tutorial2program/files/graph-dfs-step-2.png" alt="Graph Data Structure" style="width: 50%">
                <p>Vertex 2 has an unvisited adjacent vertex in 4, so we add that to the top of the stack and visit it.</p>
                <img src="https://cdn.programiz.com/sites/tutorial2program/files/graph-dfs-step-3.png" alt="Graph Data Structure" style="width: 50%">
                <img src="https://cdn.programiz.com/sites/tutorial2program/files/graph-dfs-step-4.png" alt="Graph Data Structure" style="width: 50%">
                <p>After we visit the last element 3, it doesn't have any unvisited adjacent nodes, so we have completed the Depth First Traversal of the graph.</p>
                <img src="https://cdn.programiz.com/sites/tutorial2program/files/graph-dfs-step-5.png" alt="Search Operation 2" style="width: 50%">
            `);
        });
    } else if (id == "Com") {
        $(`.${id}-b1`).click(function(e) {
            e.preventDefault();
            $(".services-safira").empty();
            $(".nd").toggleClass("nd-b1");
            $(".nd-b1").append(`
                <h1>Implementations of Stack</h1>
                <p>Stack Implementations in C++<br><br>The most common stack implementation is using arrays, but it can also be implemented using lists.</p>
                <pre class="exec" style="max-height: 600px; width: 660px;">
                    <code class="cpp hljs">
                    // Stack implementation in C++<br><br>#include <stdlib.h><br>#include <iostream><br>using namespace std;<br><br>#define MAX 10<br>int size = 0;<br><br>// Creating a stack<br>struct stack {<br>  int items[MAX];<br>  int top;<br>};<br>typedef struct stack st;<br><br>void createEmptyStack(st *s) {<br>  s->top = -1;<br>}<br><br>// Check if the stack is full<br>int isfull(st *s) {<br>  if (s->top == MAX - 1)<br>    return 1;<br>  else<br>    return 0;<br>}<br><br>// Check if the stack is empty<br>int isempty(st *s) {<br>  if (s->top == -1)<br>    return 1;<br>  else<br>    return 0;<br>}<br><br>// Add elements into stack<br>void push(st *s, int newitem) {<br>  if (isfull(s)) {<br>    cout << “STACK FULL”;<br>  } else {<br>    s->top++;<br>    s->items[s->top] = newitem;<br>  }<br>  size++;<br>}<br><br>// Remove element from stack<br>void pop(st *s) {<br>  if (isempty(s)) {<br>    cout << “\n STACK EMPTY \n”;<br>  } else {<br>    cout << “Item popped= ” << s->items[s->top];<br>    s->top--;<br>  }<br>  size--;<br>  cout << endl;<br>}<br><br>// Print elements of stack<br>void printStack(st *s) {<br>  printf(“Stack: ”);<br>  for (int i = 0; i < size; i++) {<br>    cout << s->items[i] << “  ”;<br>  }<br>  cout << endl;<br>}<br><br>// Driver code<br>int main() {<br>  int ch;<br>  st *s = (st *)malloc(sizeof(st));<br><br>  createEmptyStack(s);<br><br>  push(s, 1);<br>  push(s, 2);<br>  push(s, 3);<br>  push(s, 4);<br><br>  printStack(s);<br><br>  pop(s);<br><br>cout << “\nAfter popping out\n”;<br>printStack(s);<br>}
                    </code>
                </pre>
                <p>For the array-based implementation of a stack, the push and pop operations take constant time, i.e. O(1).</p>
            `);
        });
        $(`.${id}-b2`).click(function(e) {
            e.preventDefault();
            $(".services-safira").empty();
            $(".nd").toggleClass("nd-b2");
            $(".nd-b2").append(`
                <h1>Implementations of Queue</h1>
                <p>We usually use arrays to implement queues in C++, we use lists.</p>
                <pre class="exec" style="max-height: 600px; width: 660px;">
                    <code class="cpp hljs">
                        // Queue implementation in C++<br><br>#include <iostream><br>#define SIZE 5<br><br>using namespace std;<br><br>class Queue {<br>   private:<br>  int items[SIZE], front, rear;<br><br>   public:<br>  Queue() {<br>    front = -1;<br>    rear = -1;<br>  }<br><br>  bool isFull() {<br>    if (front == 0 && rear == SIZE - 1) {<br>     return true;<br>    }<br>    return false;<br>  }<br><br>  bool isEmpty() {<br>    if (front == -1)<br>     return true;<br>    else<br>     return false;<br>  }<br><br>  void enQueue(int element) {<br>    if (isFull()) {<br>      cout << “Queue is full”;<br>    } else {<br>      if (front == -1) front = 0;<br>      rear++;<br>      items[rear] = element;<br>      cout << endl << “Inserted”  << element << endl;
                        <br><br>  int deQueue() {<br>    int element;<br>    if (isEmpty()) {<br>      cout << “Queue is empty” << endl;<br>      return (-1);<br>    } else {<br>      element = items[front];<br>      if (front >= rear) {<br>        front = -1;<br>        rear = -1;<br>      } /* Q has only one element, so we reset the queue after deleting it. */<br>      else {<br>        front++;<br>      }<br>      cout << endl<br>        << “Deleted -> ” << element << endl;<br>      return (element);<br>    }<br>  }<br><br>  void display() {<br>    /* Function to display elements of Queue */<br>    int i;<br>    if (isEmpty()) {<br>      cout << endl<br>        << “Empty Queue” << endl;<br>    } else {<br>      cout << endl<br>        << “Front index-> ” << front;<br>      cout << endl<br>        << “Items -> ”;<br>      for (i = front; i <= rear; i++)<br>        cout << items[i] << “  ”;<br>      cout << endl << “Rear index->”  << rear << endl;<br>    }<br>  }<br>};<br><br>int main() {<br>  Queue q;<br><br>  //deQueue is not possible on empty queue<br>  q.deQueue();<br><br>  //enQueue 5 elements<br>  q.enQueue(1);<br>  q.enQueue(2);<br>  q.enQueue(3);<br>  q.enQueue(4);<br>  q.enQueue(5);<br><br>  // 6th element can't be added to because the queue is full<br>  q.enQueue(6);<br><br>  q.display();<br><br>  //deQueue removes element entered first i.e. 1<br>  q.deQueue();<br><br>  //Now we have just 4 elements<br>  q.display();<br><br>  return 0;<br>}
                    </code>
                </pre>
                <p>The complexity of enqueue and dequeue operations in a queue using an array is O(1). If you use pop(N) in python code, then the complexity might be O(n) depending on the position of the item to be popped.</p>
            `);
        });
        $(`.${id}-b3`).click(function(e) {
            e.preventDefault();
            $(".services-safira").empty();
            $(".nd").toggleClass("nd-b3");
            $(".nd-b3").append(`
                <h1>Implementations of Priority Queue</h1>
                <p>Priority queue can be implemented using an array, a linked list, a heap data structure, or a binary search tree. Among these data structures, heap data structure provides an efficient implementation of priority queues.</p>
                <pre class="exec" style="max-height: 600px; width: 660px;">
                <code class="cpp hljs">
                // Priority Queue implementation in C++<br><br>#include <iostream><br>#include <vector><br>using namespace std;<br><br>// Function to swap position of two elements<br>void swap(int *a, int *b) {<br>   int temp = *b;<br>   *b = *a;<br>   *a = temp;<br>}<br><br>// Function to heapify the tree<br>void heapify(vector<int> &hT, int i) {<br>   int size = hT.size();<br><br>   // Find the largest among root, left child and right child<br>   int largest = i;<br>   int l = 2 * i + 1;<br>   int r = 2 * i + 2;<br>   if (l < size && hT[l] > hT[largest])<br>      largest = l;<br>   if (r < size && hT[r] > hT[largest])<br>      largest = r;<br><br>   // Swap and continue heapifying if root is not largest<br>   if (largest != i) {<br>     swap(&hT[i], &hT[largest]);<br>     heapify(hT, largest);<br>   }<br>}
                <br><br>// Function to insert an element into the tree<br>void insert(vector<int> &hT, int newNum) {<br>  int size = hT.size();<br>  if (size == 0) {<br>    hT.push_back(newNum);<br>  } else {<br>    hT.push_back(newNum);<br>    for (int i = size / 2 - 1; i >= 0; i--) {<br>      heapify(hT, i);<br>    }<br>  }<br>}<br><br>// Function to delete an element from the tree<br>void deleteNode(vector<int> &hT, int num) {<br>  int size = hT.size();<br>  int i;<br>  for (i = 0; i < size; i++) {<br>    if (num == hT[i])<br>      break;<br>  }<br>  swap(&hT[i], &hT[size - 1]);<br><br>  hT.pop_back();<br>  for (int i = size / 2 - 1; i >= 0; i--) {<br>    heapify(hT, i);<br>  }<br>}<br><br>// Print the tree<br>void printArray(vector<int> &hT) {<br>  for (int i = 0; i < hT.size(); ++i)<br>    cout << hT[i] << “ ”;<br>  cout << “\n”;<br>}<br><br>// Driver code<br>int main() {<br>  vector<int> heapTree;<br><br>  insert(heapTree, 3);<br>  insert(heapTree, 4);<br>  insert(heapTree, 9);<br>  insert(heapTree, 5);<br>  insert(heapTree, 2);<br><br>  cout << “Max-Heap array: ”;<br>  printArray(heapTree);<br><br>  deleteNode(heapTree, 4);<br><br>  cout << “After deleting an element: ”;<br><br>  printArray(heapTree);<br>}
                </code></pre>
            `);
        });
        $(`.${id}-b4`).click(function(e) {
            e.preventDefault();
            $(".services-safira").empty();
            $(".nd").toggleClass("nd-b4");
            $(".nd-b4").append(`
                <h1>Implementations of Single Linked List</h1>
                <p>Single Linked List implementation in C++:</p>
                <p>Node is represented as:</p>
                <pre class="exec" style="max-height: 600px; width: 660px;">
                <code class="cpp hljs">
                struct node {<br>  int data;<br>  struct node *next;<br>}
                </code></pre>
                <p>A three-member singly linked list can be created as:</p>
                <pre class="exec" style="max-height: 600px; width: 660px;">
                <code class="cpp hljs">
                /* Initialize nodes */<br>struct node *head;<br>struct node *one = NULL;<br>struct node *two = NULL;<br>struct node *three = NULL;<br><br>/* Allocate memory */<br>one = malloc(sizeof(struct node));<br>two = malloc(sizeof(struct node));<br>three = malloc(sizeof(struct node));<br><br>/* Assign data values */<br>one->data = 1;<br>two->data = 2;<br>three->data = 3;<br><br>/* Connect nodes */<br>one->next = two;<br>two->next = three;<br>three->next = NULL;<br><br>/* Save address of first node in head */<br>head = one;
                </code></pre>
            `);
        });
        $(`.${id}-b5`).click(function(e) {
            e.preventDefault();
            $(".services-safira").empty();
            $(".nd").toggleClass("nd-b5");
            $(".nd-b5").append(`
                <h1>Implementations of Double Linked List</h1>
                <p>Double Linked List implementation in C++:</p>
                <p>A node is represented as</p>
                <pre class="exec" style="max-height: 600px; width: 660px;">
                    <code class="cpp hljs">
                      struct node {<br>  int data;<br>  struct node *next;<br>  struct node *prev;<br>}
                    </code>
                </pre>
                <p>A three-member doubly linked list can be created as</p>
                <pre class="exec" style="max-height: 600px; width: 660px;">
                    <code class="cpp hljs">
                      /* Initialize nodes */<br>struct node *head;<br>struct node *one = NULL;<br>struct node *two = NULL;<br>struct node *three = NULL;<br><br>/* Allocate memory */<br>one = malloc(sizeof(struct node));<br>two = malloc(sizeof(struct node));<br>three = malloc(sizeof(struct node));<br><br>/* Assign data values */<br>one->data = 1;<br>two->data = 2;<br>three->data = 3;<br><br>/* Connect nodes */<br>one->next = two;<br>one->prev = NULL;<br><br>two->next = three;<br>two->prev = one;<br><br>three->next = NULL;<br>three->prev = two;<br><br>/* Save address of first node in head */<br>head = one;
                    </code>
                </pre>
                <h2>1. Complexity of Insertion Operation</h2>
                <p>- The insertion operations that do not require traversal have the time complexity of O(1).<br><br>- And, insertion that requires traversal has time complexity of O(n).<br><br>- The space complexity is O(1).</p>
                <h2>2. Complexity of Deletion Operation</h2>
                <p>- All deletion operations run with time complexity of O(1).<br><br>- And, the space complexity is O(1).</p>
            `);
        });
        $(`.${id}-b7`).click(function(e) {
            e.preventDefault();
            $(".services-safira").empty();
            $(".nd").toggleClass("nd-b7");
            $(".nd-b7").append(`
                <h1>Implementations of Binary Tree</h1>
                <h2>Binary Tree Representation</h2>
                <p>A node of a binary tree is represented by a structure containing a data part and two pointers to other structures of the same type.</p>
                <pre class="exec" style="max-height: 600px; width: 660px;">
                    <code class="cpp hljs">
                      // Binary Tree in C++<br><br>#include <stdlib.h><br>#include <iostream><br>using namespace std;<br><br>struct node {<br>  int data;<br>  struct node *left;<br>  struct node *right;<br>};<br><br>// New node creation<br>struct node *newNode(int data) {<br>  struct node *node = (struct node *)malloc(sizeof(struct node));<br><br>  node->data = data;<br><br>  node->left = NULL;<br>  node->right = NULL;<br>  return (node);<br>}<br><br>// Traverse Preorder<br>void traversePreOrder(struct node *temp) {<br>  if (temp != NULL) {<br>    cout << “ ” << temp->data;<br>    traversePreOrder(temp->left);<br>    traversePreOrder(temp->right);<br>  }<br>}<br><br>// Traverse Inorder<br>void traverseInOrder(struct node *temp) {<br>  if (temp != NULL) {<br>    traverseInOrder(temp->left);<br>    cout << “ ” << temp->data;<br>    traverseInOrder(temp->right);<br>  }<br>    }<br><br>// Traverse Postorder<br>void traversePostOrder(struct node *temp) {<br>  if (temp != NULL) {<br>    traversePostOrder(temp->left);<br>    traversePostOrder(temp->right);<br>    cout << “ ” << temp->data;<br>  }<br>}<br><br>int main() {<br>  struct node *root = newNode(1);<br>  root->left = newNode(2);<br>  root->right = newNode(3);<br>  root->left->left = newNode(4);<br><br>  cout << “preorder traversal: ”;<br>  traversePreOrder(root);<br>  cout << “\nInorder traversal: ”;<br>  traverseInOrder(root);<br>  cout << “\nPostorder traversal: ”;<br>  traversePostOrder(root);<br>}
                    </code>
                </pre>
            `);
        });
        $(`.${id}-b8`).click(function(e) {
            e.preventDefault();
            $(".services-safira").empty();
            $(".nd").toggleClass("nd-b8");
            $(".nd-b8").append(`
                <h1>Implementations of Binary Search Tree</h1>
                <pre class="exec" style="max-height: 600px; width: 660px;">
                    <code class="cpp hljs">
                      // Binary Search Tree operations in C++<br><br>#include <iostream><br>using namespace std;<br><br>struct node {<br>  int key;<br>  struct node *left, *right;<br>};<br><br>// Create a node<br>struct node *newNode(int item) {<br>  struct node *temp = (struct node *)malloc(sizeof(struct node));<br>  temp->key = item;<br>  temp->left = temp->right = NULL;<br>  return temp;<br>}<br><br>// Inorder Traversal<br>void inorder(struct node *root) {<br>  if (root != NULL) {<br>    // Traverse left<br>    inorder(root->left);<br><br>    // Traverse root<br>    cout << root->key << “ -> ”;<br><br>    // Traverse right<br>    inorder(root->right);<br>  }<br>}<br><br>// Insert a node<br>struct node *insert(struct node *node, int key) {<br>  // Return a new node if the tree is empty<br>  if (node == NULL) return newNode(key);<br><br>  // Traverse to the right place and insert the node<br>  if (key < node->key)<br>    node->left = insert(node->left, key);<br>  else<br>    node->right = insert(node->right, key);<br>  return node;<br>}<br><br>// Find the inorder successor<br>struct node *minValueNode(struct node *node) {<br>  struct node *current = node;<br><br>  // Find the leftmost leaf<br>  while (current && current->left != NULL)<br>    current = current->left;<br><br>  return current;<br>}
                      <br><br>// Deleting a node<br>struct node *deleteNode(struct node *root, int key) {<br>  // Return if the tree is empty<br>  if (root == NULL) return root;<br><br>  // Find the node to be deleted<br>  if (key < root->key)<br>    root->left = deleteNode(root->left, key);<br>  else if (key > root->key)<br>    root->right = deleteNode(root->right, key);<br>  else {<br>    // If the node is with only one child or no child<br>    if (root->left == NULL) {<br>      struct node *temp = root->right;<br>      free(root);<br>      return temp;<br>    } else if (root->right == NULL) {<br>      struct node *temp = root->left;<br>      free(root);<br>      return temp;<br>    }<br><br>    // If the node has two children<br>    struct node *temp = minValueNode(root->right);<br><br>    // Place the inorder successor in position of the node to be deleted<br>    root->key = temp->key;<br><br>    // Delete the inorder successor<br>    root->right = deleteNode(root->right, temp->key);<br>  }<br>  return root;<br>}<br><br>// Driver code<br>int main() {<br>  struct node *root = NULL;<br>  root = insert(root, 8);<br>  root = insert(root, 3);<br>  root = insert(root, 1);<br>  root = insert(root, 6);<br>  root = insert(root, 7);<br>  root = insert(root, 10);<br>  root = insert(root, 14);<br>  root = insert(root, 4);<br><br>  cout << “Inorder traversal: ”;<br>  inorder(root);<br><br>  cout << “\nAfter deleting 10\n”;<br>  root = deleteNode(root, 10);<br>  cout << “Inorder traversal: ”;<br>  inorder(root);<br>}
                    </code>
                </pre>
                <p>The space complexity for all the operations is O(n).</p>
            `);
        });
        $(`.${id}-b10`).click(function(e) {
            e.preventDefault();
            $(".services-safira").empty();
            $(".nd").toggleClass("nd-b10");
            $(".nd-b10").append(`
                <h1>Implementations of DFS Algorithm</h1>
                <p>The code for the Depth First Search Algorithm with an example is shown below. The code has been simplified so that we can focus on the algorithm rather than other details.</p>
                <pre class="exec" style="max-height: 600px; width: 660px;">
                    <code class="cpp hljs">
                      // DFS algorithm in C++<br><br>#include <iostream><br>#include <list><br>using namespace std;<br><br>class Graph {<br>  int numVertices;<br>  list<int> *adjLists;<br>  bool *visited;<br><br>   public:<br>  Graph(int V);<br>  void addEdge(int src, int dest);<br>  void DFS(int vertex);<br>}<br><br>// Initialize graph<br>Graph::Graph(int vertices) {<br>  numVertices = vertices;<br>  adjLists = new list<int>[vertices];<br>  visited = new bool[vertices];<br>}<br><br>// Add edges<br>void Graph::addEdge(int src, int dest) {<br>  adjLists[src].push_front(dest);<br>}<br><br>// DFS algorithm<br>void Graph::DFS(int vertex) {<br>  visited[vertex] = true;<br>  list<int> adjList = adjLists[vertex];<br><br>  cout << vertex << “ ”;<br><br>  list<int>::iterator i;<br>  for (i = adjList.begin(); i != adjList.end(); ++i)<br>    if (!visited[*i])<br>      DFS(*i);<br>}<br><br>int main() {<br>  Graph g(4);<br>  g.addEdge(0, 1);<br>  g.addEdge(0, 2);<br>  g.addEdge(1, 2);<br>  g.addEdge(2, 3);<br><br>  g.DFS(2);<br><br>  return 0;<br>}
                    </code>
                </pre>
                <h2>Complexity of Depth First Search</h2>
                <p>The time complexity of the DFS algorithm is represented in the form of O(V + E), where V is the number of nodes and E is the number of edges.<br><br>The space complexity of the algorithm is O(V).</p>
            `);
        });
    } else {
        $(`.${id}-b1`).click(function(e) {
            e.preventDefault();
            $(".services-safira").empty();
            $(".nd").toggleClass("nd-b1");
            $(".nd-b1").append(`
                <h1>Application of Stack</h1>
                <p>Although stack is a simple data structure to implement, it is very powerful. The most common uses of a stack are:<br>- To reverse a word - Put all the letters in a stack and pop them out. Because of the LIFO order of stack, you will get the letters in reverse order.<br>- In compilers - Compilers use the stack to calculate the value of expressions like 2 + 4 / 5 * (7 - 9) by converting the expression to prefix or postfix form.<br>- In browsers - The back button in a browser saves all the URLs you have visited previously in a stack. Each time you visit a new page, it is added on top of the stack. When you press the back button, the current URL is removed from the stack, and the previous URL is accessed.</p>
            `);
        });
        $(`.${id}-b2`).click(function(e) {
            e.preventDefault();
            $(".services-safira").empty();
            $(".nd").toggleClass("nd-b2");
            $(".nd-b2").append(`
                <h1>Application of Queue</h1>
                <p>- CPU scheduling, Disk Scheduling<br>- When data is transferred asynchronously between two processes.The queue is used for synchronization. For example: IO Buffers, pipes, file IO, etc<br>- Handling of interrupts in real-time systems.<br>- Call Center phone systems use Queues to hold people calling them in order.</p>
            `);
        });
        $(`.${id}-b3`).click(function(e) {
            e.preventDefault();
            $(".services-safira").empty();
            $(".nd").toggleClass("nd-b3");
            $(".nd-b3").append(`
                <h1>Application of Priority Queue</h1>
                <p>Some of the applications of a priority queue are:<br><br>- Dijkstra's algorithm<br><br>- for implementing stack<br><br>- for load balancing and interrupt handling in an operating system<br><br>- for data compression in Huffman code</p>
            `);
        });
        $(`.${id}-b4`).click(function(e) {
            e.preventDefault();
            $(".services-safira").empty();
            $(".nd").toggleClass("nd-b4");
            $(".nd-b4").append(`
                <h1>Application of Single Linked List</h1>
                <p>- Dynamic memory allocation<br><br>- Implemented in stack and queue<br><br>- In undo functionality of softwares<br><br>- Hash tables, Graphs</p>
            `);
        });
        $(`.${id}-b5`).click(function(e) {
            e.preventDefault();
            $(".services-safira").empty();
            $(".nd").toggleClass("nd-b5");
            $(".nd-b5").append(`
                <h1>Application of Double Linked List</h1>
                <p>1. Redo and undo functionality in software.<br><br>2. Forward and backward navigation in browsers.<br><br>3. For navigation systems where forward and backward navigation is required.</p>
            `);
        });
        $(`.${id}-b6`).click(function(e) {
            e.preventDefault();
            $(".services-safira").empty();
            $(".nd").toggleClass("nd-b6");
            $(".nd-b6").append(`
                <h1>Application of Tree Data Structure</h1>
                <p>1. Binary Search Trees(BSTs) are used to quickly check whether an element is present in a set or not.<br>2. Heap is a kind of tree that is used for heap sort.<br>3. A modified version of a tree called Tries is used in modern routers to store routing information.<br>4. Most popular databases use B-Trees and T-Trees, which are variants of the tree structure we learned above to store their data<br>5. Compilers use a syntax tree to validate the syntax of every program you write.</p>
            `);
        });
        $(`.${id}-b7`).click(function(e) {
            e.preventDefault();
            $(".services-safira").empty();
            $(".nd").toggleClass("nd-b7");
            $(".nd-b7").append(`
                <h1>Application of Binary Tree</h1>
                <p>1. For easy and quick access to data<br><br>2. In router algorithms<br><br>3. To implement heap data structure<br><br>4. Syntax tree</p>
            `);
        });
        $(`.${id}-b8`).click(function(e) {
            e.preventDefault();
            $(".services-safira").empty();
            $(".nd").toggleClass("nd-b8");
            $(".nd-b8").append(`
                <h1>Application of Binary Search Tree</h1>
                <p>1. In multilevel indexing in the database<br><br>2. For dynamic sorting<br><br>3. For managing virtual memory areas in Unix kernel</p>
            `);
        });
        $(`.${id}-b9`).click(function(e) {
            e.preventDefault();
            $(".services-safira").empty();
            $(".nd").toggleClass("nd-b9");
            $(".nd-b9").append(`
                <h1>Application of Graph Data Structure</h1>
                <h2>1. Adjacency Matrix Applications</h2>
                <p>- Creating routing table in networks<br><br>- Navigation tasks</p>
                <h2>2. Applications of Adjacency List</h2>
                <p>It is faster to use adjacency lists for graphs having less number of edges.</p>
            `);
        });
        $(`.${id}-b10`).click(function(e) {
            e.preventDefault();
            $(".services-safira").empty();
            $(".nd").toggleClass("nd-b10");
            $(".nd-b10").append(`
                <h1>Application of DFS Algorithm</h1>
                <p>1. For finding the path<br><br>2. To test if the graph is bipartite<br><br>3. For finding the strongly connected components of a graph<br><br>4. For detecting cycles in a graph</p>
            `);
        });
    }
};