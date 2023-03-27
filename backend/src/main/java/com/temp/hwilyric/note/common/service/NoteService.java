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
    public Note insert(Note note, Long userId) {
        Note newNote = Note.builder()
                .id(note.getId())
                .title(note.getTitle())
                .userId(userId)
                .thumnail(note.getThumnail())
                .memo(note.getMemo())
                .lyricList(note.getLyricList())
                .build();
        return noteRepository.save(newNote);
    }

    public List<Note> selectAll(Long userId) {
        return noteRepository.findAllByUserId(userId);
    }

    public Note selectOne(String noteId) {
        Note findNote = noteRepository.findById(noteId).get();
        Note result = Note.builder()
                .id(findNote.getId())
                .title(findNote.getTitle())
                .thumnail(findNote.getThumnail())
                .memo(findNote.getMemo())
                .lyricList(findNote.getLyricList())
                .build();

        return result;
    }

//    public Note update(Note newNote) {
//        return noteRepository.save(newNote);
//    }

    public boolean delete(String noteId) {
        Note note = noteRepository.findById(noteId).get();
        noteRepository.delete(note);
        return true;
    }
}
