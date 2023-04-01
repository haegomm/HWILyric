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
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
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

    @PostMapping(value = "/save", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<AutoSaveRes> addNote(@RequestPart(value = "noteInfo") NoteReq note, @RequestPart(value = "thumbnail", required = false) MultipartFile multipartFile, HttpServletRequest httpServletRequest) throws Exception {
        User user = (User) httpServletRequest.getAttribute("user");
        AutoSaveRes savedNote = noteService.save(note, user.getId(), multipartFile);

        return new ResponseEntity<>(savedNote, HttpStatus.OK);
    }

    @GetMapping("/list")
    public ResponseEntity<List<NoteRes>> getNoteList(HttpServletRequest httpServletRequest) {
        User user = (User) httpServletRequest.getAttribute("user");

        return new ResponseEntity<>(noteService.selectAll(user.getId()), HttpStatus.OK);
    }

    @GetMapping("/detail")
    public ResponseEntity<NoteRes> getNoteDetail(@RequestParam String noteId) {
        NoteRes note = noteService.selectOne(noteId);

        return new ResponseEntity<>(note, HttpStatus.OK);
    }

    @DeleteMapping
    public ResponseEntity<String> deleteNote(@RequestParam String noteId) {
        noteService.delete(noteId);
        return new ResponseEntity<>(SUCCESS, HttpStatus.OK);
    }

}