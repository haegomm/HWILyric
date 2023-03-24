package com.temp.hwilyric.note.common.repository;

import com.temp.hwilyric.note.common.domain.Note;
import org.aspectj.weaver.ast.Not;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NoteRepository extends MongoRepository<Note, Long> {
//    List<Note> findByUserId(Long userId);
}
