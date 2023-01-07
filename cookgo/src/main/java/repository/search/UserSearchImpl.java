package repository.search;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

import com.querydsl.core.BooleanBuilder;
import com.querydsl.jpa.JPQLQuery;

import users.QUser;
import users.User;

public class UserSearchImpl extends QuerydslRepositorySupport implements UserSearch{
	public UserSearchImpl() {
		super(User.class);
	}
	
	@Override
	public Page<User> search(Pageable pageable){
		QUser user = QUser.user; // QDomain
		JPQLQuery<User> query = from(user); // select .. from user
		query.where(user.id.contains("1")); // where id like ...
		
		// paging
		this.getQuerydsl().applyPagination(pageable,query); // pageable
		
		List<User> list = query.fetch(); // 결과
		long count = query.fetchCount();
		
		return new PageImpl<>(list,pageable,count);
	}
	
	@Override
	public Page<User> searchAll(String id,Pageable pageable){
		
		QUser user = QUser.user;
		JPQLQuery<User> query = from(user);
		
		BooleanBuilder booleanBuilder = new BooleanBuilder();
		
		booleanBuilder.or(user.id.contains(id)); // id 포함 조건
		query.where(booleanBuilder);
		
		this.getQuerydsl().applyPagination(pageable, query); // 페이지네이션 적용
		List<User> list = query.fetch();
		long count = query.fetchCount();

		return new PageImpl<>(list,pageable,count);
	}
}
