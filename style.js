function get_facts(database) {
    let result = "";
    database.forEach((fact) => {
        result += `<span>${fact}</span>`;
    });
    return result;
}

function get_conflictSet(conflictSet) {
    // {rules: Array(1), selected: 'R2'}
    let result = "";
    conflictSet.forEach((conflict) => {
        result += '<div class="conflict">';
        result += '<div class="possible-rules">';

        conflict["rules"].forEach((rule) => {
            result += `<span>${rule}</span>`;
        });

        result += "</div>";

        result += '<div class="possible-rules">';

        result += `<p>Selected Rule is:</p>`;
        result += `<span>${conflict["selected"]}</span>`;

        result += "</div>";
        result += "</div>";
    });
    return result;
}

// show the forward or the backward panel
const resultSection = document.querySelector("section.result");
if (searchMethod == "forward") {
    resultSection.classList.add("forward"); // show the forward-chaining panel

    // get the result
    let forward_result_first = forward_chaining(
        copy_list(database),
        copy_dict(rules),
        "first"
    );
    let forward_result_long = forward_chaining(
        copy_list(database),
        copy_dict(rules),
        "first"
    );

    // the forward information's
    const forward_first_database = document.querySelector(
        ".forward-chaining .first-method .data-base .facts"
    );
    forward_first_database.innerHTML = get_facts(
        forward_result_first["database"]
    );

    const forward_first_conflictSet = document.querySelector(
        ".forward-chaining .first-method .conflict-set .conflicts-container"
    );
    forward_first_conflictSet.innerHTML = get_conflictSet(
        forward_result_first["conflictSet"]
    );

    // fill the backward
    const forward_long_database = document.querySelector(
        ".forward-chaining .long-method .data-base .facts"
    );
    forward_long_database.innerHTML = get_facts(
        forward_result_long["database"]
    );

    const forward_long_conflictSet = document.querySelector(
        ".forward-chaining .long-method .conflict-set .conflicts-container"
    );
    forward_long_conflictSet.innerHTML = get_conflictSet(
        forward_result_long["conflictSet"]
    );

    // show the result
    const result_panel = document.querySelector("section.result .result span");

    result_panel.innerHTML =
        information["results"][
            information["rules"][
                forward_result_first["conflictSet"][
                    forward_result_first["conflictSet"].length - 1
                ]["selected"]
            ]["right_side"]
        ]["disease_name"];
} else if (searchMethod == "backward") {
    resultSection.classList.add("backward"); // show the backward chaining panel

    // get the result
    let subGoals = [];
    let backward_result = backward_chaining(
        backwardGoal,
        database,
        rules,
        subGoals
    );

    // the forward information's
    const backward_result_panel = document.querySelector(
        ".backward-chaining .result"
    );

    if (backward_result == true) {
        backward_result_panel.innerHTML = "";
        backward_result_panel.innerHTML += "<p>The goal</p>";
        backward_result_panel.innerHTML += `<span>${backwardGoal}</span>`;
        backward_result_panel.innerHTML += "<br>";
        backward_result_panel.innerHTML += "<p><p>Inferred</p></p>";
    } else {
        backward_result_panel.innerHTML = "";
        backward_result_panel.innerHTML += "<p>The goal</p>";
        backward_result_panel.innerHTML += `<span>${backwardGoal}</span>`;
        backward_result_panel.innerHTML += "<br>";
        backward_result_panel.innerHTML += "<p><p>can't be Inferred</p></p>";
    }

    const backward_database = document.querySelector(
        ".backward-chaining .information .container .data-base .facts"
    );
    backward_database.innerHTML = get_facts(database);

    const backward_conflictSet = document.querySelector(
        ".backward-chaining .information .container .conflict-set .conflicts-container"
    );
    backward_conflictSet.innerHTML = get_facts(subGoals);
}
