"use client";

import { useEffect } from "react";
import hljs from "highlight.js";

export default function CodeHighlighter() {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return null;
}
