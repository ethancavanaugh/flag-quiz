package com.ethancavanaugh.flagquiz.repositories;

import com.ethancavanaugh.flagquiz.model.Country;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CountryRepository extends JpaRepository<Country, Long> {
    public List<Country> findCountriesByContinent(String continent);
}
