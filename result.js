// get url parameters //
let searchMethod;
let backwardGoal;

function getUrlParameters() {
    let urlStr = window.location.search;

    if (urlStr == "") {
        urlStr += "?";
    }

    urlStr = urlStr.split("?")[1].split("&");

    let urlPar = {};
    urlPar["leafs_other_notes"] = [];
    urlStr.forEach((obj) => {
        if (obj == "") return;

        let name = obj.split("=")[0];
        let value = obj.split("=")[1];
        value = value.replaceAll("%22", "");
        value = value.replaceAll("%27", "");
        value = value.replaceAll("%20", " ");

        if (name == "search_method") {
            searchMethod = value;
        } else if (name == "result") {
            backwardGoal = value;
        } else if (name.includes("leafs_other_notes")) {
            urlPar["leafs_other_notes"].push(
                name.replace("leafs_other_notes-", "")
            );
        } else {
            urlPar[name] = value;
        }
    });

    return urlPar;
}
//  //

let urlPar = getUrlParameters();

console.table(urlPar);

function get_ideas(urlPar, guide) {
    let urlKeys = Object.keys(urlPar);

    let ideas = [];

    urlKeys.forEach((key) => {
        if (key == "leafs_other_notes") {
            urlPar["leafs_other_notes"].forEach((obj) => {
                ideas.push(guide["leafs_other_notes_" + obj]["id"]);
            });
        } else if (urlPar[key] == 0) return;
        else {
            ideas.push(guide[key + "_" + urlPar[key]]["id"]);
        }
    });

    return ideas;
}

// ------------------------------------------------------------------- //
function list_contains(list, ele) {
    let result = false;
    list.forEach((e) => {
        if (e == ele) result = true;
    });

    return result;
}

function list_match(list_1, list_2) {
    let result = true;
    list_1.forEach((l1) => {
        if (!list_contains(list_2, l1)) result = false;
    });

    return result;
}

function list_contains_list(list, sub_list) {
    let result = true;
    sub_list.forEach((ele) => {
        if (!list_contains(list, ele)) result = false;
    });

    return result;
}

let database = get_ideas(urlPar, information["guide"]);
let rules = information["rules"];

console.table(database);

function forward_chaining(database, rules, conflictMethod = "first") {
    let conflictSet = [];

    while (true) {
        let conflict = [];
        let rulesKeys = Object.keys(rules);

        // get all possible rules to fire
        rulesKeys.forEach((key) => {
            if (list_contains_list(database, rules[key]["left_side"])) {
                conflict.push(key);
            }
        });

        // stop when no rules to fire
        if (conflict.length == 0) break;

        // select the rule appear to the conflict method
        if (conflictMethod == "first") {
            // select the first rule
            conflictSet.push({ rules: conflict, selected: conflict[0] }); // save the conflict
            database.push(rules[conflict[0]]["right_side"]); // add the rule right side to the database
            rules[conflict[0]]["left_side"].push("Used"); // remove the used rule
        } else if (conflictMethod == "long") {
            // looking for the most rule left side length index
            let maxLength = 0;
            let maxIndex = 0;

            conflict.forEach((conf, index) => {
                let length = rules[conf]["left_side"].length;
                if (length > maxLength) {
                    maxLength = length;
                    maxIndex = index;
                }
            });

            // select the most left side rule length
            conflictSet.push({ rules: conflict, selected: conflict[maxIndex] }); // save the conflict
            database.push(rules[conflict[maxIndex]]["right_side"]); // add the rule right side to the database
            rules[conflict[maxIndex]]["left_side"].push("Used"); // remove the used rule
        }
    }

    return { conflictSet, database };
}

function backward_chaining(goal, database, rules, subGoalsList) {
    // check if the goal is in the database
    if (list_contains(database, goal)) return true;

    let conflict = [];
    let result = false;

    let rulesKeys = Object.keys(rules);

    // get all possible rules to get the goal
    rulesKeys.forEach((key) => {
        if (rules[key]["right_side"] == goal) {
            conflict.push(key);
        }
    });

    // loop threw all the possible rules
    conflict.forEach((key) => {
        if (result) return; // stop when find one correct rule

        let test = true;
        rules[key]["left_side"].forEach((subGoal) => {
            if (!test) return; // stop when find one sub goal not correct 

            subGoalsList.push({ subGoal });
            if (!backward_chaining(subGoal, database, rules, subGoalsList))
                test = false; // find a sub goal not correct
        });
        if (test) result = true; // if all sub goal are correct then the rule is correct
    });

    return result;
}
let sss = [];
console.log(backward_chaining("r4", [16, 35, 5], rules, sss));
