import * as Faker from "faker";

export class WorkersFactory<AppWorker> {
    name: string;
    job: string;
    avatar: string;

    constructor() {
        return {
            name: Faker.name.findName(),
            job: Faker.name.jobTitle(),
            avatar: Faker.image.imageUrl()
        };
    }
}
