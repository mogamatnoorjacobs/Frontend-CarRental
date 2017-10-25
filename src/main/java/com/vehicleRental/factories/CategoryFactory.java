package com.vehicleRental.factories;

import com.vehicleRental.domain.Category;

/**
 * Created by thabomoopa on 2017/10/25.
 */
public class CategoryFactory {
    public static Category getCategory(String name, double price)
    {
        Category category = new Category.Builder()
                .name(name)
                .price(price)
                .build();
        return category;
    }
}
