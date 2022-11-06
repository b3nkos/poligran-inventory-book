package co.edu.poli.acmelibrary.controllers;

import co.edu.poli.acmelibrary.dtos.BookDTO;
import co.edu.poli.acmelibrary.services.BookService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/books")
public class BookController {

    private final BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @Operation(summary = "Save a new Book")
    @PostMapping
    public BookDTO saveNewBook(@RequestBody BookDTO bookDTO) {
        return bookService.createNewBook(bookDTO);
    }

    @Operation(summary = "Delete a Book")
    @DeleteMapping
    public BookDTO deleteBook(@RequestBody BookDTO bookDTO) throws Exception {
        return bookService.deleteBook(bookDTO);
    }

    @Operation(summary = "Update an existing book")
    @PutMapping("/{id}")
    public BookDTO updateBook(@PathVariable(name = "id") Long bookId, @RequestBody BookDTO bookDTO) throws Exception {

        return bookService.updateBook(new BookDTO(
                bookId,
                bookDTO.getName(),
                bookDTO.getDescription(),
                bookDTO.getAuthor(),
                bookDTO.getIsbn(),
                bookDTO.getPrice(),
                bookDTO.getCategory(),
                bookDTO.getPublicationYear()
        ));
    }

    @Operation(summary = "Obtain a book by a book id")
    @GetMapping("/{id}")
    public BookDTO findBookById(@PathVariable(name = "id") Long bookId) {
        Optional<BookDTO> optionalBookDTO = bookService.findBookById(bookId);
        return optionalBookDTO.orElse(null);
    }

    @Operation(summary = "Retrieve a list of all saved books")
    @GetMapping
    public List<BookDTO> findAllBooks() {
        return bookService.getBookList();
    }
}
