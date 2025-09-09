## Project Overview

This project uses Playwright (TypeScript) for automated web testing, structured with the Page Object Model (POM) and enhanced by an AI-driven component for test generation and execution.

### Structure

**There are two main modules:**

1. **Manual Playwright Tests**
	- Traditional Playwright tests written by hand, following the POM pattern.

2. **AI Automated Tests**
	- Tests generated and executed using GitHub Copilot and the MCP server, following a scenario-driven approach.
	- The AI component uses a prompt and scenario file to generate Playwright tests automatically.

---

## AI Component: Structure & Flow (Non-Technical Overview)

The AI component is designed to make test automation easy, even for non-technical users. Here’s how it works:

### 1. Scenario Input
You describe what you want to test in plain language (a scenario file, e.g., `validateDevelopmentPage.txt`).

### 2. AI Test Generation
The AI reads your scenario and, using a prompt (instructions), generates Playwright test code. It follows best practices like the Page Object Model (POM) for maintainability.

### 3. Page Object Model (POM)
The AI creates or updates special files called "Page Objects" (in `pages/aiPages/`). Each Page Object represents a web page and contains reusable actions (like clicking a button or validating text).

### 4. Test File Creation
The AI generates a test file (in `tests/webAI/`) that uses these Page Objects to perform the steps in your scenario.

### 5. Test Execution
You run the test using Playwright. The test opens the browser, performs the steps, and checks the results automatically.

---

## Hierarchy View

```
Fiserv Project Root
│
├── pages/
│   └── aiPages/
│        ├── FiservHomePage.ts         # Page Object for Fiserv Home
│        └── FiservDevelopersPage.ts   # Page Object for Developers Page
│
├── tests/
│   └── webAI/
│        └── validateDevelopmentPage.spec.ts  # AI-generated test using POM
│
├── ai.testScripts/
│        └── validateDevelopmentPage.txt      # Scenario file (plain English)
│
├── testPrompt/
│        └── testContext.txt                 # AI prompt/instructions
│
└── README.md
```

---

## How the AI Flow Works (Step-by-Step)

1. **Write a scenario** in plain English (e.g., "Go to the homepage, accept cookies, click Developers...").
2. **AI reads the scenario** and the prompt, then generates:
	 - Page Object files (if needed)
	 - A Playwright test file that uses those Page Objects
3. **Run the test** with Playwright. The browser opens, steps are performed, and results are checked.

---

## REQUIREMENTS
- Node.js 18 or newer
- VS Code, Cursor, Windsurf, Claude Desktop, Goose or any other MCP client

## TEST RUN
- Project created for normal playwrite Web Test 'ws' 
    [npx playwright test --project=ws]
- Project created for run AI test 'ai'
    [npx playwright test --project=ai]
- Project created for run CI/CD test 'ci'
    [npx playwright test --project=ci]