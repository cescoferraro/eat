import * as Chance from "chance";
let chance = new Chance();


export const postData: Array<Post> = [
    {
        title: chance.word(),
        subtitle: chance.sentence(),
        content: chance.paragraph()
    }
];
