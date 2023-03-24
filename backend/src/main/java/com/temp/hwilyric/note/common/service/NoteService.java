package com.temp.hwilyric.note.common.service;

import com.temp.hwilyric.note.common.domain.Note;
import com.temp.hwilyric.note.common.repository.NoteRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class NoteService {

    @Autowired
    private NoteRepository noteRepository;

    public Note insert(Note newNote) {
        return noteRepository.save(newNote);
    }

//    public List<Note> selectAll() {
//        return noteRepository.findAll();
//    }

    public List<Note> selectAll(Long userId) {
        return noteRepository.findAllByUserId(userId);
    }

    public Note selectOne(String noteId) {
        return noteRepository.findById(noteId).get();
    }

    public Note update(Note newNote) {
        return noteRepository.save(newNote);
    }

    public boolean delete(String noteId) {
        Note note = noteRepository.findById(noteId).get();
        note.setActive(false);
        return true;
    }
}
