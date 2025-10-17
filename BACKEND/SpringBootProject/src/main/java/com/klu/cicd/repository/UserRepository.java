package com.klu.cicd.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.klu.cicd.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
}
