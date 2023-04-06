package com.holorok.hwilyric.works.note.service;

import com.holorok.hwilyric.common.AwsService;
import com.holorok.hwilyric.exception.NotFoundException;
import com.holorok.hwilyric.works.note.dto.AutoSaveRes;
import com.holorok.hwilyric.works.note.dto.NoteReq;
import com.holorok.hwilyric.works.note.dto.NoteRes;
import com.holorok.hwilyric.works.note.domain.Note;
import com.holorok.hwilyric.works.note.repository.NoteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.swing.text.html.Option;
import javax.transaction.Transactional;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class NoteService {

    private final NoteRepository noteRepository;
    private ZonedDateTimeWriteConverter timeWriter = new ZonedDateTimeWriteConverter();
    private ZonedDateTimeReadConverter timeReader = new ZonedDateTimeReadConverter();
    private final AwsService awsService;

    @Transactional
    public AutoSaveRes save(NoteReq note, Long userId, MultipartFile multipartFile) throws Exception {

        Optional<Note> findNote = noteRepository.findById(note.getId());

        //기본 이미지
        String thumbnailImg = "https://holorok-hwilyric-bucket.s3.ap-northeast-2.amazonaws.com/thumbnail/default_thumbnail_1.jpg";

        //사용자가 파일을 업로드한 경우
        if(multipartFile != null) {
            thumbnailImg = awsService.upload(multipartFile, "thumbnail");
        }

        Note savedNote;

        //첫 저장일 경우
        if(!findNote.isPresent()) {
            savedNote = Note.builder()
                    .id(null)
                    .title(note.getTitle())
                    .userId(userId)
                    .thumbnail(thumbnailImg)
                    .memo(note.getMemo())
                    .lyricList(note.getLyricList())
                    .createdDate(timeWriter.convert(ZonedDateTime.now()))
                    .updatedDate(timeWriter.convert(ZonedDateTime.now()))
                    .build();
        } else { //업데이트일 경우
            Note foundNote = findNote.get();

            //사용자가 파일을 업로드하지는 않았지만 이전에 썸네일을 업로드한 경우 -> 기본 이미지로 바뀌면 안됨
            if(foundNote.getThumbnail().equals(note.getThumbnail()))
                thumbnailImg = foundNote.getThumbnail();

            savedNote = Note.builder()
                    .id(note.getId())
                    .title(note.getTitle())
                    .userId(userId)
                    .thumbnail(thumbnailImg)
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
                .thumbnail(savedNote.getThumbnail())
                .build();

        return res;
    }

    public List<NoteRes> selectAll(Long userId) {
        List<NoteRes> result = new ArrayList<>();
        List<Note> noteList = noteRepository.findAllByUserId(userId);

        if(noteList.isEmpty())
            throw new NotFoundException("작성한 노트가 없습니다.");

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
                .orElseThrow(() -> new NotFoundException("잘못된 noteId 이거나 이미 삭제된 noteId 입니다."));

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
                .orElseThrow(() -> new NotFoundException("이미 삭제된 노트입니다."));

        noteRepository.delete(findNote);
        return true;
    }
}