//package com.holorok.hwilyric.works.note.repository;
//
//import com.holorok.hwilyric.works.note.domain.Note;
//import com.holorok.hwilyric.works.note.domain.QNote;
//import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
//import org.springframework.data.mongodb.core.MongoOperations;
//
//import java.util.List;
//
//public class NoteRepositoryImpl extends QuerydslRepositorySupport implements NoteRepositoryWrapper {
//
//    private static final QNote note = QNote.note;
//
//    public NoteRepositoryImpl(MongoOperations operations) {
//        super(operations.getClass());
//    }
//
//    @Override
//    public List<Note> findAllByUserId(Long userId) {
//        return from(note).where(note.userId.eq(userId)).fetchAll().fetch();
//    }
//}
