import * as Faker from "faker";

export class WorkersFactory<AppWorker> {
    name: string;
    job: string;
    avatar: string;
    country: string;

    constructor() {
        return {
            name: Faker.name.findName(),
            job: Faker.name.jobTitle(),
            avatar: Faker.image.imageUrl(),

            country: Faker.address.country()
        };
    }
}
