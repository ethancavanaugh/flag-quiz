package com.ethancavanaugh.flagquiz.controllers;

import com.ethancavanaugh.flagquiz.model.Country;
import com.ethancavanaugh.flagquiz.services.CountryService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;


@Controller
public class CountryController {
    private final CountryService countryService;

    public CountryController(CountryService countryService) {
        this.countryService = countryService;
    }

    @GetMapping("/")
    public String getRandomCountry(Model model){
        Country country = countryService.getRandomCountry();
        model.addAttribute("country", country);
        return "single-country.html";
    }

    @ResponseBody
    @GetMapping("/countries")
    public List<Country> getCountries(){
        return countryService.getAllCountries();
    }

}
