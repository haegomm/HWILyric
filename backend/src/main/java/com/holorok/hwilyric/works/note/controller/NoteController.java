package com.holorok.hwilyric.works.note.controller;

import com.holorok.hwilyric.works.note.domain.Note;
import com.holorok.hwilyric.works.note.dto.AutoSaveRes;
import com.holorok.hwilyric.works.note.dto.NoteReq;
import com.holorok.hwilyric.works.note.dto.NoteRes;
import com.holorok.hwilyric.works.note.service.NoteService;
import com.holorok.hwilyric.user.domain.User;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/notes")
@Api(tags = {"작사노트 CRUD"})
public class NoteController {

    @Autowired
    private NoteService noteService;
    private static final String SUCCESS = "success";
    private static final String FAIL = "fail";

    @PostMapping("/save")
    public ResponseEntity<AutoSaveRes> addNote(@RequestBody NoteReq note, HttpServletRequest httpServletRequest) {
        User user = (User) httpServletRequest.getAttribute("user");
        AutoSaveRes newNote = noteService.save(note, user.getId());

        return new ResponseEntity<>(newNote, HttpStatus.OK);
    }

    @GetMapping("/list")
    public ResponseEntity<List<NoteRes>> getNoteList(HttpServletRequest httpServletRequest) {
        User user = (User) httpServletRequest.getAttribute("user");

        return new ResponseEntity<>(noteService.selectAll(user.getId()), HttpStatus.OK);
    }

    @GetMapping("/detail")
    public ResponseEntity<Note> getNoteDetail(@RequestParam String noteId) {
        Note note = noteService.selectOne(noteId);
        if(note==null)
            return new ResponseEntity<>(new Note(), HttpStatus.NO_CONTENT);
        return new ResponseEntity<>(note, HttpStatus.OK);
    }

    @DeleteMapping
    public ResponseEntity<String> deleteNote(@RequestParam String noteId) {
        if(noteService.delete(noteId))
            return new ResponseEntity<>(SUCCESS, HttpStatus.NO_CONTENT);
        return new ResponseEntity<>(FAIL, HttpStatus.NO_CONTENT);
    }

}