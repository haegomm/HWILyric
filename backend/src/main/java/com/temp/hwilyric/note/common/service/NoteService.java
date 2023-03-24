package com.temp.hwilyric.note.common.service;

import com.temp.hwilyric.note.common.repository.NoteRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@Transactional(readOnly = true)
public class NoteService {

    @Autowired
    private NoteRepository noteRepository;


}
