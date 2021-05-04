const appDomElts = {
    skills: document.getElementById('skills'),
    trainings: document.getElementById('trainings'),
    experiences: document.getElementById('experiences')
}

const app = new App();
app.loadData()
    .then(data => {
        app.buildEntities(data, appDomElts);
    })
    .catch(error => {
        console.error(error);
    });

    

