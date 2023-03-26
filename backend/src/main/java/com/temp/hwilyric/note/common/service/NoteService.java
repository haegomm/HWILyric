package com.temp.hwilyric.note.common.service;

import com.temp.hwilyric.note.common.domain.Note;
import com.temp.hwilyric.note.common.repository.NoteRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

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
