package repository.search;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import users.User;

public interface UserSearch {
	Page<User> search(Pageable pageable);
	
	Page<User> searchAll(String id,Pageable pageable);
}
