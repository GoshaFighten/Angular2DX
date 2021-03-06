import { Injectable } from "@angular/core";

import { Country } from "../../models/country";
import { COUNTRIES } from "./mock-countries";

@Injectable()
export class CountryService {
    getCountries(): Promise<Country[]> {
        return Promise.resolve(COUNTRIES);
    }
}