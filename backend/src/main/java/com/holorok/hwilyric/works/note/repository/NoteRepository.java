package com.holorok.hwilyric.works.note.repository;

import com.holorok.hwilyric.works.note.domain.Note;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface NoteRepository extends MongoRepository<Note, String>, QuerydslPredicateExecutor<Note>, NoteRepositoryWrapper {

}