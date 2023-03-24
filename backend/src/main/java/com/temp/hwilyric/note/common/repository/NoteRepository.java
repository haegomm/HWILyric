package com.temp.hwilyric.note.common.repository;

import com.temp.hwilyric.note.common.domain.Note;
import org.aspectj.weaver.ast.Not;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface NoteRepository extends MongoRepository<Note, Long> {
    List<Note> findByUserId(Long userId);
}
