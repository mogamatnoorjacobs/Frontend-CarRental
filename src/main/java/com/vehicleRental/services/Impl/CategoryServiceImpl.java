package com.vehicleRental.services.Impl;

import com.vehicleRental.domain.Category;
import com.vehicleRental.repositories.CategoryRepository;
import com.vehicleRental.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * Created by thabomoopa on 2017/10/25.
 */
@Component
public class CategoryServiceImpl implements CategoryService{

    @Autowired
    CategoryRepository categoryRepository;

    @Override
    public Category create(Category category) {
        return categoryRepository.save(category);
    }

    @Override
    public Category read(long id) {
        return categoryRepository.findOne(id);
    }

    @Override
    public Category update(Category category) {
        return categoryRepository.save(category);
    }

    @Override
    public void delete(long id) {
        categoryRepository.delete(id);

    }

    @Override
    public Category findByName(String name) {
        return categoryRepository.findByName(name);
    }
}
