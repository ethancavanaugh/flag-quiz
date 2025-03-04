package com.ethancavanaugh.flagquiz.controllers;

import com.ethancavanaugh.flagquiz.model.Country;
import com.ethancavanaugh.flagquiz.services.CountryService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Random;

@RestController
public class CountryController {
    private final CountryService countryService;

    public CountryController(CountryService countryService) {
        this.countryService = countryService;
    }

    @GetMapping("/countries")
    public List<Country> getCountries(){
        return countryService.getAllCountries();
    }

    @GetMapping("/countries/random")
    public Country getRandomCountry(){
        return countryService.getRandomCountry();
    }
}
