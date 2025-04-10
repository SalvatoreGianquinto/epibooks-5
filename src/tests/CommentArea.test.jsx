import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import CommentArea from "../components/CommentArea"

describe("comment area test", () => {
  it("mounts comment area", () => {
    render(<CommentArea />)
    const commentarea = screen.getByTestId("comment-area")
    expect(commentarea).toBeInTheDocument()
  })
})
