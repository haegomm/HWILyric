package com.temp.hwilyric;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class HwilyricApplication {

    public static void main(String[] args) {
        SpringApplication.run(HwilyricApplication.class, args);
    }

}
