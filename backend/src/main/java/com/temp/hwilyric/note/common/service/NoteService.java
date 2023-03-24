package com.temp.hwilyric.note.common.service;

import com.temp.hwilyric.note.common.domain.Note;
import com.temp.hwilyric.note.common.repository.NoteRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Slf4j
@Service
public class NoteService {

    @Autowired
    private NoteRepository noteRepository;

    public Note insert(Note newNote) {
        return noteRepository.save(newNote);
    }

    public List<Note> selectAll() {
        return noteRepository.findAll();
    }

}
