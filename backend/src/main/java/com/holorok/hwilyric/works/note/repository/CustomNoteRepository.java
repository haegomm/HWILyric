package com.holorok.hwilyric.works.note.repository;

import com.holorok.hwilyric.works.note.domain.Note;

import java.util.List;

public interface CustomNoteRepository {
    List<Note> findAllByUserId(Long userId);
}