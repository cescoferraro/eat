import * as Faker from "faker";

export class JobFactory  {
    company: string;
    title: string;
    subtitle: string;
    content: string;
    image: string;
    url: string;

    constructor() {
        return {
            company: Faker.company.companyName(),
            title: Faker.commerce.productName(),
            subtitle: Faker.lorem.sentence(),
            content: Faker.lorem.paragraph(),
            image: Faker.image.imageUrl(),
            url: Faker.internet.url(),
        };
    }
}
