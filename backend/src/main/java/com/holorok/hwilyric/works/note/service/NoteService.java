package com.holorok.hwilyric.works.note.service;

import com.fasterxml.jackson.databind.JavaType;
import com.fasterxml.jackson.databind.type.TypeFactory;
import com.holorok.hwilyric.exception.NotFoundException;
import com.holorok.hwilyric.works.note.dto.AutoSaveRes;
import com.holorok.hwilyric.works.note.dto.NoteReq;
import com.holorok.hwilyric.works.note.dto.NoteRes;
import com.holorok.hwilyric.works.note.repository.NoteRepository;
import com.holorok.hwilyric.works.note.domain.Note;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import javax.transaction.Transactional;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class NoteService {

    private NoteRepository noteRepository;
    private ZonedDateTimeWriteConverter timeWriter = new ZonedDateTimeWriteConverter();
    private ZonedDateTimeReadConverter timeReader = new ZonedDateTimeReadConverter();
    public NoteService(NoteRepository noteRepository) {
        this.noteRepository = noteRepository;
    }

    @Transactional
    public AutoSaveRes save(NoteReq note, Long userId) {

        Optional<Note> findNote = noteRepository.findById(note.getId());

        Note savedNote;

        //첫 저장일 경우
        if(!findNote.isPresent()) {
            savedNote = Note.builder()
                    .id(null)
                    .title(note.getTitle())
                    .userId(userId)
                    .thumbnail(note.getThumbnail())
                    .memo(note.getMemo())
                    .lyricList(note.getLyricList())
                    .createdDate(timeWriter.convert(ZonedDateTime.now()))
                    .updatedDate(timeWriter.convert(ZonedDateTime.now()))
                    .build();
        } else { //업데이트일 경우
            Note foundNote = findNote.get();
            savedNote = Note.builder()
                    .id(note.getId())
                    .title(note.getTitle())
                    .userId(userId)
                    .thumbnail(note.getThumbnail())
                    .memo(note.getMemo())
                    .lyricList(note.getLyricList())
                    .createdDate(foundNote.getCreatedDate())
                    .updatedDate(timeWriter.convert(ZonedDateTime.now()))
                    .build();
        }

        savedNote = noteRepository.save(savedNote);

        AutoSaveRes res = AutoSaveRes.builder()
                .id(savedNote.getId())
                .updatedDate(timeReader.convert(savedNote.getUpdatedDate()))
                .build();

        return res;
    }

    public List<NoteRes> selectAll(Long userId) {
        List<NoteRes> result = new ArrayList<>();
        List<Note> noteList = noteRepository.findAllByUserId(userId);

        if(noteList.size()<1)
            throw new NotFoundException("당신... 노트를 하나도 작성하지 않았군");

        for(Note n: noteList) {
            NoteRes res = NoteRes.builder()
                    .id(n.getId())
                    .title(n.getTitle())
                    .thumbnail(n.getThumbnail())
                    .memo(n.getMemo())
                    .lyricList(n.getLyricList())
                    .createdDate(n.getCreatedDate())
                    .updatedDate(n.getUpdatedDate())
                    .build();
            result.add(res);
        }

        return result;

    }

    public NoteRes selectOne(String noteId) {
        Note findNote = noteRepository
                .findById(noteId)
                .orElseThrow(() -> new NotFoundException("그런 노트는 없다는데요"));

        NoteRes result = NoteRes.builder()
                .id(findNote.getId())
                .title(findNote.getTitle())
                .thumbnail(findNote.getThumbnail())
                .memo(findNote.getMemo())
                .lyricList(findNote.getLyricList())
                .createdDate(findNote.getCreatedDate())
                .updatedDate(findNote.getUpdatedDate())
                .build();

        return result;
    }

    @Transactional
    public boolean delete(String noteId) {
        Note findNote = noteRepository
                .findById(noteId)
                .orElseThrow(() -> new NotFoundException("이미 삭제된 노트일지도?"));

        noteRepository.delete(findNote);
        return true;
    }
}