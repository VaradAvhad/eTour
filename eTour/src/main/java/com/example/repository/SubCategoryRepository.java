package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.example.model.SubCategory;


@Repository

public interface SubCategoryRepository extends JpaRepository<SubCategory, Integer> 
{
   
}
