

// console.log(comp);
var zones = {
    "tags": document.getElementById('tags'),
    "types": document.getElementById('types'),
    "competences": document.getElementById('competences'),
};

var compet = new Competances(zones);
comps.forEach(elt => {
    var comp = new Competance(elt);
    compet._add(comp);
});

// console.log(compet);
compet.displayTypes();
compet.displayTags();
compet.displayCompetance();
   