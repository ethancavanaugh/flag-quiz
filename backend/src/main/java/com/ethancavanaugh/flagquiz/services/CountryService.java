package com.ethancavanaugh.flagquiz.services;

import com.ethancavanaugh.flagquiz.model.Country;
import com.ethancavanaugh.flagquiz.model.CountryDTO;
import com.ethancavanaugh.flagquiz.repositories.CountryRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Service
public class CountryService {
    private static final String COUNTRY_CSV_PATH = "src/main/resources/UN_Members_Req_Cols.csv";
    private final CountryRepository countryRepository;

    public CountryService(CountryRepository countryRepository) {
        this.countryRepository = countryRepository;
    }

    @PostConstruct
    public void loadCountriesFromCSV() {
        List<Country> countries = new ArrayList<>();

        try(BufferedReader br = new BufferedReader(new FileReader(COUNTRY_CSV_PATH))){
            br.readLine();
            br.lines()
                    .map(Country::fromCsvLine)
                    .forEach(countries::add);
        } catch (IOException e) {System.err.println(e.getMessage());}

        countryRepository.saveAll(countries);
    }

    public List<CountryDTO> getAllCountries(){
        List<Country> countries = countryRepository.findAll();
        return CountryDTO.of(countries);
    }

    public List<CountryDTO> findByContinent(String continent){
        List<Country> countries = countryRepository.findCountriesByContinent(continent);
        return CountryDTO.of(countries);
    }

    public Country getRandomCountry(){
        List<Country> countries = countryRepository.findAll();

        Random random = new Random();
        int randomIdx = random.nextInt(countries.size());

        return countries.get(randomIdx);
    }

}
