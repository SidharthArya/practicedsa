# Practice DSA Content Repository

Welcome to the Practice DSA content repository! This is where all the coding problems, test cases, and code templates for our platform are stored.

We welcome contributions! If you'd like to add a new problem, please follow the guidelines below.

## Directory Structure

- `problems/`: Contains the main problem descriptions and metadata in Markdown (`.md`) format.
- `testcases/`: Contains the test cases for each problem. Each problem has its own folder here containing JSON/YAML files for individual test cases.
- `starterCodes/`: Contains the initial code templates provided to users for different languages.
- `preCodes/`: Contains code that is executed *before* the user's code (e.g., hidden setup or imports).
- `postCodes/`: Contains code that is executed *after* the user's code (e.g., evaluation and assertions).
- `config.ts`: Defines the schema and validation rules for all the content collections using Astro's content collections API.

## How to Contribute a New Problem

To add a new problem to the platform, you will need to create a few files across different directories.

### 1. Create the Problem Description

Create a new Markdown file in the `problems/` directory (e.g., `problems/my-new-problem.md`).

This file must include frontmatter containing the problem metadata, followed by the complete problem description.

```markdown
---
title: "Title of the Problem"
description: "A short, one-sentence summary of what the problem asks."
difficulty: "easy" # Can be 'easy', 'medium', or 'hard'
tags: ["Array", "Math"] # Optional tags
languages:
  python:
    entryPoint: "function_name"
    starterCodeId: "python/my-new-problem" # Links to starterCodes/python/my-new-problem.md
  javascript:
    entryPoint: "functionName"
    starterCodeId: "javascript/my-new-problem"
---
# Problem Description

Write your detailed description here...
```

### 2. Add Test Cases

Create a new folder in the `testcases/` directory matching your problem's ID (e.g., `testcases/my-new-problem/`). 

Inside this folder, add `.json` or `.yaml` files for each test case.
Each test case file must follow this schema:

```json
{
  "input": [1, 2, 3],
  "expected": 6,
  "hidden": false
}
```
*Note: Set `"hidden": true` if you don't want the user to see this testcase prior to submitting.*

### 3. Provide Starter Code (Optional but Recommended)

For each language you support, add a starter code file in `starterCodes/` inside a folder for that language (e.g., `starterCodes/python/my-new-problem.md`).

### 4. Provide Pre/Post Validation Code (If Needed)

If your problem requires custom setup or validation (like linked list conversions, tree building, or specialized assertion logic), add the necessary code to `preCodes/` and `postCodes/` respectively, and reference them in the problem's frontmatter (`preCodeId`, `postCodeId`).

## Local Testing

If you are running the platform locally, changes to these files will be automatically detected and validated via Astro's content collections schema defined in `config.ts`. If you miss a required field or provide an incorrect type, the development server will throw an error to help you fix it.

Happy contributing!
