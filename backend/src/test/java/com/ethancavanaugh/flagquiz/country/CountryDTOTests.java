package com.ethancavanaugh.flagquiz.country;

import com.ethancavanaugh.flagquiz.model.Country;
import com.ethancavanaugh.flagquiz.model.CountryDTO;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class CountryDTOTests {
    private static Country c1;
    private static Country c2;

    @BeforeAll
    static void setup(){
        c1 = new Country(1L, "United States of America", "North America", "US", "USA",
                "https://flagsapi.com/US/flat/64.png",
                new ArrayList<String>(Arrays.asList("United States", "USA", "America")));

        c2 = new Country(2L, "Canada", "North America", "CA", "CAN",
                "https://flagsapi.com/CA/flat/64.png",
                new ArrayList<String>());

    }

    @Test
    @DisplayName("Convert single Countries to DTO successfully")
    void singleCountry(){
        CountryDTO c1DTO = CountryDTO.of(c1);

        assertEquals(c1.getId(), c1DTO.getId());
        assertEquals(c1.getFlagUrl(), c1DTO.getFlagUrl());
        assertTrue(c1DTO.getValidNames().contains(c1.getName()));
        assertTrue(c1DTO.getValidNames().containsAll(c1.getAliases()));
    }

    @Test
    @DisplayName("Convert single Country with empty alias list to DTO successfully")
    void singleCountryNoAliases(){
        CountryDTO c2DTO = CountryDTO.of(c2);

        assertEquals(c2DTO.getValidNames(),
                new ArrayList<>(List.of(c2.getName())));
    }

    @Test
    @DisplayName("Convert list of countries to list of DTOs successfully")
    void countryListToDTOList() {
        List<Country> countries = new ArrayList<>(List.of(c1, c2));
        CountryDTO c1DTO = CountryDTO.of(c1);
        CountryDTO c2DTO = CountryDTO.of(c2);

        List<CountryDTO> dtoList = CountryDTO.of(countries);

        assertEquals(2, dtoList.size());
        assertEquals(c1DTO, dtoList.get(0));
        assertEquals(c2DTO, dtoList.get(1));
    }
}
