package com.temp.hwilyric.note.common.controller;

import com.temp.hwilyric.note.common.domain.Note;
import com.temp.hwilyric.note.common.service.NoteService;
import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.xml.ws.Response;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/notes")
@Api(tags = {"작사노트 CRUD"})
public class NoteController {

    @Autowired
    private NoteService service;

    @PostMapping("/insert")
    public ResponseEntity<Note> insert(@RequestBody Note note) {
        Note newNote = service.insert(note);
        if(newNote == null)
            return new ResponseEntity<>(note, HttpStatus.NO_CONTENT);
        return new ResponseEntity<>(newNote, HttpStatus.ACCEPTED);
    }

    @GetMapping("/list")
    public ResponseEntity<List<Note>> selectAll() {
        List<Note> noteList = service.selectAll();
        if(noteList == null)
            return new ResponseEntity<>(new ArrayList<Note>(), HttpStatus.NO_CONTENT);
        return new ResponseEntity<>(noteList, HttpStatus.ACCEPTED);
    }
}
