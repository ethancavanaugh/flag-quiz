package com.ethancavanaugh.flagquiz.model;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class CountryDTO {
    private Long id;
    private String flagUrl;
    private List<String> validNames;

    public static CountryDTO of(Country c){
        CountryDTO dto = new CountryDTO();
        dto.setId(c.getId());
        dto.setFlagUrl(c.getFlagUrl());

        List<String> validNames = new ArrayList<>();
        validNames.add(c.getName());
        validNames.addAll(c.getAliases());
        dto.setValidNames(validNames);

        return dto;
    }

    public static List<CountryDTO> of(List<Country> countries){
        return countries.stream()
                .map(CountryDTO::of)
                .toList();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFlagUrl() {
        return flagUrl;
    }

    public void setFlagUrl(String flagUrl) {
        this.flagUrl = flagUrl;
    }

    public List<String> getValidNames() {
        return validNames;
    }

    public void setValidNames(List<String> validNames) {
        this.validNames = validNames;
    }

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        CountryDTO that = (CountryDTO) o;
        return Objects.equals(id, that.id) && Objects.equals(flagUrl, that.flagUrl) && Objects.equals(validNames, that.validNames);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, flagUrl, validNames);
    }
}
