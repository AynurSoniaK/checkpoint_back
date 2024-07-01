import { Arg, Mutation, Query, Resolver } from "type-graphql";
import CountryService from "../services/country.service";
import Country, {InputCreateCountry} from "../entities/country.entity";

@Resolver()
export default class CountryResolver {
  @Query(() => [Country])
  async countries() {
    return await new CountryService().listCountry();
  }

  @Query(() => [Country])
  async countriesByContinent(@Arg("continent") continent: string) {
    return await new CountryService().listCountriesByContinent(continent);
  }

  @Query(() => Country)
  async findCountryByCode(@Arg("code") code: string) {
    const country = await new CountryService().findCountryByCode(code);
    return country;
  }

  @Mutation(() => Country)
  async addCountry(@Arg("infos") infos: InputCreateCountry) {
    console.log("Mes infos => ", infos);
    const country = await new CountryService().findCountryByCode(infos.code);
    if (country) {
      throw new Error("Ce pays existe déjà.");
    }
    const newCountry = await new CountryService().createCountry(infos);
    return newCountry;
  }
}
