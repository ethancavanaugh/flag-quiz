package com.ethancavanaugh.flagquiz.controllers;

import com.ethancavanaugh.flagquiz.model.Country;
import com.ethancavanaugh.flagquiz.model.CountryDTO;
import com.ethancavanaugh.flagquiz.services.CountryService;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@Controller
@CrossOrigin(origins = "http://localhost:4200")
public class CountryController {
    private final CountryService countryService;

    public CountryController(CountryService countryService) {
        this.countryService = countryService;
    }

    @ResponseBody
    @GetMapping("/countries")
    public List<CountryDTO> getCountries(
            @RequestParam(required=false) String continent,
            @RequestParam(required=false) Integer numQuestions) {

        return countryService.findCountries(continent, numQuestions);
    }
}
