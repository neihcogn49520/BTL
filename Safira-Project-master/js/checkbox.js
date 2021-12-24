$(document).ready(function() {
    const courses = [{
            content: "Definition",
            link: "#",
            category: ["Def"],
        },
        {
            content: "Operation",
            link: "#",
            category: ["Ope"],
        },
        {
            content: "Implementations",
            link: "#",
            category: ["Com"],
        },
        {
            content: "Appication",
            link: "#",
            category: ["App"],
        },
    ];

    renderTeam(courses, "#checkboxs");
});

function renderTeam(list, selector) {
    list.map((val, index) => {
        $(
            `<input onClick ="updateList()" type="checkbox" class="vehicle" name="vehicle" value="${val.category[0]}">
         <label for="vehicle1"> ${val.content}</label><br>`
        ).appendTo(selector);
    });
}