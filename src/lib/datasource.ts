import { DataSource } from "typeorm";
import Country from "../entities/country.entity";

export default new DataSource({
    type: "sqlite",
    database:"./countries.sqlite",
    entities: [Country],
    synchronize: true,
    logging: ["error", "query"]
})