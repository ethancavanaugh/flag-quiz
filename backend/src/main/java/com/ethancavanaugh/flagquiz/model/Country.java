package com.ethancavanaugh.flagquiz.model;

import jakarta.persistence.*;

import java.util.List;
import java.util.Objects;

@Entity
public class Country {
    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String continent;

    @Column(nullable = false)
    private String alpha2;

    @Column(nullable = false)
    private String alpha3;

    @Column(name = "flag_url", nullable = false)
    private String flagUrl;

    @ElementCollection
    private List<String> aliases;

    public static Country fromCsvLine(String line){
        String[] args = line.split(",");

        Country c = new Country();
        c.setName(args[0]);
        c.setContinent(args[1]);
        c.setAlpha2(args[2]);
        c.setAlpha3(args[3]);
        if (args.length == 5){
            c.setAliases(List.of(args[4].split(";")));
        }
        c.setFlagUrl(String.format("https://flagsapi.com/%s/flat/64.png", args[2]));

        return c;
    }

    public Country() {
    }

    public Country(Long id, String name, String continent, String alpha2,
                   String alpha3, String flagUrl, List<String> aliases) {
        this.id = id;
        this.name = name;
        this.continent = continent;
        this.alpha2 = alpha2;
        this.alpha3 = alpha3;
        this.flagUrl = flagUrl;
        this.aliases = aliases;
    }

    //Getters and Setters
    public List<String> getAliases() {
        return aliases;
    }

    public void setAliases(List<String> aliases) {
        this.aliases = aliases;
    }

    public String getAlpha3() {
        return alpha3;
    }

    public void setAlpha3(String alpha3) {
        this.alpha3 = alpha3;
    }

    public String getFlagUrl() {
        return flagUrl;
    }

    public void setFlagUrl(String flagUrl) {
        this.flagUrl = flagUrl;
    }

    public String getAlpha2() {
        return alpha2;
    }

    public void setAlpha2(String alpha2) {
        this.alpha2 = alpha2;
    }

    public String getContinent() {
        return continent;
    }

    public void setContinent(String continent) {
        this.continent = continent;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        Country country = (Country) o;
        return Objects.equals(id, country.id) && Objects.equals(name, country.name) && Objects.equals(continent, country.continent) && Objects.equals(alpha2, country.alpha2) && Objects.equals(alpha3, country.alpha3) && Objects.equals(flagUrl, country.flagUrl) && Objects.equals(aliases, country.aliases);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, continent, alpha2, alpha3, flagUrl, aliases);
    }
}
