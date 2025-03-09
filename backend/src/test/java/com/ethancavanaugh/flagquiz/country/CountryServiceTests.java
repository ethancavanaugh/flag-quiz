package com.ethancavanaugh.flagquiz.country;

import com.ethancavanaugh.flagquiz.model.Country;
import com.ethancavanaugh.flagquiz.repositories.CountryRepository;
import com.ethancavanaugh.flagquiz.services.CountryService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;

import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class CountryServiceTests {
    @Mock
    private CountryRepository countryRepository;

    @InjectMocks
    private CountryService countryService;

    @Test
    @DisplayName("All 193 countries should be read from the csv file & saved")
    void loadCountries() {
        countryService.loadCountriesFromCSV();
        verify(countryRepository)
                .saveAll(argThat(countries ->
                        ((List<Country>) countries).size() == 193));
    }
}
