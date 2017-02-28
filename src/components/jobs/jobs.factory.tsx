import * as Faker from "faker";

export class JobFactory {
    company: string;
    title: string;
    subtitle: string;
    content: string;
    image: string;
    url: string;

    constructor() {
        return {
            company: Faker.company.companyName(),
            title: Faker.name.jobType(),
            subtitle: Faker.name.jobDescriptor(),
            content: Faker.lorem.paragraph(),
            image: Faker.image.imageUrl(),
            url: Faker.internet.url(),
        };
    }
}
