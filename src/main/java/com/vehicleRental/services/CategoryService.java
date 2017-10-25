package com.vehicleRental.services;

import com.vehicleRental.domain.Category;

/**
 * Created by thabomoopa on 2017/10/25.
 */
public interface CategoryService {
    Category create(Category category);
    Category read(long id);
    Category update(Category category);
    void delete(long id);
    Category findByName(String name);
}
