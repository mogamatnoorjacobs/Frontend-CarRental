package com.vehicleRental.controller;

import com.vehicleRental.domain.Category;
import com.vehicleRental.factories.CategoryFactory;
import com.vehicleRental.services.Impl.CategoryServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by thabomoopa on 2017/10/25.
 */
@Controller
@RequestMapping(path = "/category")
public class CategoryController {

    private Category category;

    @Autowired
    private CategoryServiceImpl categoryService;

    @GetMapping (path="/addCategory")
    public @ResponseBody Category create(@RequestParam String name, @RequestParam double price)
    {
        category = CategoryFactory.getCategory(name, price);
       return  categoryService.create(category);
    }

    @GetMapping (path="/findByName")
    public @ResponseBody Category findByName(@RequestParam String name)
    {
        return categoryService.findByName(name);
    }

}
