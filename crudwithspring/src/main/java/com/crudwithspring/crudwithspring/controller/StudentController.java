package com.crudwithspring.crudwithspring.controller;

import com.crudwithspring.crudwithspring.model.Student;
import com.crudwithspring.crudwithspring.repository.StudentRepo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
public class StudentController {

    Logger logger = LoggerFactory.getLogger(StudentController.class);
    @Autowired
    private StudentRepo studentRepository;

    // @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/create")
    public String createStudent(@RequestBody Student student) {
        studentRepository.insert(student);
        return "Student added";
    }

    // @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/mass-add")
    public String addMassStudents(@RequestBody ArrayList<Student> students) {
        for (Student student : students) {
            studentRepository.insert(student);
        }
        return "Students added";
    }

    // @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/get-by-name")
    public Student getStudentByName(@RequestBody Student student) {
        List<Student> students;
        students = studentRepository.findAll();
        Student foundStudent = new Student();
        for (Student stud : students) {
            System.out.println(stud.getFirstName());
            if (stud.getFirstName().equals(student.getFirstName())) {
                foundStudent = stud;
            }
        }
        return foundStudent;
    }

    // @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/delete/{id}")
    public void deleteStudent(@PathVariable String id) {
        studentRepository.deleteById(id);
        System.out.println(id);
    }

    // @CrossOrigin(origins = "http://localhost:3000")
    @PatchMapping("/update/{id}")
    public void updateStudent(@PathVariable String id, @RequestBody Student student) {

        Optional<Student> foundStudent = studentRepository.findById(id);
        Student studentToEdit = foundStudent.get();
        studentToEdit.setFirstName(student.getFirstName());
        studentToEdit.setLastName(student.getLastName());
        studentRepository.save(studentToEdit);

    }

    // @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/list")
    public List<Student> listStudents() {

        List<Student> students = new ArrayList<>();
        students = studentRepository.findAll();

        return students;
    }

}
