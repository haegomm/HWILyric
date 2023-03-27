package com.temp.hwilyric.note.common.repository;

import com.temp.hwilyric.note.common.domain.Note;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.stereotype.Repository;

import java.util.List;

//@EnableMongoRepositories(basePackages = "com.temp.hwilyric.note.common.repository")
//@EnableJpaRepositories
@Repository
public interface NoteRepository extends MongoRepository<Note, String> {
    List<Note> findAllByUserId(Long userId);

}
