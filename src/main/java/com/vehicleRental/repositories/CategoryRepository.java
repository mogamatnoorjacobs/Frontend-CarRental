package com.vehicleRental.repositories;

import com.vehicleRental.domain.Category;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by thabomoopa on 2017/10/25.
 */
public interface CategoryRepository extends CrudRepository<Category, Long>{
    Category findByName(String name);
}
