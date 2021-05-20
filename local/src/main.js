const appDomElts = {
    presentation: {
        photo: [
            document.getElementById('photo')
        ],
        name: document.getElementById('name'),
        age: document.getElementById('age'),
        address: document.getElementById('address'),
        postalCode: document.getElementById('postalCode'),
        city: document.getElementById('city'),
        links : document.getElementById('links'),
        about: document.getElementById('about')
    },
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

    

