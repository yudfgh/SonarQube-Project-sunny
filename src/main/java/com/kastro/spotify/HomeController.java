package com.kastro.spotify;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/") // Maps to the root URL
    public String index() {
        return "index"; // This should match the name of your HTML file in templates
    }
}
