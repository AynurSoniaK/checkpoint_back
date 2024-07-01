import { Repository } from "typeorm";
import datasource from "../lib/datasource";
import Country, {InputCreateCountry} from "../entities/country.entity";

export default class CountryService {
  db: Repository<Country>;
  constructor() {
    this.db = datasource.getRepository(Country);
  }

  async listCountry() {
    return this.db.find();
  }

  async listCountriesByContinent(continent: string) {
    return await this.db.find({
        where: {
            continent: continent
        }
    });
}

  async findCountryByCode(code: string) {
    return await this.db.findOneBy({ code });
  }

  async createCountry({ code, name, emoji, continent }: InputCreateCountry) {
    const newCountry = this.db.create({ code, name, emoji, continent });
    return await this.db.save(newCountry);
  }
}
