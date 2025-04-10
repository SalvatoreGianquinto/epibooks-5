import Welcome from "../components/Welcome"
import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"

describe("Welcome test", () => {
  it("mounts correctly the title", () => {
    render(<Welcome />)
    const title = screen.getByText(/benvenuti in EpiBooks!/i)
    expect(title).toBeInTheDocument()
  })
})
