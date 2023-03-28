package com.holorok.hwilyric.works.note.repository;

import com.holorok.hwilyric.works.note.domain.Note;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

//@EnableMongoRepositories(basePackages = "com.temp.hwilyric.note.common.repository")
//@EnableJpaRepositories
@Repository
public interface NoteRepository extends MongoRepository<Note, String> {
    List<Note> findAllByUserId(Long userId);

}
