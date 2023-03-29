package com.holorok.hwilyric.works.note.service;

import com.holorok.hwilyric.exception.NotFoundException;
import com.holorok.hwilyric.works.note.dto.AutoSaveRes;
import com.holorok.hwilyric.works.note.dto.NoteReq;
import com.holorok.hwilyric.works.note.dto.NoteRes;
import com.holorok.hwilyric.works.note.repository.NoteRepository;
import com.holorok.hwilyric.works.note.domain.Note;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
public class NoteService {

    @Autowired
    private NoteRepository noteRepository;
    public AutoSaveRes save(NoteReq note, Long userId) {
        if(note.getId().equals(""))
            note.setId(null);

        Note newNote = Note.builder()
                .id(note.getId())
                .title(note.getTitle())
                .userId(userId)
                .thumbnail(note.getThumbnail())
                .memo(note.getMemo())
                .lyricList(note.getLyricList())
                .build();
        newNote = noteRepository.save(newNote);

        AutoSaveRes res = AutoSaveRes.builder()
                .id(newNote.getId())
//                .updatedDate(newNote.getUpdated_date())
                .build();

        return res;
    }

    public List<NoteRes> selectAll(Long userId) {
        List<NoteRes> result = new ArrayList<>();
        List<Note> noteList = noteRepository.findAllByUserId(userId);

        if(noteList == null) throw new NotFoundException("작성한 노트가 없습니다.");

        for(Note n: noteList) {
            NoteRes res = NoteRes.builder()
                    .id(n.getId())
                    .title(n.getTitle())
                    .thumbnail(n.getThumbnail())
                    .memo(n.getMemo())
                    .lyricList(n.getLyricList())
//                    .createdDate()
//                    .updatedDate()
                    .build();
            result.add(res);
        }

        return result;

    }

    public Note selectOne(String noteId) {
        Note findNote = noteRepository.findById(noteId).get();
        Note result = Note.builder()
                .id(findNote.getId())
                .title(findNote.getTitle())
                .thumbnail(findNote.getThumbnail())
                .memo(findNote.getMemo())
                .lyricList(findNote.getLyricList())
                .build();

        return result;
    }

    public boolean delete(String noteId) {
        Note note = noteRepository.findById(noteId).get();
        noteRepository.delete(note);
        return true;
    }
}