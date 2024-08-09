package com.example.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.model.Cost;

@Repository
public interface CostRepository extends JpaRepository<Cost, Integer> {

    // Find cost by tour ID
    Optional<Cost> findByTour_Id(Integer tourId);
}
