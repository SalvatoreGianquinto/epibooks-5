import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import AllTheBooks from "../components/AllTheBooks"
import books from "../data/fantasy.json"

describe("bootstrap card test", () => {
  it("renders the correct number of Bootstrap cards", () => {
    render(<AllTheBooks />)
    const cards = screen.getAllByTestId("book-card")
    expect(cards).toHaveLength(books.length)
  })
})
