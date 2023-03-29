package com.holorok.hwilyric.works.note.repository;

import com.holorok.hwilyric.works.note.domain.Note;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NoteRepository extends MongoRepository<Note, String>, CustomNoteRepository {

}