package users;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QBaseDateEntity is a Querydsl query type for BaseDateEntity
 */
@Generated("com.querydsl.codegen.DefaultSupertypeSerializer")
public class QBaseDateEntity extends EntityPathBase<BaseDateEntity> {

    private static final long serialVersionUID = 2144574376L;

    public static final QBaseDateEntity baseDateEntity = new QBaseDateEntity("baseDateEntity");

    public final DateTimePath<java.time.LocalDateTime> modDate = createDateTime("modDate", java.time.LocalDateTime.class);

    public final DateTimePath<java.time.LocalDateTime> regDate = createDateTime("regDate", java.time.LocalDateTime.class);

    public QBaseDateEntity(String variable) {
        super(BaseDateEntity.class, forVariable(variable));
    }

    public QBaseDateEntity(Path<? extends BaseDateEntity> path) {
        super(path.getType(), path.getMetadata());
    }

    public QBaseDateEntity(PathMetadata metadata) {
        super(BaseDateEntity.class, metadata);
    }

}

