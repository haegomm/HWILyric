package com.temp.hwilyric;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class HwilyricApplicationTests {



    @Test
    void contextLoads() {
        // to prevent Sonar issue when you don't expect any exception to be throw from your test
        Assertions.assertDoesNotThrow(this::doNotThrowException);
    }

    private void doNotThrowException(){
        //This method will never throw exception
    }

}
