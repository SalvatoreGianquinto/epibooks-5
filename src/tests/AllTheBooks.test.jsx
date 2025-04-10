import { fireEvent, render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import AllTheBooks from "../components/AllTheBooks"
import books from "../data/fantasy.json"
import BoookList from "../components/BookList"

describe("bootstrap card test", () => {
  it("renders the correct number of Bootstrap cards", () => {
    render(<AllTheBooks />)
    const cards = screen.getAllByTestId("book-card")
    expect(cards).toHaveLength(books.length)
  })

  it("renders 3 cards searching for Witcher", () => {
    render(<BoookList books={fantasy} />)
    const filterInput = screen.getByPlaceholderText("Cerca un libro")
    fireEvent.change(filterInput, {
      target: {
        value: "witcher",
      },
    })
    const allTheImages = screen.getAllByRole("img")
    expect(allTheImages).toHaveLength(3)
  })
})
