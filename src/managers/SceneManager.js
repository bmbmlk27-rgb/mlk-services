class SceneManager {

    constructor() {

        this.scenes = [];

    }

    add(scene) {

        this.scenes.push(scene);

    }

    render() {

        this.scenes.forEach(scene => {

            if(scene.update){

                scene.update();

            }

        });

    }

}

export default new SceneManager();