package Service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Entity.User;
import Repository.UserRepository;

@Service
public class UserService {
	@Autowired
    private UserRepository repo;
public List<User> listAll() {
        return repo.findAll();
    }
    
    public void save(User u) {
        repo.save(u);
    }
    
    public User get(long id) {
        return repo.findById(id).get();
    }
    
    public void delete(long id) {
        repo.deleteById(id);
    }
}