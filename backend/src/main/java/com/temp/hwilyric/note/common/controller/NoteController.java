package com.temp.hwilyric.note.common.controller;

import com.temp.hwilyric.note.common.domain.Note;
import com.temp.hwilyric.note.common.service.NoteService;
import com.temp.hwilyric.user.domain.User;
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

    @PostMapping("/insert")
    public ResponseEntity<String> addNote(@RequestBody Note note) {
        Note newNote = noteService.insert(note);
        if(newNote == null)
            return new ResponseEntity<>(FAIL, HttpStatus.NO_CONTENT);
        return new ResponseEntity<>(newNote.getId(), HttpStatus.OK);
        
    }

    @GetMapping("/list")
    public ResponseEntity<List<Note>> getNoteList(HttpServletRequest httpServletRequest) {
        User user = (User) httpServletRequest.getAttribute("user");

        List<Note> noteList = noteService.selectAll(user.getId());

        if(noteList == null)
            return new ResponseEntity<>(new ArrayList<Note>(), HttpStatus.NO_CONTENT);
        return new ResponseEntity<>(noteList, HttpStatus.OK);
    }

    @GetMapping("/detail")
    public ResponseEntity<Note> getNoteDetail(@RequestParam String noteId) {
        Note note = noteService.selectOne(noteId);
        if(note==null)
            return new ResponseEntity<>(new Note(), HttpStatus.NO_CONTENT);
        return new ResponseEntity<>(note, HttpStatus.OK);
    }

    @PostMapping("/update")
    public ResponseEntity<String> updateNote(@RequestBody Note note) {
        Note newNote = noteService.update(note);
        if(newNote == null)
            return new ResponseEntity<>(FAIL, HttpStatus.NO_CONTENT);
        return new ResponseEntity<>(newNote.getId(), HttpStatus.OK);
    }

    @DeleteMapping
    public ResponseEntity<String> deleteNote(@RequestParam String noteId) {
        if(noteService.delete(noteId))
            return new ResponseEntity<>(SUCCESS, HttpStatus.NO_CONTENT);
        return new ResponseEntity<>(FAIL, HttpStatus.NO_CONTENT);
    }


}
