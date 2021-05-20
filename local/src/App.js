class App {

    buildEntities(data, domElts) {
        const presentation = new Presentation(data.presentation);
        presentation.display(domElts.presentation);

        const experiences = new Experiences({experiences : data.experiencesData.experiences, params: data.experiencesParams }, domElts.experiences);
        const trainnings = new Trainings({trainings: data.trainingData.trainings, params:data.trainingParams}, domElts.trainings);
        // const skills = new Skills({skills: data.skillsData.skills, params:data.skillsParams}, domElts.skills);

    }

    async loadData() {
        const response = await fetch('/public/js/json/db.json');
        const data = await response.json();


        return data;
    }



}