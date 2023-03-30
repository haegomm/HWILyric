package com.holorok.hwilyric.works.note.repository;

import com.holorok.hwilyric.works.note.domain.Note;
import org.springframework.data.jpa.repository.support.SimpleJpaRepository;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface NoteRepository extends MongoRepository<Note, String> {
    List<Note> findAllByUserId(Long userId);
}